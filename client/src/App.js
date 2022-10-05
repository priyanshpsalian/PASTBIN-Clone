import "./App.css";
import React, { useEffect } from "react";
import Search from "./components/search";
import Input from "./components/text_input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Text_detail from "./components/text_detail";
function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Search />
          <Input />
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
