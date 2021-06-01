import React, { useState, useEffect } from "react";
import { Picture, Meeting } from "../../assets";
import styles from "./Event.module.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const getUrl = process.env.REACT_APP_URL;

const AddEvent = () => {
  const [foto, setFoto] = useState([]);
  const [title, setTitle] = useState();
  const [location, setLocation] = useState();
  const [participant, setParticipant] = useState();
  const [date, setDate] = useState();
  const [note, setNote] = useState();
  const [errMsg, setErrMsg] = useState();
  const [redirect, setRedirect] = useState(false);

  const inputRef = React.useRef();
  const handleFile = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleSubmit = async (e) => {
    if (title === undefined) {
      setErrMsg("Harap isi title");
    } else if (location === undefined) {
      setErrMsg("Harap isi lokasi");
    } else if (participant === undefined) {
      setErrMsg("Harap isi participant");
    } else if (date === undefined) {
      setErrMsg("Harap isi tanggal");
    } else if (note === undefined) {
      setErrMsg("Harap isi Note");
    } else if (foto.length === 0) {
      setErrMsg("Harap masukkan foto");
    } else {
      e.preventDefault();
      const data = new FormData();
      data.append("title", title);
      data.append("location", location);
      data.append("participant", participant);
      data.append("date", date);
      data.append("note", note);
      for (let i = 0; i < foto.length; i++) {
        data.append("image", foto[i]);
      }
      await axios
        .post(`${getUrl}/meeting`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("success", res);
          setRedirect(true);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="align-items-center d-flex justify-content-center">
        <div
          style={{
            flexDirection: "row",
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <div className={styles.subForm}>
            <div style={{ padding: "30px" }}>
              <p style={{ color: "red" }}>{errMsg}</p>
              <text> + Add Event </text>
              <input
                multiple
                type="file"
                onChange={(e) => setFoto(e.target.files)}
                ref={inputRef}
                name="image"
                className={styles.hiddeninput}
              />
              <div
                style={{
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <input
                  type="text"
                  className="input-text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  style={{ width: "160px", marginRight: "70px" }}
                />
                <input
                  type="text"
                  className="input-text"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  style={{ width: "170px" }}
                />
              </div>
              <div style={{ flexDirection: "row", marginTop: "20px" }}>
                <input
                  type="text"
                  className="input-text"
                  placeholder="Participant"
                  name="participant"
                  value={participant}
                  onChange={(e) => {
                    setParticipant(e.target.value);
                  }}
                  style={{ width: "160px", marginRight: "70px" }}
                />
                <input
                  type="date"
                  className="input-text"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  style={{ width: "170px" }}
                />
              </div>
              <textarea
                type="text"
                className="input-text"
                placeholder="Note"
                name="note"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                style={{ width: "100%", height: "100px", marginTop: "20px" }}
              />
              <div className={styles.secondary_img}>
                <button onClick={handleFile} className={styles.handleFile}>
                  <img
                    className={styles.secondaryImg}
                    src={foto[0] ? URL.createObjectURL(foto[0]) : Picture}
                    alt=""
                  />
                </button>
              </div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-primary"
                style={{ marginLeft: "323px", marginTop: "5px" }}
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <img src={Meeting} className={styles.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default AddEvent;
