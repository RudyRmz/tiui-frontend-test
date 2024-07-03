import { Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/clear";
import AppDialog from "./AppDialog";

function ToDoItem({ task }) {
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-3 mx-5">
      <section className=" flex items-center gap-1">
        <Checkbox color="success" />
        <p>{task.description}</p>
      </section>

      <section className=" flex items-center gap-1">
        <AppDialog type="edit" />
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </section>
    </div>
  );
}

export default ToDoItem;
