import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

// Bangladesh default center
const BD_CENTER = [23.685, 90.3563];

// Create a React icon marker
const getCustomIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <div className="text-red-600 text-xl">
      <FaMapMarkerAlt />
    </div>
  );
  return L.divIcon({
    html: iconMarkup,
    className: "custom-div-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

// Control map flyTo animation
const FlyToLocation = ({ location }) => {
  const map = useMap();

  React.useEffect(() => {
    if (location) {
      map.flyTo([location.latitude, location.longitude], 15, {
        duration: 2, // seconds
      });
    }
  }, [location, map]);

  return null;
};

const DeliveryMap = ({ serviceCenters }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [flyTo, setFlyTo] = useState(null); // location to fly to on button click

  // Filter markers only based on search
  const filteredCenters = serviceCenters.filter((center) =>
    center.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Find one exact location (first match)
  const matchedLocation = filteredCenters[0];

  // Handle Go click
  const handleFly = () => {
    if (matchedLocation) {
      setFlyTo(matchedLocation);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* Search bar and Go Button */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleFly} className="btn btn-primary">
          Go
        </button>
      </div>

      {/* Map section */}
      <div className="h-[500px] w-full rounded-lg shadow-lg">
        <MapContainer
          center={BD_CENTER}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Animate if flyTo is set */}
          {flyTo && <FlyToLocation location={flyTo} />}

          {/* Marker list */}
          {filteredCenters.map((center, idx) => (
            <Marker
              key={idx}
              position={[center.latitude, center.longitude]}
              icon={getCustomIcon()}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">{center.city}</h2>
                  <p>
                    {center.district}, {center.region}
                  </p>
                  <p className="text-sm">
                    Areas: {center.covered_area.join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default DeliveryMap;
