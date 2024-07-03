import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function AppSelect() {
  return (
    <>
      <Select displayEmpty defaultValue={"todas"}>
        <MenuItem value="todas">Todas</MenuItem>
        <MenuItem value="completadas">Completadas</MenuItem>
        <MenuItem value="pendientes">Pendientes</MenuItem>
      </Select>
    </>
  );
}

export default AppSelect;
