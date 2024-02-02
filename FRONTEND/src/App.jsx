import "./App.css";
import { FormAddItem } from "./components/FormAddItem/FormAddItem";
import { Logo } from "./components/Logo/Logo";
import { ResourceList } from "./components/ResourceList/ResourceList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [needsReload, setNeedsReload] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <header>
              <Logo />
              <FormAddItem setNeedsReload={setNeedsReload} />
            </header>
            <ResourceList setNeedsReload={setNeedsReload} needsReload={needsReload} />
          </div>} />
        <Route path="/edit/:id" element={
          <div>
            <header>
              <Logo />
              <FormAddItem setNeedsReload={setNeedsReload} />
            </header>
            <ResourceList setNeedsReload={setNeedsReload} needsReload={needsReload} />
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
