import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [PersonName, setPersonName] = useState("");
  const [PersonCell, setPersonCell] = useState("");
  const [PersonImage, setPersonImage] = useState("");
  const [PersonEmail, setPersonEmail] = useState("");

  const PersonData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setPersonCell(res.data.results[0].cell);
      setPersonEmail(res.data.results[0].email);
      setPersonImage(res.data.results[0].picture.large);
      setPersonName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PersonData();
  }, []);

  return (
    <div className="person" style={{ alignContent:"center" }}>
      <div className="card">
        <img src={PersonImage} style={{ width: "30%" }} />
        <h1>{PersonName}</h1>
        <p className="title">{PersonEmail}</p>
        <p>{PersonCell}</p>
        <button onClick={() => PersonData()}>New Person</button>
      </div>
    </div>
  );
};

export default App;
