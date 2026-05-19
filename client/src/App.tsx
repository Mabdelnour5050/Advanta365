import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import WOW from "./pages/WOW";
import Governance from "./pages/Governance";
import Adoption from "./pages/Adoption";
import Microsoft365 from "./pages/Microsoft365";
import Why from "./pages/Why";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/framework"} component={Framework} />
      <Route path={"/wow"} component={WOW} />
      <Route path={"/governance"} component={Governance} />
      <Route path={"/adoption"} component={Adoption} />
      <Route path={"/microsoft-365"} component={Microsoft365} />
      <Route path={"/why"} component={Why} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
