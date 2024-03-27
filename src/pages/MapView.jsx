import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../redux/slices/flightSlice";
import { icon } from "leaflet";
const MapView = ({ openModal }) => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  //icon oluşturma
  const planeIcon = icon({
    iconUrl: "/public/iconn.png",
    iconSize: [30, 15],
  });
  return (
    <MapContainer
      center={[39.223874, 35.372202]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {state.flights.map((flight) => (
        <Marker
          key={flight.id}
          icon={planeIcon}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => openModal(flight.id)}>Detay</button>
              {state.trail.length > 0 && (
                <button onClick={() => dispatch(clear())}>
                  Rotayı Temizle
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={state.trail} />
    </MapContainer>
  );
};

export default MapView;
