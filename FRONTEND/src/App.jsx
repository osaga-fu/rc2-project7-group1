import "./App.css";
import { ResourceList } from "./components/ResourceList/ResourceList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header/Header";

function App() {
  const [needsReload, setNeedsReload] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header setNeedsReload={setNeedsReload} />} />
        <Route
          path="/edit/:id"
          element={<Header setNeedsReload={setNeedsReload} />}
        />
      </Routes>
      <ResourceList setNeedsReload={setNeedsReload} needsReload={needsReload} />
    </BrowserRouter>
  );
}

export default App;
