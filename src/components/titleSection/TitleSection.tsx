import { useState, ReactElement } from "react";
import Typography from "@mui/material/Typography";
import mysteryMan from "../../media/whoIsThisGuy.jpg";
import { Modal, Box, Link, Avatar } from "@mui/material";

interface Props {}

//TODO: fix why throwing ts error
const modalStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function TitleSection({}: Props): ReactElement {
  //TODO turn modal into a component
  const [open, setOpen] = useState(false);
  const [presses, setPresses] = useState(0)
  const handleOpen = () => {
    if(presses >= 2) {
      setOpen(true)
      setPresses(0)
    } else {
      setPresses(presses + 1)
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Link variant="h2" onClick={handleOpen}>
        Santi | Split{" "}
      </Link>
      <Typography variant="subtitle1">
        Let me, Santi, handle splitting your bill!{" "}
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...modalStyle}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for using my app!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is currently alpha v1.0.0
          </Typography>
          <img
            src={mysteryMan}
            style={{
              marginTop: "10px",
              width: "90%",
              height: "auto",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
