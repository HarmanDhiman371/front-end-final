// Home.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const PlaceCard = ({ image, rating, title, cost, time, location }) => {
  return (
    <div className="card">
      <div className="zoom-img">
        <div className="img-card">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="text">
        <span className="rating">{rating}</span>
        <h2>{title}</h2>
        <p className="cost">{cost}</p>
        <div className="card-box">
          <p className="time">{time}</p>
          <p className="location">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="section1">
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
        <div className="first">
          <video autoPlay muted loop id="background-video">
            <source src="/images/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 id="head1" className="common">LET US TAKE YOU AWAY</h1>
          <p id="text1" className="common">welcomes you</p>
          <div style={{ height: "39px" }}>
            <p className="point"></p>
          </div>
          <div id="start">
          <Link to="/destination">Get started</Link>
          </div>
        </div>
        <div className="h-second">
          <div className="soco" id="soco-i">
            <a href="https://www.instagram.com" target="_blank">
              <img src="images/instagram.svg" alt="Instagram" />
            </a>
          </div>
          <div className="soco" id="soco-f">
            <a href="https://www.facebook.com" target="_blank">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>
          </div>
          <div className="soco" id="soco-t">
            <a href="https://www.twitter.com" target="_blank">
              <img src="images/twitter.svg" alt="Twitter" />
            </a>
          </div>
          <div className="soco" id="soco-d">
            <a href="https://www.discord.com" target="_blank">
              <img src="images/discord.svg" alt="Discord" />
            </a>
          </div>
        </div>
      </div>
      
      <section className="places">
        <div className="places-text">
          <small>FEATURED TOURS PACKAGES</small>
          <h2>Favourite Places</h2>
        </div>
        <div className="cards">
          <PlaceCard
            image="https://wallpapercave.com/wp/wp6977881.jpg"
            rating="⭐⭐⭐⭐⭐"
            title="The DUBAI Adventure"
            cost="$1870 / Per Person"
            time="🕓 3 Days"
            location="✈ Paris, France"
          />
          
          <PlaceCard
            image="https://th.bing.com/th?id=OIP.MvERE4Uzq9fuXFEgaouO0QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            rating="⭐⭐⭐⭐⭐"
            title="PARIS"
            cost="$2970 / Per Person"
            time="🕓 9 Days"
            location="✈ Paris, France"
          />
          <PlaceCard
            image="https://th.bing.com/th/id/OIP.GBJp1l8ZhXq8nXg-8zmOrAHaEK?w=260&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating="⭐⭐⭐⭐⭐"
            title="Switzerland"
            cost="$3170 / Per Person"
            time="🕓 12 Days"
            location="✈ Switzerland, Monaco"
          />
          <PlaceCard
            image="https://th.bing.com/th/id/OIP.fFn2uw7C8Up3l5eH-M1dHQHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating="⭐⭐⭐⭐⭐"
            title="GREECE"
            cost="$1570 / Per Person"
            time="🕓 6 Days"
            location="✈ Greece, Switzerland"
          />
          <PlaceCard
            image="https://th.bing.com/th/id/OIP.aaKfd-6PvGZamPvVLTiUiAHaEo?w=292&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating="⭐⭐⭐⭐⭐"
            title="LONDON"
            cost="$1570 / Per Person"
            time="🕓 6 Days"
            location="✈ Greece, Switzerland"
          />
          <PlaceCard
            image="https://w0.peakpx.com/wallpaper/386/117/HD-wallpaper-tropical-resort-sky-umbrella-ocean-beach-pool.jpg"
            rating="⭐⭐⭐⭐⭐"
            title="Maldives"
            cost="$1870 / Per Person"
            time="🕓 9 Days"
            location="✈ Maldives, India"
          />
        </div>
      </section>

      <section className="about">
        <div className="about-img">
          <img src="images/main.png" alt="outdoor" />
        </div>
        <div className="about-text">
          <small>ABOUT OUR COMPANY</small>
          <h2>We are Go Trip Travels Support Company</h2>
          <label>
            <input type="checkbox" defaultChecked />
            Find your destination easily
          </label>
          <label>
            <input type="checkbox" defaultChecked />
            Book tickets conveniently
          </label>
          <label>
            <input type="checkbox" defaultChecked />
            Effortlessly reserve hotels
          </label>
          <label>
            <input type="checkbox" defaultChecked />
            Get expert travel advice
          </label>
          <a href="#">ABOUT US</a>
        </div>
      </section>

      <div className="sect3">
        <div className="sect3-txt">
          <h2>Traveling Adventures</h2>
          <p>
            Traveling opens up a world of possibilities, offering experiences that enrich our lives in countless ways. From the thrill of discovering new destinations to the connections forged with people along the way, travel broadens our horizons and leaves lasting memories.
          </p>
        </div>
        <div className="my">
          <video src="images/travel-animated.mp4" autoPlay loop muted></video>
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </div>
        <div className="links">
          <h3>New Products</h3>
          <ul>
            <li>Hotel</li>
            <li> Destinations</li>
            <li>Tickets</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="links">
          <h3>Support</h3>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Report a Payment Issue</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
