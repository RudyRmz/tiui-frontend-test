import AppDialog from "./AppDialog";
import AppSelect from "./AppSelect";
import Add from "@mui/icons-material/add";

function AppHeader() {
  return (
    <header className=" flex justify-between mx-5">
      <AppDialog icon={<Add />} color={"primary"}>
        <p className=" hidden sm:flex">Añadir tarea</p>
      </AppDialog>
      <AppSelect />
    </header>
  );
}

export default AppHeader;
