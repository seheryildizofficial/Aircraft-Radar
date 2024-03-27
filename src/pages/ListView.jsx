import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
const ListView = ({ openModal }) => {
  const state = useSelector((store) => store);

  //gösterilecek ilk elemanı hesaplar
  const [itemOffset, setItemOffset] = useState(0);
  //sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 10;
  // gösterilecek son elemanı hesaplar
  const endOffset = itemOffset + itemsPerPage;
  //elimizedeki aralığa göre verileri keser
  const currentItems = state.flights?.slice(itemOffset, endOffset);
  //toplam sayfa sayısnı hesapla
  const pageCount = Math.ceil(state.flights?.length / itemsPerPage);

  // her sayfa değiştiğinde çalışır
  const handlePageClick = (event) => {
    //gösterilecek ilk elemanı belirler
    const newOffset = event.selected * itemsPerPage;

    //state i günceller
    setItemOffset(newOffset);
  };
  return (
    <div className="p-4">
      <table className="table table-hover table-light  bg-info">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kuyru Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => openModal(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< geri"
      />
    </div>
  );
};

export default ListView;
