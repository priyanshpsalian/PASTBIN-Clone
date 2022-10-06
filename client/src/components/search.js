import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField,Button } from "@mui/material";
import { IconButton } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./textarea.css"
export default function Search() {
  const navigate = useNavigate();
  //   navigate("/myBlogs/dd");
  const [text, setText] = useState({
    // description: "",
    unique_id: "",
  });
  const handleChange = (e) => {
    console.log("change");
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const SearchBtn = async (event) => {
    console.log(text, "search");
    // if (event.key === "Enter") {
    //   event.preventDefault();
    //   console.log("down");
    //   if (text.unique_id) {
    //     navigate(`/${text.unique_id}`);
    //   }

    //   // 👇️ access input value from state
    //   // console.log(message);

    //   // 👇️ access input value from event object
    //   // console.log(event.target.value)

    //   console.log("User pressed Enter ✅");
    // }
    if (text.unique_id) {
      navigate(`/${text.unique_id}`);
    }
  };
  

  return (
    <>
      {/* <form>
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
      </form> */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="assets/images/logo-blue.svg" alt="Zaha" />
                </Link>

                <ul className="nav" style={{float:"left"}}>
                  <form>
                    <TextField
                      className="textfield"
                      name="unique_id"
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <SearchIcon onClick={SearchBtn} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      // onKeyDown={SearchBtn}
                    />
                    {/* <a onClick={SearchBtn} type="button"></a> */}
                    {/* <Button onClick={SearchBtn} variant="text">
                      Search
                    </Button> */}
                  </form>

                  <li>
                    <Link style={{float:"right"}} to="/">Home</Link>
                  </li>
                  {/* <li className="submenu">
                    <a href="javascript:;">Discover</a>
                    <ul>
                      <li>
                        <a href="blue-index.html#features">Features</a>
                      </li>
                      <li>
                        <a href="blue-index.html#testimonials">Testimonials</a>
                      </li>
                      <li>
                        <a href="blue-index.html#pricing-plans">
                          Pricing Plans
                        </a>
                      </li>
                      <li>
                        <a href="blue-index.html#blog">Latests Blogs</a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="submenu">
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li>
                        <a href="blue-about.html">About Us</a>
                      </li>
                      <li>
                        <a href="blue-features.html">Features</a>
                      </li>
                      <li>
                        <a href="blue-faq.html">FAQ's</a>
                      </li>
                      <li>
                        <a href="blue-blog.html">Blog</a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li>
                    <a href="blue-contact.html">Contact</a>
                  </li> */}
                  {/* <li>
                    <a className="btn-nav" href="blue-contact.html">
                      Free Try
                    </a>
                  </li> */}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* <section className="section home-feature" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <a
                    href="blue-features-single.html"
                    className="features-small-item start"
                  >
                    <div className="icon">
                      <i className="fa fa-comments-o"></i>
                    </div>
                    <h5 className="features-title">Business Strategy</h5>
                    <p>
                      Morbilling pharetra sapiening ut mattis viverra. Curabitur
                      magna.
                    </p>
                  </a>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <a
                    href="blue-features-single.html"
                    className="features-small-item"
                  >
                    <div className="icon">
                      <i className="fa fa-thumbs-o-up"></i>
                    </div>
                    <h5 className="features-title">Social Media</h5>
                    <p>
                      Donec pellentesque turpis utium lorem imperdiet semper.
                    </p>
                  </a>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <a
                    href="blue-features-single.html"
                    className="features-small-item end"
                  >
                    <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                    <h5 className="features-title">Experience Design</h5>
                    <p>
                      Facilisis arcu ligula, malesuada id tincidunt laoreet,
                      facilisis.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section padding-top-70 padding-bottom-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/photos/home/blue-1.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div className="left-heading">
                <h2 className="section-title">Best Analytics Audits</h2>
              </div>
              <div className="left-text">
                <p>
                  Phasellus vitae velit sit amet diam semper commodo quis quis
                  libero. Morbi consequat arcu augue, molestie faucibus metus
                  ullamcorper vel.
                </p>
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

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <img
                src="assets/images/logo-blue-footer.svg"
                className="logo"
                alt=""
              />
              <div className="text">
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper.
              </div>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Helpful Links</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>FAQ’s</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Support</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Support Center</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <h5>Contact Us</h5>
              <div className="address">
                <p>
                  455 West Orchard Street
                  <br />
                  Kings Mountain, NC 28086
                </p>
                <p>Phone: (272) 211-7370</p>
                <p>
                  <span>E-Mail:</span>
                  <a href="#">support@yourbrand.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">© 2019 Zaha. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
