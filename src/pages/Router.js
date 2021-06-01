import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Event from "./AddEvent";
import Dashboard from "./Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/addEvent" component={Event} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}
