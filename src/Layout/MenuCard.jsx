
import Button from "../layouts/Buttondash"
import { Link as RouterLink } from "react-router-dom"; 

const MenuCard = ({ id, img, title, price, description }) => {
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
              {/* Link to the login page */}
              <RouterLink to="/Login" className="text-secondary">
                <Button title="Book Now" />
              </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;