import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import location_logo from "../../assets/Group 33410.png";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3VyYWowMDE1IiwiYSI6ImNseWlicmV1dzBjNXMyanM0c2ZmYTdnNzUifQ.nV8x9mlL-5MOzYfgkQzuhQ";

const LocationDetailsForm = () => {
  const [viewState, setViewState] = useState({
    latitude: 19.076,
    longitude: 72.8777,
    zoom: 12,
  });
  const [userLocation, setUserLocation] = useState(null);

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
  return (
    <form className="d-flex flex-column gap-5">
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Building Society Name :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Locality / Area :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
      </div>
      <div className="area-content-container d-flex justify-content-between gap-5">
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            Landmark / Street Name :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
        <div className="content-container w-50">
          <label for="exampleInputPassword1" class="form-label">
            City :
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">India</option>
            <option value="2">China</option>
            <option value="3">America</option>
          </select>
        </div>
      </div>
      <div className="content-container">
        <label for="propertyfor" class="form-label">
          Mark Locality in Map
        </label>
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
      </div>
    </form>
  );
};

export default LocationDetailsForm;
