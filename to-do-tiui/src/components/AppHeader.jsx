import Button from "./AppButton";
import AppSelect from "./AppSelect";
import Add from "@mui/icons-material/add";

function AppHeader() {
  return (
    <header className=" flex justify-between mx-5">
      <Button icon={<Add />} color={"primary"}>
        <p className=" hidden sm:flex">Añadir tarea</p>
      </Button>
      <AppSelect />
    </header>
  );
}

export default AppHeader;
