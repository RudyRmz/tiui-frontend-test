import { Checkbox, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/clear";
import Edit from "@mui/icons-material/edit";
import AppDialog from "./AppDialog";

function ToDoItem() {
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-3 mx-5">
      <section className=" flex items-center gap-1">
        <Checkbox color="success" />
        <p>Tarea 1</p>
      </section>

      <section className=" flex items-center gap-1">
        <AppDialog type="edit" />
        {/* <IconButton aria-label="edit">
          <Edit />
        </IconButton> */}
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </section>
    </div>
  );
}

export default ToDoItem;
