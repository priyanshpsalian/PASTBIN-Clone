import React, { useState } from 'react'

export default function Text_input() {
    const [text,setText]=useState({
        description:"",
        unique_id:""
    });
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setText({
          ...text,
          [name]: value,
        });
    }
    const loginBtn = async () => {
      console.log("login");
      if (text.description && text.unique_id) {
        // console.log("jj");
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
      <div>text_input</div>
      <form>
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
      </form>
    </>
  );
}
