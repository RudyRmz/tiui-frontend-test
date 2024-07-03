import { useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/clear";
import AppDialog from "./AppDialog";

function ToDoItem({ task, onEditTask, isEditing, onDeleteTask, onToggleTask }) {
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleSaveTask = () => {
    onEditTask(task.id, taskDescription);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleToggle = () => {
    onToggleTask(task.id);
  };

  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-3 mx-5">
      <section className=" flex items-center gap-1">
        <Checkbox
          color="success"
          checked={task.completed}
          onChange={handleToggle}
        />
        <p>{task.description}</p>
      </section>

      <section className="flex items-center gap-1">
        {isEditing ? (
          <>
            <TextField
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <Button onClick={handleSaveTask}>Guardar</Button>
          </>
        ) : (
          <>
            <AppDialog type="edit" task={task} onEditTask={onEditTask} />
            <IconButton aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        )}
      </section>
    </div>
  );
}

export default ToDoItem;
