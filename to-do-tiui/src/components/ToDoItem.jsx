import { Checkbox } from "@mui/material";
import AppButton from "./AppButton";
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
        <AppButton icon={<Edit />} color={"secondary"}>
          Editar
        </AppButton>
        <AppButton icon={<Delete />} color={"error"}>
          Eliminar
        </AppButton>
      </section>
    </div>
  );
}

export default ToDoItem;
