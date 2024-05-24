import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Destination.css";
import searchButtonCallback from "./callback.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    console.log(slides);
    let currentSlide = 0;

    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        if (i === index) {
          slides[i].classList.remove("hidden");
          slides[i].style.transform = "translateX(0)";
        } else {
          slides[i].classList.add("hidden");
          slides[i].style.transform = "translateX(100%)";
        }
      }
    }
    function nextSlide() {
      showSlide(currentSlide);
      currentSlide = (currentSlide + 1) % slides.length;
    }
    setInterval(nextSlide, 4000);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
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
      {/* <div className="fbox1">
          <p>Search your Destination</p>
        </div> */}
      <div id="section2">
        <div className="fbox1">
          <p>Search your</p>
          <p>Destination</p>
        </div>

        <div className="fbox2">
          <div className="fbox_2">
            <input
              type="text"
              id="destinationSearch"
              placeholder="Search destinations..."
            />
            <button id="searchButton" onClick={searchButtonCallback}>
              Search
            </button>
          </div>
          <div className="fbox_info">
            <div id="destinationInfo" className="fbox1_r">
              Destination information will be displayed here
            </div>
          </div>
        </div>

        <div className="fbox3">
          <div className="slide area">
            <h2 className="fbox3_h">Popular Places</h2>
            <div className="places">
              <div>
                <p className="d-p" >Paris, France</p>
                <p className="d-p" >Rome, Italy</p>
                <p className="d-p" >New York City, USA</p>
                <p className="d-p" >Tokyo, Japan</p>
                <p className="d-p"  >Sydney, Australia</p>
                <p className="d-p"  >Machu Picchu, Peru</p>
                <p className="d-p"  >Las Angeles, U.S.A.</p>
              </div>
              <div className="start">See More</div>
            </div>
          </div>

          <div className="slide area">
            <h2 className="fbox3_h">Value Places</h2>
            <div className="places">
              <div>
                <p className="d-p" >Bangkok, Thailand</p>
                <p className="d-p" >Dublin, Ireland</p>
                <p className="d-p" >Berlin, Germany</p>
                <p className="d-p" >Edinburgh, Scotland</p>
                <p className="d-p"  >Santiago, Chile</p>
                <p className="d-p" >Prague, Czech Republic</p>
                <p className="d-p" >Dubrovnik, Croatia</p>
              </div>
              <div className="start">See More</div>
            </div>
          </div>
        </div>
      </div>

      <section className="banner">
        <div className="banner-text-item">
          <div className="banner-heading">
            <h1>Find your Next tour!</h1>
          </div>
          <form className="form">
            <input 
              type="text"
              list="mylist"
              placeholder ="Where would you like to go?"
            />
            <datalist id="mylist">
              <option value="London" />
              <option value="Canada" />
              <option value="Monaco" />
              <option value="France" />
              <option value="Japan" />
              <option value="Switzerland" />
              <option value="Seoul" />
            </datalist>
            <input type="date" className="date" />
            <button className="book" type="button">
              Book
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Destination;