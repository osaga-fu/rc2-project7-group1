
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal, IconButton } from "@mui/material";
import { FormAddItem } from "../FormAddItem/FormAddItem";
import CloseIcon from "@mui/icons-material/Close";
import {useState, useEffect} from "react";

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

export default function BasicModal({ setNeedsReload }) {
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setShowMessage(false);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Añadir recurso</Button>
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
              top: 10,
              right: 10,
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
