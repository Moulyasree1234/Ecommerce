import React from "react";
import { Box, Modal } from "@mui/material";

import RegisterForm from "./Registerform";
import { useLocation } from "react-router-dom";
import LoginForm from "./Loginform";
import Registerform from "./Registerform";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location=useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname==="/login"?<LoginForm/> :  <Registerform/>}
        
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
