import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Domains from "@/pages/Domains";
import DomainSimilarity from "@/pages/DomainSimilarity";
import Uptime from "@/pages/Uptime";
import Blacklist from "@/pages/Blacklist";
import Tools from "@/pages/Tools";
import Alerts from "@/pages/Alerts";
import Team from "@/pages/Team";
import Settings from "@/pages/Settings";
import Billing from "@/pages/Billing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import { ThemeProvider } from "next-themes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/domains" component={Domains} />
      <Route path="/similarity" component={DomainSimilarity} />
      <Route path="/uptime" component={Uptime} />
      <Route path="/blacklist" component={Blacklist} />
      <Route path="/tools" component={Tools} />
      <Route path="/alerts" component={Alerts} />
      <Route path="/team" component={Team} />
      <Route path="/settings" component={Settings} />
      <Route path="/billing" component={Billing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
