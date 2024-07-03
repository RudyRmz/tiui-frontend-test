import { Checkbox } from "@mui/material";
import AppButton from "./AppButton";
import Delete from "@mui/icons-material/clear";
import Edit from "@mui/icons-material/edit";

function ToDoItem() {
  return (
    <div className=" bg-white w-full flex items-center rounded-md">
      <Checkbox color="success" />
      <p>ToDoItem</p>
      <AppButton icon={<Edit />} color={"secondary"}>
        Editar
      </AppButton>
      <AppButton icon={<Delete />} color={"error"}>
        Eliminar
      </AppButton>
    </div>
  );
}

export default ToDoItem;
