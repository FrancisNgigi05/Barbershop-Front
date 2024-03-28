import { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import Button from "../layouts/Buttondash";
import "../components/css/Button.css";

const MenuCardBooking = ({ id, img, title, price, description }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-slate-50 hover:scale-95 transition duration-300 ease-in-out cursor-pointer"
      key={id}
    >
      <img className=" rounded-t-lg" src={img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-bold text-center text-2xl pt-3">{title}</h3>
        <p>{description}</p>
        <div className=" flex flex-row items-center justify-center gap-4 pb-2">
          <h3 className=" font-semibold text-xl text-center text-red-500">
            Ksh.{price}
          </h3>

          <div className="flex justify-center items-center gap-4">
            <Button title="Book Now" onClick={showModal} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <section className="active">
          <span className="overlay" onClick={hideModal}></span>
          <div className="modal-box">
            <i className="fa-regular fa-circle-check"></i>
            <h2>Booked</h2>
            <h3>You have successfully booked for the shaving</h3>
            <div className="buttons">
              <button className="close-btn" onClick={hideModal}>Ok, Close</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MenuCardBooking;