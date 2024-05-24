import "./tickets.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Tickets = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#">JOURNIO</a>
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              
            <Link to="/Hotel">Hotel</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <button onClick={handleLoginClick}>Login</button>
            </li>
          </ul>
        </div>
      </nav>
      <section className="banner" id="top">
        <div className="mobile">
          <div className="m-outer">
            <div className="notch"></div>
            <div className="mob-img">
              <img src="images/main.png" className="m-img" alt="outdoor" />
            </div>
            <div className="mob-text">
              <h1>Tickets</h1>
              <h1>Booking</h1>
              <h5>with</h5>
              <h1>JOURNIO</h1>
            </div>
          </div>
          <div className="text-part">
            <h2 className="h-txt">Ticket Booking</h2>
            <ul className="ticket-booking-list">
              <li>Easy and convenient booking process</li>
              <li>Wide range of travel options</li>
              <li>Transparent pricing and comparison</li>
              <li>Hassle-free booking experience</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-side">
                <div className="logo">
                  <img src="images/image.png" alt="Flight Template" />
                </div>
                <div className="tabs-content">
                  <h4>Choose Your Direction:</h4>
                  <ul className="social-links">
                    <li>
                      <a href="http://facebook.com">
                        Find us on <em>Facebook</em>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://youtube.com">
                        Our <em>YouTube</em> Channel
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://instagram.com">
                        Follow our <em>instagram</em>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="page-direction-button">
                  <a href="contact.html">
                    <i className="fa fa-phone"></i>Contact Us Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
              <section id="first-tab-group" className="tabgroup">
                <div id="tab1">
                  <div className="submit-form">
                    <h4>
                      Check availability for <em>direction</em>:
                    </h4>
                    <form id="form-submit" action="" method="get">
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="from">From:</label>
                            <select required name="from">
                              <option value="">Select a location...</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="India">India</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea</option>
                              <option value="Laos">Laos</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Vietnam">Vietnam</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="to">To:</label>
                            <select required name="to">
                              <option value="">Select a location...</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="India">India</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea</option>
                              <option value="Laos">Laos</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Vietnam">Vietnam</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="departure">Departure date:</label>
                            <input
                              name="departure"
                              type="text"
                              className="form-control date"
                              id="departure"
                              placeholder="Select date..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="return">Return date:</label>
                            <input
                              name="return"
                              type="text"
                              className="form-control date"
                              id="return"
                              placeholder="Select date..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <div className="radio-select">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <label htmlFor="round">Round</label>
                                <input
                                  type="radio"
                                  name="trip"
                                  id="round"
                                  value="round"
                                  required="required"
                                />
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <label htmlFor="oneway">Oneway</label>
                                <input
                                  type="radio"
                                  name="trip"
                                  id="oneway"
                                  value="one-way"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="btn"
                            >
                              Order Ticket Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="most-visited">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Most Visited Places</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div id="owl-mostvisited" className="owl-carousel owl-theme">
                <div className="item col-md-12">
                  <div className="visited-item">
                    <img src="img/place-01.jpg" alt="" />
                    <div className="text-content">
                      <h4>River Views</h4>
                      <span>New York</span>
                    </div>
                  </div>
                </div>
                {/* Other carousel items */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="primary-button">
                <a href="#" className="scroll-top">
                  Back To Top
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/tooplate">
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
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
         
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tickets;
