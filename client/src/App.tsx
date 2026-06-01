import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Cover from "@/pages/Cover";
import Intro from "@/pages/Intro";
import Home from "@/pages/Home";
import ReadStory from "@/pages/ReadStory";
import Backcover from "@/pages/Backcover";

// Strip trailing slash so wouter base matches correctly
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={base}>
          <Switch>
            <Route path="/" component={Cover} />
            <Route path="/intro" component={Intro} />
            <Route path="/biblioteca" component={Home} />
            <Route path="/read/:id" component={ReadStory} />
            <Route path="/contracapa" component={Backcover} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
