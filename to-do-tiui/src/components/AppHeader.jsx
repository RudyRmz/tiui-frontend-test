import Button from "./AppButton";
import AppSelect from "./AppSelect";

function AppHeader() {
  return (
    <header>
      <Button>Añadir tarea</Button>
      <AppSelect />
    </header>
  );
}

export default AppHeader;
