import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [41.8864, -87.6246]; // Chicago, USA

const OpenStreetMap = () => {
  return (
    <MapContainer center={center} zoom={10} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Chicago, USA</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
