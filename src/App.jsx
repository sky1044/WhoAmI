import { SidebarProvider } from "./contexts/SidebarContext";
import AppRoutes from "./router/routes";

function App() {
  return (
    <SidebarProvider>
      <AppRoutes />
    </SidebarProvider>
  );
}

export default App;
