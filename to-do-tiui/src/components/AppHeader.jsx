import Button from "./AppButton";
import AppSelect from "./AppSelect";
import Add from "@mui/icons-material/add";

function AppHeader() {
  return (
    <header className=" flex justify-between mx-5">
      <Button icon={<Add />} color={"primary"}>
        Añadir tarea
      </Button>
      <AppSelect />
    </header>
  );
}

export default AppHeader;
