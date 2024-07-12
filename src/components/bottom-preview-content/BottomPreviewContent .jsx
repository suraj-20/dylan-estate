import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

import review_logo from "../../assets/Frame 372.jpg";
import card_image from "../../assets/Frame 31.jpg";
import location_logo from "../../assets/Group 33410.png";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3VyYWowMDE1IiwiYSI6ImNseWlicmV1dzBjNXMyanM0c2ZmYTdnNzUifQ.nV8x9mlL-5MOzYfgkQzuhQ";

const BottomPreviewContent = () => {
  const [viewState, setViewState] = useState({
    latitude: 19.076,
    longitude: 72.8777,
    zoom: 12,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [activeTab, setActiveTab] = useState("Transport");
  const [openAccordion, setOpenAccordion] = useState("Bus Station");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location:", error)
      );
    }
  }, []);

  const tabs = ["Transport", "Essentials", "Utility"];
  const transportOptions = [
    {
      name: "Bus Station",
      icon: "🚍",
      stations: [
        { name: "Mira Road Station (E)", distance: "0.7 km", time: "3 mins" },
        { name: "Mira Road Station (E)", distance: "0.8 km", time: "2 mins" },
        { name: "Mira Road Station (E)", distance: "0.9 km", time: "4 mins" },
        {
          name: "Mira Road Police Station",
          distance: "1.8 km",
          time: "6 mins",
        },
      ],
    },
    { name: "Railway Station", icon: "🚉" },
    { name: "Metro stations", icon: "🚇" },
    { name: "Airport", icon: "✈️" },
  ];
  return (
    <div className="bottom-preview-content d-flex flex-column gap-4">
      <div className="explore-neighborhood-content d-flex flex-column gap-3">
        <h3>Explore Neighborhood</h3>
        <div className="search-bar d-flex gap-4">
          <div className="current-location d-flex gap-2 align-items-center">
            <img src={location_logo} alt="" width={40} />
            <input
              style={{ border: "none" }}
              type="text"
              placeholder="Gokul Village chs 2"
            />
          </div>
          <div className="input-field d-flex align-items-center gap-3">
            <label htmlFor="To" className="d-flex align-items-center">
              To
            </label>
            <input
              className="form-input-field"
              type="text"
              // placeholder=""
            />
          </div>
          <button
            style={{
              color: "#fff",
              background: "#122b49",
              padding: "6px 30x",
              fontWeight: "400",
            }}
            className="btn"
          >
            Search
          </button>
        </div>
        <div className="explore-neighborhood d-flex justify-content-between">
          <div
            className="map-container"
            style={{ height: "400px", width: "65%" }}
          >
            <Map
              {...viewState}
              onMove={(evt) => setViewState(evt.viewState)}
              mapboxAccessToken={MAPBOX_TOKEN}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {userLocation && (
                <Marker
                  longitude={userLocation.longitude}
                  latitude={userLocation.latitude}
                  anchor="bottom"
                >
                  <img src={location_logo} alt="" />
                </Marker>
              )}
            </Map>
          </div>
          <div style={{ width: "32%" }} className="poi-list p-3">
            <ul className="nav nav-tabs">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            <div className="accordion mt-3">
              {transportOptions.map((option) => (
                <div className="accordion-item" key={option.name}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        openAccordion === option.name ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === option.name ? "" : option.name
                        )
                      }
                    >
                      <span className="me-2">{option.icon}</span> {option.name}
                    </button>
                  </h2>
                  {option.stations && (
                    <div
                      className={`accordion-collapse collapse ${
                        openAccordion === option.name ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <ul className="list-group">
                          {option.stations.map((station, index) => (
                            <li
                              key={index}
                              style={{ padding: "0.5rem" }}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              {station.name}
                              <span className="badge" style={{ color: "#000" }}>
                                {station.distance} | {station.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ratings-and-review-content d-flex flex-column gap-4">
        <h3>Ratings & Reviews</h3>
        <div className="reviews-container d-flex justify-content-between">
          <div className="review-contents d-flex flex-column gap-3">
            <div className="reviewer-name-or-rating d-flex justify-content-between align-items-center">
              <div className="reviewr-name-or-logo d-flex gap-3 align-items-center">
                <img src={review_logo} alt="" />
                <span>Aishwarya Malik</span>
              </div>
              <div className="rating">
                <span>
                  4.5 <i class="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-heading">Good Society</h4>
              <p>
                The garden view is mesmerizing, the exposure of natural light is
                good. Easy access to stores, markets and schools.
              </p>
              <a href="/">
                <span></span>
              </a>
            </div>
          </div>
          <div className="review-contents d-flex flex-column gap-3">
            <div className="reviewer-name-or-rating d-flex justify-content-between align-items-center">
              <div className="reviewr-name-or-logo d-flex gap-3 align-items-center">
                <img src={review_logo} alt="" />
                <span>Rajendra Prasad</span>
              </div>
              <div className="rating">
                <span>
                  4.5 <i class="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
            <div className="review-content">
              <h4 className="review-heading">Good Society & Apartment</h4>
              <p>
                With its thoughtfully designed apartments, power backup, and
                24x7 security, it offers a secure and worry-free living
                experience. Easy access to stores, markets and schools....
              </p>
              <a href="/">
                <span>See more</span>
              </a>
            </div>
          </div>
        </div>
        <button
          style={{
            color: "#fff",
            background: "#122b49",
            padding: "6px 20x",
            fontWeight: "400",
            width: "15%",
          }}
          className="btn"
        >
          Write a Review
        </button>
      </div>
      <div className="similiar-property-container">
        <div className="similiar-property-content d-flex flex-column gap-5">
          <h3>Similiar Properties In Miraroad</h3>
          <div className="similiar-property-cards">
            <div className="property-cards d-grid">
              <div class="card" style={{ width: "18rem" }}>
                <img src={card_image} class="card-img-top" alt="..." />
                <div class="card-body  d-flex flex-column gap-2">
                  <div className="top-card-content">
                    <h5 class="card-title">
                      Modern & Luxury 2BHK Flat For Rent
                    </h5>
                    <p class="card-text">Kashimira, Mira Road East, Mumbai</p>
                  </div>
                  <div className="bottom-card-content">
                    <p className="card-text">₹ 60.50 Lac</p>
                    <p className="card-text">1850 Sq. ft.</p>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={card_image} class="card-img-top" alt="..." />
                <div class="card-body  d-flex flex-column gap-2">
                  <div className="top-card-content">
                    <h5 class="card-title">
                      Modern & Luxury 2BHK Flat For Rent
                    </h5>
                    <p class="card-text">Kashimira, Mira Road East, Mumbai</p>
                  </div>
                  <div className="bottom-card-content">
                    <p className="card-text">₹ 60.50 Lac</p>
                    <p className="card-text">1850 Sq. ft.</p>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={card_image} class="card-img-top" alt="..." />
                <div class="card-body  d-flex flex-column gap-2">
                  <div className="top-card-content">
                    <h5 class="card-title">
                      Modern & Luxury 2BHK Flat For Rent
                    </h5>
                    <p class="card-text">Kashimira, Mira Road East, Mumbai</p>
                  </div>
                  <div className="bottom-card-content">
                    <p className="card-text">₹ 60.50 Lac</p>
                    <p className="card-text">1850 Sq. ft.</p>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src={card_image} class="card-img-top" alt="..." />
                <div class="card-body  d-flex flex-column gap-2">
                  <div className="top-card-content">
                    <h5 class="card-title">
                      Modern & Luxury 2BHK Flat For Rent
                    </h5>
                    <p class="card-text">Kashimira, Mira Road East, Mumbai</p>
                  </div>
                  <div className="bottom-card-content">
                    <p className="card-text">₹ 60.50 Lac</p>
                    <p className="card-text">1850 Sq. ft.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-location-content d-flex flex-column gap-5">
        <h3>About Miraroad</h3>
        <div className="about-location-container">
          <p>
            Spread over 510 sqft. this home is an ideal place to live in. Access
            to bus station & medical stores is very easy & convenient from this
            house. If you are a frequent traveller, then you'll be happy to note
            that train station is less than 10 minutes from this house. With PVR
            Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch
            your favourite movies running & never worry about missing a show
            because of traffic. Never miss out on lifestyle as Rassaz Mall......
          </p>
          <a href="/">
            <span>See more</span>
          </a>
        </div>
        <button
          style={{
            color: "#fff",
            background: "#122b49",
            padding: "6px 20x",
            fontWeight: "400",
            width: "15%",
          }}
          className="btn"
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default BottomPreviewContent;
