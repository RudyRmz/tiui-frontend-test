import Button from "./AppButton";
import AppSelect from "./AppSelect";

function AppHeader() {
  return (
    <header className=" flex justify-between mx-5">
      <Button>Añadir tarea</Button>
      <AppSelect />
    </header>
  );
}

export default AppHeader;
