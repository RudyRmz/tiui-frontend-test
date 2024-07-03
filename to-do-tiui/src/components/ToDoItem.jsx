import { useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/clear";
import AppDialog from "./AppDialog";

function ToDoItem({ task, onEditTask, isEditing, onDeleteTask }) {
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleSaveTask = () => {
    onEditTask(task.id, taskDescription);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-3 mx-5">
      <section className=" flex items-center gap-1">
        <Checkbox color="success" />
        <p>{task.description}</p>
      </section>

      <section className="flex items-center gap-1">
        {isEditing ? ( // Renderizado condicional
          <>
            <TextField
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <Button onClick={handleSaveTask}>Guardar</Button>
          </>
        ) : (
          <>
            <AppDialog
              type="edit"
              task={task} // Pasa la tarea al diálogo
              onEditTask={onEditTask}
            />
            <IconButton aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        )}
      </section>

      {/* <section className=" flex items-center gap-1">
        <AppDialog type="edit" />
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </section> */}
    </div>
  );
}

export default ToDoItem;
