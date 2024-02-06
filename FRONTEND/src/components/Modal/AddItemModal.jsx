import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal, IconButton } from "@mui/material";
import { FormAddItem } from "../FormAddItem/FormAddItem";
import CloseIcon from "@mui/icons-material/Close";
import "./AddItemModal.css";
import { useResourcesContext } from "../Context/ResourcesContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { setNeedsReload, open, handleOpen, handleClose } =
    useResourcesContext();

  return (
    <div className="containerOpenModal">
      <h1 className="title">Guarda aquí tus recursos</h1>
      <Button onClick={handleOpen}>
        <div className="buttonAddText">
          AÑADIR
          <input type="submit" value="+" className="buttonAdd" />
        </div>
      </Button>
      <Modal setNeedsReload={setNeedsReload} open={open} onClose={handleClose}>
        <Box sx={style}>
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <FormAddItem />
        </Box>
      </Modal>
    </div>
  );
}
