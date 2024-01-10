import {AiTwotoneDelete} from "react-icons/ai"
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div>
      <div className="border-b border-black p-2">
        <div className="flex flex-row">
          <div className="w-44 h-44">
            <img src={item.image} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-4 w-[47%]">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <h1 className="text-xs opacity-90 ">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
            <div className="flex justify-between items-center">
              <p className="text-green-800 font-bold text-sm">${item.price}</p>
              <button
                onClick={removeFromCart}
                className="p-2 text-red-600 text-2xl bg-gray-300 rounded-full "
              >
                <AiTwotoneDelete/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

