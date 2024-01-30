/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./FormAddItem.css";
import { useState } from "react";

export const FormAddItem = ({ setNeedsReload }) => {
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemUrl, setNewItemUrl] = useState("");

  const URL = "http://localhost:9000/items";

  const postItem = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newItemTitle, url: newItemUrl }),
    };
    fetch(URL, options).then((response) => {
      if (response.ok) {
        setNewItemTitle("");
        setNewItemUrl("");
        setNeedsReload(true);
      }
    });
  };

  return (
      <form onSubmit={postItem} className="formContainer">
        <div  className="inputContainer">
          <input
            className="formInput"
            name="title"
            type="text"
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            className="formInput"
            name="url"
            type="text"
            value={newItemUrl}
            onChange={(e) => setNewItemUrl(e.target.value)}
            placeholder="URL"
          />
        </div>
        <div className="buttonAddContainer">
          <button className="buttonAddText">
            Añadir
            <input
              disabled={newItemTitle === ""}
              type="submit"
              value="+"
              className="buttonAdd"
            />
          </button>
        </div>
      </form>
  );
};
