import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import LoadingPage from "./pages/loading";
import BienesRaices from "./pages/bienes-raices";
import { useEffect, useState } from "react";

// We need to create a ComponentType compatible with wouter's Route component
const HomePage = () => <Home />;
const BienesRaicesPage = () => <BienesRaices />;
const EmpresarialPage = () => <Home pageName="Empresarial" />;
const InversionesPage = () => <Home pageName="Inversiones" />;
const ContactanosPage = () => <Home pageName="Contáctanos" />;
const AsociadosPage = () => <Home pageName="Asociados & Proveedores" />;

function Router() {
  const [visited, setVisited] = useState(() => {
    return sessionStorage.getItem('visited') === 'true';
  });

  useEffect(() => {
    // Establecer que el usuario ya vio la animación
    sessionStorage.setItem('visited', 'true');
  }, []);

  return (
    <Switch>
      <Route path="/">
        {() => {
          // Cambiado para mostrar el Home en vez de la página de carga
          return <HomePage />;
          // Para volver a habilitar la página de carga cuando se accede por primera vez
          // if (!visited) {
          //   return <LoadingPage />;
          // } else {
          //   return <HomePage />;
          // }
        }}
      </Route>
      <Route path="/loading" component={LoadingPage} />
      <Route path="/home" component={HomePage} />
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
