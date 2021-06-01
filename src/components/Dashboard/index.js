import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

const getUrl = process.env.REACT_APP_URL;

const Dashboard = () => {
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
      <div className="container">
        <div className="table-orders">
          <input
            type="text"
            className="input-text"
            placeholder="Search"
            name="Search"
            style={{ width: "220px" }}
          />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Participant</th>
                <th scope="col">Note</th>
              </tr>
            </thead>
            <tbody>
              {meeting.map(
                ({ id, title, location, participant, date, note }) => {
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>
                        <div
                          style={{
                            width: 90,
                            textAlign: "center",
                            borderRadius: 5,
                          }}
                        >
                          {title}
                        </div>
                      </td>
                      <td>{location}</td>
                      <td>{new Date(date).toLocaleString("id-ID", {
                        day: "numeric",
                        year: "numeric",
                        month: "long",
                      })}</td>
                      <td>{participant}</td>
                      <td>{note}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
