import "./App.css";
import { FormAddItem } from "./components/FormAddItem/FormAddItem";
import { Logo } from "./components/Logo/Logo";
import { ResourceList } from "./components/ResourceList/ResourceList";

import { useState } from "react";

function App() {
  const [needsReload, setNeedsReload] = useState(true);

  return (
    <>
      <header>
        <Logo />
        <FormAddItem setNeedsReload={setNeedsReload} />
      </header>
      <ResourceList setNeedsReload={setNeedsReload} needsReload={needsReload} />
    </>
  );
}

export default App;
