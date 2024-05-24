import "./Hotel.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Hotel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  const dateOpenPopup = () => {
    document.getElementById("date-popup").style.display = "block";
  };

  const dateClosePopup = () => {
    document.getElementById("date-popup").style.display = "none";
  };

  const roomOpenPopup = () => {
    document.getElementById("room-popup").style.display = "block";
  };

  const roomClosePopup = () => {
    document.getElementById("room-popup").style.display = "none";
  };

  const ratesOpenPopup = () => {
    document.getElementById("rates-popup").style.display = "block";
  };

  const ratesClosePopup = () => {
    document.getElementById("rates-popup").style.display = "none";
  };

  return (
    <div className="Main">
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
      <div className="hotel-front-container">
        <h2 style={{ color: "white" }}>Book Your Hotels</h2>
        <p style={{ color: "white" }}>
          Book your hotels on your destinations sports with JOURNIO
        </p>
      </div>

      <div className="destinations-images">
        <a href="https://www.bing.com/travel/hotel-search?q=hotels+in+itlay&cin=2024-04-28&cout=2024-04-29&guests=2A&rooms=1&displaytext=Italy&loc=Italy&sort=Popularity&type=hotel&mapBounds=46.581642%2C8.115231%2C37.355194%2C15.203835&cacheId=07c5976f-9706-4493-a27d-bcfdb05e968a__bca63b1f-8605-4812-8287-9f55710c1f1d__2__hotels&form=HTSELI&entrypoint=HTSELI">
          <div className="country" id="italy-div">
            <img
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izeD0hHEwWUc/v0/-1x-1.jpg"
              alt="italy hotel"
            />
            <div className="country-text" id="italy-text">
              ITALY
            </div>
          </div>
        </a>
        <a href="https://www.bing.com/images/search?q=hotels+in+portugal&form=HDRSC3&first=1">
          <div className="country" id="portugal-div">
            <img
              src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/portugal/centro-region/casa-de-sao-lourenco-hotel-portugal-p.jpg"
              alt="portugal hotel"
            />
            <div className="country-text" id="portugal-text">
              PORTUGAL
            </div>
          </div>
        </a>
        <a href="https://www.bing.com/images/search?q=hotels%20in%20japan&qs=n&form=QBIR&sp=-1&ghc=1&lq=0&pq=hotels%20in%20japa&sc=10-14&cvid=16457C8A789E418B86A849797D479E8C&ghsh=0&ghacc=0&first=1">
          <div className="country" id="japan-div">
            <img
              src="https://cdn.businesstraveller.com/wp-content/uploads/2020/07/osalc-entrance-1721-hor-clsc.jpg"
              alt="japan hotel"
            />
            <div className="country-text" id="japan-text">
              JAPAN
            </div>
          </div>
        </a>
        <a href="https://www.bing.com/images/search?view=detailV2&ccid=uLsWctXJ&id=0730F6A6831B304E93EAFA4B613C378DFE9CD4C1&thid=OIP.uLsWctXJQ18rZsaptnn8agHaE8&mediaurl=https%3A%2F%2Fcache.marriott.com%2Fmarriottassets%2Fmarriott%2FCAIMD%2Fcaimd-exterior-9993-hor-clsc.jpg&exph=2667&expw=4000&q=hotels+in+egypt&simid=608052604017660459&form=IRPRST&ck=FAC9FF883DA4D52B4A83346EBDC7C413&selectedindex=2&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11">
          <div className="country" id="egypt-div">
            <img
              src="https://cache.marriott.com/marriottassets/marriott/CAIMD/caimd-exterior-9993-hor-clsc.jpg"
              alt="egypt hotel"
            />
            <div className="country-text" id="egypt-text">
              EGYPT
            </div>
          </div>
        </a>
      </div>

      <div className="subheading">
        <h2 style={{ color: "white" }}>Experience Something New</h2>
        <p style={{ color: "white" }}>
          The unknown beckons us, and our imaginations run wild with
          possibilities
        </p>
      </div>

      <div className="experience-images">{/* Experience images */}</div>

      <div className="different-hotels">
        <img
          src="https://raw.githubusercontent.com/MichaelZhou334/Hotel-Landing-Page/main/images/villa.jpg"
          alt="hotel front"
        />
        <div className="different-hotels-div">
          <h2 style={{ color: "white" }}>Homes & Villas</h2>
          <p style={{ color: "white" }}>
            Homes & Villas was designed to provide travelers with access to
            high-end vacation rentals, such as entire homes, villas, and luxury
            accommodations. The platform featured a curated selection of upscale
            and unique properties, with distinctive architectural features,
            stunning views, or premium amenities. We offered additional
            concierge services, which could include personalized check-in
            experiences, access to local recommendations, and assistance with
            planning activities and dining reservations.
          </p>
          <button type="submit" className="btn">
            Join for Free
          </button>
        </div>
      </div>

      <div className="back-to-top">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn"
        >
          {" "}
          ⬆ Back to Top
        </button>
      </div>

      <hr className="footer-line" />

      <div className="footer">
        <div className="col-1">
          <div>
            <h3>How can we help?</h3>
            <button className="btn">Request a Call</button>
            <div className="social-icons">{/* Social icons */}</div>
          </div>
        </div>
        <div className="col-2">
          <a href="#">Travel Inspiration</a>
          <a href="#">Pet-Friendly Stays</a>
          {/* Other links */}
        </div>
        <div className="col-3">
          <a href="#">Cookies Statement</a>
          <a href="#">Hotel Hotline</a>
          {/* Other links */}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
