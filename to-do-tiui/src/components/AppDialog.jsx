import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Edit from "@mui/icons-material/edit";
import { useState } from "react"; // Importa useState

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AppDialog({ children, icon, color, type, onAddTask }) {
  const [open, setOpen] = React.useState(false);
  const [taskDescription, setTaskDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = () => {
    if (taskDescription.trim() !== "") {
      // Verifica si no está vacío
      onAddTask(taskDescription); // Llama a la función de agregar tarea
      setTaskDescription(""); // Limpia el campo
      handleClose();
    }
  };

  return (
    <React.Fragment>
      {type === "new" ? (
        <Button
          variant="contained"
          className=" h-12 flex gap-2"
          color={color}
          onClick={handleClickOpen}
        >
          {icon}
          <p className=" hidden sm:flex">Añadir tarea</p>
        </Button>
      ) : (
        <IconButton aria-label="edit" onClick={handleClickOpen}>
          <Edit />
        </IconButton>
      )}
      <Dialog
        fullWidth={true}
        maxWidth={" max-w-[700px]"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {type === "new" ? (
          <DialogTitle>{"Nueva tarea"}</DialogTitle>
        ) : (
          <DialogTitle>{"Editar tarea"}</DialogTitle>
        )}
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Descripción"
            variant="filled"
            className=" mt-10 w-full"
            value={taskDescription} // Vincula el valor al estado
            onChange={(e) => setTaskDescription(e.target.value)} // Actualiza el estado
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddTask}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AppDialog;
