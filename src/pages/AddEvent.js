import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AddEvent from "../components/AddEvent";

export default class Event extends Component {
  render() {
    return (
      <>
        <Navbar />
        <AddEvent />
      </>
    );
  }
}
