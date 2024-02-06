
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal, IconButton } from "@mui/material";
import { FormAddItem } from "../FormAddItem/FormAddItem";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import "./AddItemModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  p: 4,
  border: "none",
};

export default function BasicModal({ setNeedsReload }) {
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setShowMessage(false);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="containerOpenModal">
      <h1 className="title">TODOS TUS RECURSOS, EN UN MISMO LUGAR</h1>
      <Button onClick={handleOpen} >
        <div className="buttonAddText">AÑADIR
          <input
            type="submit"
            value="+"
            className="buttonAdd"
          />
        </div>
      </Button>
      <Modal
        setNeedsReload={setNeedsReload}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 30,

            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <FormAddItem
            setNeedsReload={setNeedsReload}
            setShowMessage={setShowMessage}
            showMessage={showMessage}
          />
        </Box>
      </Modal>
    </div>
  );
}
