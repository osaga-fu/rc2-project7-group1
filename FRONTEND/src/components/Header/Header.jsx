import { FormAddItem } from "../FormAddItem/FormAddItem";
import  AddItemModal  from "../Modal/AddItemModal";
import { Logo } from "../Logo/Logo";

export const Header = ({ setNeedsReload }) => {
  return (
    <header>
      <Logo />
      <FormAddItem setNeedsReload={setNeedsReload} />
      <AddItemModal setNeedsReload={setNeedsReload} />
    </header>
  );
};
