import React, { useState } from "react";


import { TextField, Button,TextareaAutosize } from "@mui/material";
export default function Text_input() {
  const [text, setText] = useState({
    description: "",
    unique_id: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const loginBtn = async () => {
    console.log("login");
    if (text.description && text.unique_id) {
      console.log("jj");
      let result = await fetch("http://localhost:5000/addText", {
        method: "post",
        body: JSON.stringify(text),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
    }
  };

  return (
    <>
      {/* <div>text_input</div> */}
      <div className="header-text">
        <div className="container">
          <div className="row ">
            <div className=" col">
              <form>
                <TextareaAutosize
                  name="description"
                  onChange={handleChange}
                  maxRows={9}
                  aria-label="maximum height"
                  placeholder="Enter here"
                  style={{ width: 500, height: 300 }}
                />
                <TextField
                  id="outlined-basic"
                  // label="Enter Unique Id"
                  name="unique_id"
                  // value={user.password}
                  placeholder="Enter Unique Id"
                  onChange={handleChange}
                  variant="outlined"
                  style={{ backgroundColor: "white" }}
                />
              </form>
            </div>
            <div className="col ">
              <h1>Welcome to PasteIt</h1>

              <p>
                Store plain text like source code snippets for
                code review. Chose custom domain of your paste.
              </p>
              <div className="buttons">
                <Button
                  className="btn-white-line"
                  onClick={loginBtn}
                  variant="text"
                >
                  Paste
                </Button>
                <a href="#" className="btn-primary-line">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form>
        <div className="user-box">
          <input
            type="text"
            name="description"
            // value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label>Description</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="unique_id"
            // value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <label>Unique Id</label>
        </div>

        <a onClick={loginBtn} type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Paste
        </a>
      </form> */}
    </>
  );
}
