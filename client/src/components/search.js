import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
//   navigate("/myBlogs/dd");
  const [text, setText] = useState({
    // description: "",
    unique_id: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const SearchBtn = async () => {
    // console.log(text, "search");
    if ( text.unique_id) {
      navigate(`/${text.unique_id}`)
    }
  };
  return (
    <>
      <div>Search</div>
      {/* <h1>jj</h1> */}
      <form>
        {/* <div className="user-box">
          <input
            type="text"
            name="description"
            // value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label>Description</label>
        </div> */}
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

        <a onClick={SearchBtn} type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Search
        </a>
      </form>
    </>
  );
}
