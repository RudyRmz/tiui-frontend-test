import AppDialog from "./AppDialog";
import AppSelect from "./AppSelect";
import Add from "@mui/icons-material/add";

function AppHeader({ onAddTask, onFilterChange }) {
  // Recibe onAddTask como prop
  return (
    <header className="flex justify-between mx-5">
      <AppDialog
        icon={<Add />}
        color={"primary"}
        type={"new"}
        onAddTask={onAddTask}
      />

      <AppSelect onFilterChange={onFilterChange} />
    </header>
  );
}

export default AppHeader;
