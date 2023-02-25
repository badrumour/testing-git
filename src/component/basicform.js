import axios from "axios";
import React from "react";
import { useState } from "react";

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);

    setEmail("");
    setPassword("");

    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegistration");
      });
  };

  const handleBtn = () => {
    console.log(allEntry);
  };

  return (
    <div className="component">
      <form className="form" action="" onSubmit={submitForm}>
        <div id="wrapper">
          <div className="basic-form1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="basic-form1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button" type="submit" onClick={handleBtn}>
            Submit
          </button>
        </div>
      </form>

      <div id="seperate">
        {allEntry.map((currentItem, index) => {
          return (
            <div id="seperate-under">
              <p>{currentItem.index}</p>
              <p>{currentItem.email}</p>
              <p>{currentItem.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basicform;
