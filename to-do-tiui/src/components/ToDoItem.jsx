import { Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/clear";
import Edit from "@mui/icons-material/edit";

function ToDoItem() {
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-3 mx-5">
      <section className=" flex items-center gap-1">
        <Checkbox color="success" />
        <p>Tarea 1</p>
      </section>

      <section className=" flex items-center gap-1">
        <IconButton aria-label="delete">
          <Edit />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </section>
    </div>
  );
}

export default ToDoItem;
