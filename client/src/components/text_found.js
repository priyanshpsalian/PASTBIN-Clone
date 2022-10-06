import React, { useRef, useState } from "react";
import "./textarea.css"
export default function Text_found(props) {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <>
      {/* <label>Description</label>
      <div>{props.name.description}</div>
      <label>Unique Id</label>
      <div>{props.name.unique_id}</div> */}

      <section className="section padding-top-70 padding-bottom-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              {/* <img
                src="assets/images/photos/home/blue-1.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              /> */}
              <div className="left-text">
                {/* <p ref={textAreaRef} value={props.name.description}>
                  {props.name.description}
                </p> */}
                <textarea ref={textAreaRef} value={props.name.description} />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div className="left-heading">
                <h2 className="section-title">
                  Unique Id: {props.name.unique_id}
                </h2>
                
              </div>
              <div className="left-text">
                {
                  /* Logical shortcut for only displaying the 
          button if the copy command exists */
                  document.queryCommandSupported("copy") && (
                    <div>
                      <button onClick={copyToClipboard}>Copy Now </button>
                      {copySuccess}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
