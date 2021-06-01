import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import AddEvent from "../components/AddEvent";
import HalUtama from "../components/Home";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <AddEvent /> */}
        <HalUtama />
      </>
    );
  }
}
