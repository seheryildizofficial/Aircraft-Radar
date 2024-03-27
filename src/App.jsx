import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions/flightAction";
import Modal from "./components/Modal";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  //modalı açar
  const openModal = (id) => {
    setDetailId(id); //hangi uçak için açıldığının state i
    setIsOpen(true); //modalı açar
  };
  //modalı kapatır
  const closeModal = () => {
    setDetailId(null);
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getFlight());
  }, []);
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? "active" : ""}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {/** hangi bileşenin ekrana basılacağını belirleme */}
      {isMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}
      {/** modal bileşeni */}
      {isOpen && <Modal detailId={detailId} closeModal={closeModal} />}
    </>
  );
};

export default App;
