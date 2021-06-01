import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { Navbar } from "react-bootstrap";
import Styles from "./Navbar.module.css";

const index = () => {
  return (
    <>
      <div>
        <Navbar style={{ backgroundColor: "#f77423" }}>
          <Navbar.Brand
            href="/"
            style={{ paddingLeft: "100px", width: "100%" }}
          >
            <img src={Logo} style={{ width: "100px", height: "80px" }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className={Styles.button}>
            <Link to="/addEvent">
              <button className={Styles.event}>+ Add Event</button>
            </Link>
            <Link to="/dashboard">
              <button className={Styles.event}>Dashboard</button>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default index;
