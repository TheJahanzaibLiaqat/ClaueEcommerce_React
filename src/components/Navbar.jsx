import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import watch from "/images/watch.jpg";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import germany from "/images/germany.png";
import canada from "/images/canada.png";
import china from "/images/china.png";
import france from "/images/france.png";
import india from "/images/india.png";
import italy from "/images/italy.png";
import usa from "/images/usa.png";
import arab from "/images/arab.png";
import britian from "/images/britian.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Item from "../Pages/item";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    setOpen(!open);
  };
  const cartItem = useSelector((state) => state.users);

  return (
    <div>
      <nav className="xl:flex justify-around items-center bg-white hidden">
        <div className="text-3xl font-bold">Claue</div>
        <ul className="flex gap-10">
          <li className="relative group/item cursor-pointer py-4">
            Home
            <div className="absolute z-20 invisible group-hover/item:visible  gap-5 px-10 border flex top-20 group-hover/item:top-12 duration-200 -left-5 bg-white">
              <div>
                <ul className="space-y-2 py-3 w-[20vw]">
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Default
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Darken Mode
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Game Store
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Baby Store
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Watch
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Static Image
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Cosmetics
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 py-3 w-[20vw]">
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Default
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Darken Mode
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Game Store
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Baby Store
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Watch
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Static Image
                  </li>
                  <hr />
                  <li className="text-gray-600 hover:text-gray-700">
                    Home Cosmetics
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="py-4 relative group/item cursor-pointer">
            Shop
            <div className="absolute z-20 bg-white invisible group-hover/item:visible w-[60vw] -left-[10vw] top-20 group-hover/item:top-12 duration-200 border px-10 py-4">
              <div className="text-xl font-semibold">Top Content</div>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi in dignissimos corrupti iste harum, nulla, numquam illo
                natus repellendus eius ut ipsum molestiae, voluptatem maiores.
                Fuga eius voluptatum iusto ullam.
              </p>
              <hr />
              <div className="flex gap-6 py-3 ">
                <div>
                  <div className="py-2">Catogaries</div>
                  <hr />

                  <div className="flex gap-6 my-2">
                    <ul className="space-y-2">
                      <li>Top Slider</li>
                      <hr />
                      <li>Left Slider</li>
                      <hr />
                      <li>Right Slider</li>
                    </ul>

                    <ul className="space-y-2">
                      <li>Product List View</li>
                      <hr />
                      <li>With Discription</li>
                      <hr />
                      <li>Product Hover Effect 2</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="py-2">Collection</div>
                  <hr />
                  <ul className="space-y-2 my-2">
                    <li>Layout Collection</li>
                    <hr />
                    <li>Mens Collection</li>
                    <hr />
                    <li>Ladies Collection</li>
                  </ul>
                </div>

                <div>
                  <img
                    src={watch}
                    alt=""
                    className="h-[20vh] w-[15vw] ms-20 relative rounded-md"
                  />
                  <button className="bg-transparent invisible group-hover/item:visible top-[210px] font-bold text-white border-2 border-white left-[600px] rounded-lg py-2 px-4 shadow hover:border-orange-300 hover:bg-orange-300 duration-200 absolute">
                    Accessories
                  </button>
                </div>
              </div>
              <hr />

              <div className="text-xl font-semibold py-3">Bottom Content</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis autem optio fuga, consequatur delectus voluptate
                incidunt est. Vitae tempore, voluptatem quisquam exercitationem
                nobis aliquid maxime perferendis ipsum sed ratione saepe!
              </p>
            </div>
          </li>
          <li className="py-4 cursor-pointer">Product</li>
          <li className="py-4 cursor-pointer">Pages</li>
          <li className="py-4 cursor-pointer">Elements</li>
          <li className="py-4 cursor-pointer">Accessories</li>
          <li className="text-red-600 py-4 cursor-pointer">Buy Now</li>
        </ul>

        <div className="flex text-2xl gap-3">
          <div className="py-4">
            <CiSearch className="cursor-pointer hover:text-orange-300 duration-700" />
          </div>
          <div className="py-4">
            <CgProfile className="cursor-pointer hover:text-orange-300 duration-700" />
          </div>
          <div className="py-4">
            <CiHeart className="cursor-pointer hover:text-orange-300 duration-700" />
          </div>
          <div className="relative -z-1 group/item py-4">
            <BsCart3 className="cursor-pointer hover:text-orange-300 duration-700" />
            <div className="bg-white min-h-[50vh] pb-5 w-[20vw] z-30 top-[57px] -right-5 group-hover/item:visible invisible absolute">
              {cartItem.length ? (
                <Item />
              ) : (
                <div className="flex flex-col text-center mx-10 justify-center mt-20">
                  No Item{" "}
                  <span className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa, quo ullam.
                  </span>
                </div>
              )}
            </div>
            <div className="bg-black text-white rounded-full cursor-default text-xs text-center h-5 w-5 absolute top-2 -right-2">
              {cartItem.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive Navbar */}

      <nav className="xl:hidden justify-between mx-4 items-center bg-white flex">
        <button onClick={openToggle}>
          {open ? (
            <div className=" absolute right-0 top-0 h-[105vh] w-full bg-opacity-65 bg-black text-end px-6 text-4xl text-white z-20">
              <RxCross2 className="text-2xl text-white" />x
            </div>
          ) : (
            <div>
              <RiMenu2Line className="text-2xl " />
            </div>
          )}
        </button>

        <div
          className={`flex absolute ${
            open
              ? "left-0 top-0 duration-500  transform ease-in-out"
              : "-left-96 top-0 duration-500 ease-in-out transform"
          } z-20`}
        >
          <button
            className={`bg-black text-white py-6 px-8 group/item focus:duration-300 focus:transition hover:bg-white hover:text-black xl:focus:bg-white xl:focus:text-black cursor-pointer`}
          >
            Menu
            <div>
              <ul className="bg-white text-gray-600 text-start py-4 w-[341px] group-focus/item:visible absolute left-0 top-[70px] space-y-2 h-[95vh] cursor-default border-r pt-10">
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Home <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Product <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Shop <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Pages <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Elements <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Accessories <IoIosArrowForward />
                </li>
                <li className="border-b  mb-4 pb-2 px-3 cursor-pointer text-red-600">
                  Buy Now
                </li>

                {/* <li className="group-focus/item:visible invisible mx-auto text-center pt-20 border-b w-fit text-xl text-gray-600">Its Menu</li> */}
              </ul>
            </div>
          </button>

          <button className="bg-black text-white py-6 px-8 group/item focus:duration-300 focus:transition hover:bg-white hover:text-black xl:focus:bg-white xl:focus:text-black cursor-pointer">
            Account
            <div>
              <ul className="bg-white text-start text-gray-600 py-4 w-[340px] group-hover/item:visible xl:group-focus/item:visible invisible border-r absolute left-0 top-[70px] space-y-2 h-[95vh] cursor-default pt-10">
                <li className="border-b mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  My Account <IoIosArrowForward />
                </li>
                <li className="border-b mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  My Wish List <IoIosArrowForward />
                </li>
                <li className="border-b mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Sign in <IoIosArrowForward />
                </li>
                <li className="border-b mb-4 pb-2 px-3 cursor-pointer flex items-center justify-between">
                  Create an Account <IoIosArrowForward />
                </li>
              </ul>
            </div>
          </button>

          <button className="bg-black text-white group/item py-6 px-8 focus:duration-300 focus:transition hover:bg-white hover:text-black xl:focus:bg-white xl:focus:text-black cursor-pointer">
            Setting
            <div>
              <ul className="bg-white text-gray-600 text-start py-4 group-hover/item:visible xl:group-focus/item:visible invisible border-r w-[344px] absolute left-0 top-[70px] space-y-10 h-[95vh] cursor-default pt-10">
                <li className="border-b mb-3 pb-2 ps-2 cursor-pointer">
                  <div className="group/button flex items-center">
                    <div className=" cursor-pointer group-hover/button:text-orange-400 hover:duration-300 relative py-3 ">
                      USD - US Dollar
                      <ul className="invisible group-hover/button:visible absolute top-16 left-20 group-hover/item:top-10 duration-200 cursor-pointer text-gray-500 border py-2 px-9 bg-white">
                        <li className="hover:text-orange-400">Pak-Ruppes</li>
                      </ul>
                    </div>

                    <div className="text-lg group-hover/button:text-orange-400">
                      <RiArrowDropDownLine />
                    </div>
                  </div>
                </li>

                <li className="border-b mb-3 pb-2 ps-2 cursor-pointer">
                  <div className="group/amm flex items-center  ">
                    <div className="  cursor-pointer group-hover/amm:text-orange-400 hover:duration-300 relative ">
                      English
                      <ul className="invisible group-hover/amm:visible absolute top-16 group-hover/item:top-10 duration-200 -left-1 cursor-pointer text-gray-500 border py-3 px-5 bg-white space-y-3">
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={canada} alt="" className="h-[20px]" />{" "}
                          Canada
                        </li>
                        <hr className="w-[100px]" />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={arab} alt="" className="h-[20px]" />
                          Iran
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={france} alt="" className="h-[20px]" />
                          France
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={italy} alt="" className="h-[20px]" />
                          Italy
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={germany} alt="" className="h-[20px]" />
                          Germany
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={china} alt="" className="h-[20px]" />
                          China
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={india} alt="" className="h-[20px]" />
                          India
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={britian} alt="" className="h-[20px]" />
                          Austrailia
                        </li>
                        <hr />
                        <li className="hover:text-orange-400 flex gap-2">
                          <img src={usa} alt="" className="h-[20px]" />
                          USA
                        </li>
                      </ul>
                    </div>

                    <div className="text-lg group-hover/amm:text-orange-400">
                      <RiArrowDropDownLine />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </button>
        </div>

        <div className="text-3xl font-bold">Claue</div>

        <div className="flex text-2xl gap-3">
          <div className="py-4"><CiSearch /></div>
          
          <div className="relative -z-1 group/item py-4">
            <BsCart3 className="cursor-pointer hover:text-orange-300 duration-700" />
            <div className="bg-white min-h-[50vh] pb-5 w-[60vw] z-30 top-[57px] right-1 group-hover/item:visible invisible absolute">
              {cartItem.length ? (
                <div>
                  <Item />
                </div>
                
              ) : (
                <div className="flex flex-col text-center mx-10 justify-center mt-20">
                  No Item{" "}
                  <span className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa, quo ullam.
                  </span>
                </div>
              )}
            </div>
            <div className="bg-black text-white rounded-full cursor-default text-xs text-center h-5 w-5 absolute top-2 -right-2">
              {cartItem.length}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
