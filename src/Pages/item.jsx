import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice/userSlice";
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Swal from 'sweetalert2'

const Item = () => {
  const cartItem = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [price , setPrice] = useState(0)

  useEffect(() => {
    const total = cartItem.reduce((sum, product) => sum + product.price, 0);
    setPrice(total);
  }, [cartItem]);

  

  const updateHandle = (id) => {
    dispatch(addUser(id));
    navigate("/detail");
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
    navigate("/");

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to delete this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  };

  return (
    <div>
      {cartItem.map((product) => (
        <div
          key={product.id}
          className="flex  justify-around border border-gray-300 mx-3 mt-3 group/it"
        >
          <div className="lg:h-[15vh] h-[10vh] w-[12vh] lg:w-[10vw] relative bg-black m-2 group/it">
            <img
              src={product.img}
              alt=""
              className="absolute inset-0 h-[10vh] w-[12vw] lg:h-[15vh] lg:w-[10vw] group-hover/it:opacity-55 cursor-pointer"
            />
          </div>
          <div className="mx-3 relative">
            <div className="text-gray-600 text-sm font-semibold hover:text-orange-300 hover:underline cursor-pointer mt-2 group/it">
              {product.description}
            </div>
            <div className="text-xs text-red-600 font-semibold mt-4">
              ${product.price}.00
            </div>
            <div className="absolute flex mx-1 gap-1 mt-2 -left-2  invisible group-hover/it:visible">
              <Link
                onClick={() => handleRemove(product.id)}
                className="bg-white border border-orange-400 rounded-md p-1 text-xs relative cursor-pointer group/sh invisible group-hover/it:visible hover:bg-orange-300 hover:text-white"
              >
                <IoCloseOutline />
                <div className="text-xs bg-orange-300 top-7 -left-10 rounded-md p-2 text-white absolute invisible group-hover/sh:visible">
                  Remove
                </div>
              </Link>
              <Link
                to="/detail"
                className="bg-white border border-orange-400 rounded-md p-1 relative text-xs cursor-pointer group/shi invisible group-hover/it:visible hover:bg-orange-300 hover:text-white"
                onClick={() => updateHandle(product.id)}
              >
                <IoSettingsOutline />
                <div className="text-xs bg-orange-300 top-7 -right-10 rounded-md p-2 text-white absolute invisible group-hover/shi:visible">
                  Update
                </div>
              </Link>
            </div>
          </div>
          {/* <div>
            <button
              className="bg-red-600 text-white p-1 block text-xs rounded-md hover:bg-red-700"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div> */}
        </div>
      ))}
      
      <div>
        <hr className="h-[2px] bg-gray-400 w-[200px] mx-auto mt-3" />
        <div className="font-semibold text-center mt-3">Total Price:${price}.00</div>
        <p className="text-xs text-gray-500 text-center">
          Lorem ipsum dolor, sit
        </p>
      </div>
    </div>
  );
};

export default Item;
