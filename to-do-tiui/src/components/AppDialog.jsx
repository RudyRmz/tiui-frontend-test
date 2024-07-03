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
import { useState, useEffect } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AppDialog({
  icon,
  color,
  type,
  task,
  onAddTask,
  onEditTask,
  setSnackbarOpen,
}) {
  const [open, setOpen] = React.useState(false);
  const [taskDescription, setTaskDescription] = useState(
    task?.description || ""
  );

  useEffect(() => {
    setTaskDescription(task?.description || "");
  }, [task]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveTask = () => {
    if (taskDescription.trim().length < 5) {
      setSnackbarOpen(true);
      return;
    }
    if (type === "new") {
      onAddTask(taskDescription);
    } else if (type === "edit" && task) {
      onEditTask(task.id, taskDescription);
    }

    setTaskDescription("");
    handleClose();
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
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSaveTask}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AppDialog;
