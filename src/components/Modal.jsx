import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { options2 } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { setTrail } from "../redux/slices/flightSlice";

const Modal = ({ closeModal, detailId }) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    //useEffect her çalıştığında önceki verileri temizle
    setData(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        options2
      )
      .then((res) => {
        dispatch(setTrail(res.data.trail));
        setData(res.data);
      });
  }, [detailId]);
  const images = data?.aircraft?.images?.large;
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close-area">
          <span onClick={closeModal}>X</span>
        </p>

        {!data ? (
          <div className="wrapper">
            <div className="loader">
              <span></span>
            </div>
          </div>
        ) : !data.airport.origin || !data.airport.destination ? (
          <div>
            <p>{data.airline?.name}</p>
            <p className="text-dark">BU UÇUŞUN VERİLERİ GİZLİDİR!</p>
          </div>
        ) : (
          <>
            <h2>{data.aircraft.model.text}</h2>

            <p>{data.aircraft.registration}</p>

            <Splide options={{ rewind: true, width: 300, height: 250 }}>
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <img src={image.src} />
                </SplideSlide>
              ))}
            </Splide>
            <p>
              <span>Şirket:</span>
              <span>{data.airline.name}</span>
            </p>
            <p>
              <span>Kalkış:</span>
              <span>{data.airport.origin.name}</span>
            </p>
            <p>
              <span>Hedef:</span>
              <span>{data.airport.destination.name}</span>
            </p>
            <p className={data.status.icon}>
              <span>{data.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
