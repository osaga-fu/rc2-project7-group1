/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ResourceList.css";

export const ResourceList = ({needsReload, setNeedsReload}) => {
  const [items, setItems] = useState([]);
  const URL = "http://localhost:9000/items";
  

  useEffect(() => {
    console.log(needsReload)
    if (needsReload) {
      fetch(URL)
        .then((response) =>response.json())
        .then((data) => {
        
          setItems(data);
          setNeedsReload(false);
        });
    }
  }, [needsReload]);

  return (
    <main className="containerList">
      {items.map((item) => (
        <section className="elementList" key={item.id}>
          <h3 className="titleElement">{item.title}</h3>
          <article className="elementContainer">
            <a href={item.url} target="_blank">

            <h4 className="element">{item.url}</h4>
            </a>
          </article>
        </section>
      ))}
    </main>
  );
};
