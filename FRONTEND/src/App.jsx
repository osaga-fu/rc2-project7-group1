import './App.css'
import { Logo } from './components/Logo/Logo'
import { ResourceList } from './components/ResourceList/ResourceList'

import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemUrl, setNewItemUrl] = useState("");
  const [needsReload, setNeedsReload] = useState(true);
  const URL = "http://localhost:9000/items"

  useEffect(() => {
    if (needsReload) {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setItems(data);
          setNeedsReload(false);
        })
    }
  }, [needsReload]);

  const postItem = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newItemTitle, url:newItemUrl })
    };
    fetch(URL, options)
      .then(response => {
        if (response.ok) {
          setNewItemTitle("");
          setNewItemUrl("");
          setNeedsReload(true);
        }
      })
  }

  return (
    <>
      <form onSubmit={postItem}>
        <label htmlFor='title'>
          Title
          <input name='title' type='text' value={newItemTitle} onChange={e => setNewItemTitle(e.target.value)} />
        </label>
        <label htmlFor='url'>
          URL
          <input name='url' type='text' value={newItemUrl} onChange={e => setNewItemUrl(e.target.value)} />
        </label>
        <input disabled={newItemTitle === ""} type='submit' value="Create" />
      </form>
      <ul>
        {items.map(item => <li key={item.id}>{`${item.title} ${item.url}`}</li>)}
      </ul>
      <Logo />
      <ResourceList />
    </>
  )
}

export default App
