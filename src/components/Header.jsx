import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store);

  return (
    <header>
      <img style={{ width: "150px" }} src="/public/logo.png" />
      <p>
        {state.isLoading
          ? "uçuşlar hesaplanıyor..."
          : state.isError
          ? "bir hata oluştu :("
          : state.flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;
