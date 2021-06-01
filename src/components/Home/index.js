import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Picture } from "../../assets";
import "./style.css";

// const getUrl = "http://192.168.1.13:2005";
const getUrl = process.env.REACT_APP_URL;

const Home = () => {
  const [meeting, setMeeting] = useState([]);
  const getMeeting = () => {
    axios
      .get(`${getUrl}/meeting`)
      .then((res) => {
        const data = res.data.data;
        console.log("res", data);
        setMeeting(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getMeeting();
  }, []);

  return (
    <>
      <article>
        <div className="container">
          <div className="row d-flex flex-row justify-content-start">
            {meeting.map(
              ({ id, title, location, participant, date, note, picture }) => {
                return (
                  <Card
                    className="card-style"
                    style={{
                      width: "18rem",
                      marginRight: "12px",
                      padding: "0px",
                    }}
                    key={id}
                  >
                    <img
                      src={getUrl + JSON.parse(picture).shift()}
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{ height: "15rem" }}
                    />
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          marginLeft: "10px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          color={"red"}
                          style={{ alignSelf: "center" }}
                        />
                        <h5 className="card-title">{location}</h5>
                      </div>
                      <p className="card-text">{title}</p>
                      <p className="card-text2">
                        {new Date(date).toLocaleString("id-ID", {
                          day: "numeric",
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                      <hr></hr>
                      <p className="card-text3">{participant}</p>
                      <hr></hr>
                      <p className="card-text4">Note :</p>
                      <p className="card-text5">{note}</p>
                    </div>
                  </Card>
                );
              }
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
