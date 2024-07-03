import Button from "@mui/material/Button";

export default function AppButton({ children, icon, color }) {
  return (
    <Button
      variant="contained"
      // startIcon={icon}
      className=" h-12"
      color={color}
    >
      {icon}
      {children}
    </Button>
  );
}
