import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/search";
import Input from "./components/text_input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/dark.css";
import "./assets/css/bootstrap.min.css";

import Text_detail from "./components/text_detail";

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Search />
          <div className="welcome-area" id="welcome">
            <div className="right-bg">
              <img
                src="assets/images/photos/header.jpg"
                className="img-fluid float-right"
                alt=""
              />
            </div>

            <div className="header-bg">
              <img
                src="assets/images/header-bg.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <Input />
          </div>
          {/* <CopyExample/> */}

          <Routes>
            <>
              <Route path="/:id" element={<Text_detail />} />
            </>
          </Routes>
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;
