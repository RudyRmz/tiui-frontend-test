import Button from "@mui/material/Button";
import Add from "@mui/icons-material/add";

export default function AppButton({ children }) {
  return (
    <Button variant="contained" startIcon={<Add />} className=" h-12">
      {children}
    </Button>
  );
}
