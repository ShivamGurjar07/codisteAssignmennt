// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState, useContext } from "react";
// import { fetchEntries } from "../api/api";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";

// const TravelMap = () => {
//   const { user } = useContext(AuthContext);
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const loadEntries = async () => {
//       try {
//         const { data } = await fetchEntries(user.token);
//         setEntries(data);
//       } catch (error) {
//         toast.error("Error loading map entries");
//       }
//     };

//     loadEntries();
//   }, [user]);

//   return (
//     <MapContainer
//       center={[20, 0]}
//       zoom={2}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {entries.map((entry) => (
//         <Marker
//           key={entry._id}
//           position={[entry.location.lat, entry.location.lng]}
//         >
//           <Popup>
//             <strong>{entry.location}</strong>
//             <br />
//             {entry.description}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default TravelMap;


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TravelMap = ({ center, onClose }) => {
  return (
    <div className="map-container">
      <button className="close-map" onClick={onClose}>Close Map</button>
      <MapContainer center={center} zoom={10} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Selected Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TravelMap;
