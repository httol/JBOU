import Login from "./Auth/Login";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Login />
    </SnackbarProvider>
  );
}
