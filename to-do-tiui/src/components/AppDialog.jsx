import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AppDialog({ children, icon, color }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        className=" h-12 flex gap-2"
        color={color}
        onClick={handleClickOpen}
      >
        {icon}
        {children}
      </Button>
      <Dialog
        fullWidth={" w-full"}
        maxWidth={" max-w-[700px]"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Nueva tarea"}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Descripción"
            variant="filled"
            className=" mt-10 w-full"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AppDialog;
