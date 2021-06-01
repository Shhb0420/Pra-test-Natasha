import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

export default class Event extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Dashboard />
      </>
    );
  }
}
