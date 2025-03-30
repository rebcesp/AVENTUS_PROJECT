import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// We need to create a ComponentType compatible with wouter's Route component
const HomePage = () => <Home />;
const BienesRaicesPage = () => <Home pageName="Bienes Raices" />;
const EmpresarialPage = () => <Home pageName="Empresarial" />;
const InversionesPage = () => <Home pageName="Inversiones" />;
const ContactanosPage = () => <Home pageName="Contáctanos" />;
const AsociadosPage = () => <Home pageName="Asociados & Proveedores" />;

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/bienes-raices" component={BienesRaicesPage} />
      <Route path="/empresarial" component={EmpresarialPage} />
      <Route path="/inversiones" component={InversionesPage} />
      <Route path="/contactanos" component={ContactanosPage} />
      <Route path="/asociados" component={AsociadosPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
