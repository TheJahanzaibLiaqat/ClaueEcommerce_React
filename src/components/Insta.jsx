import ring from "/images/ring.webp";
import bag1 from "/images/bag1.webp";
import model23 from "/images/model23.webp";
import bag2 from "/images/bag2.webp";
import ring2 from "/images/ring2.webp";
import model24 from "/images/model24.webp";
import { IoCarSportOutline } from "react-icons/io5";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { CiInboxIn } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Insta = () => {
  return (
    <div>
      <div className="uppercase text-center font-bold text-2xl mt-7">
        @ FOLLOW US ON INSTAGRAM
      </div>

      <div className="grid grid-cols-6 my-10 ">
        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={ring}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>

        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={bag1}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>

        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={model23}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>

        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={bag2}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>

        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={ring2}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>

        <div className="relative h-[10vh] md:h-[22vh] lg:h-[30vh] xl:h-[33vh] overflow-hidden group/item bg-black">
          <div>
            <img
              src={model24}
              alt=""
              className="absolute hover:scale-110 inset-0 duration-1000 transition-transform cursor-pointer group-hover/item:opacity-60"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-3 xl:mx-28 gap-7 mb-10">
        <div className="flex items-center gap-3">
        <IoCarSportOutline className="text-gray-600 h-[40px] w-[40px]"/>
          <div>
            <div className="text-lg font-semibold">FREE SHIPPING</div>
            <div className="text-gray-600 mt-2 text-sm">
              FREE SHIPPING Free shipping on all US order or order above $200.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
        <CiInboxIn className="text-gray-600 h-[40px] w-[40px]"/>
          <div>
            <div className="text-lg font-semibold">SUPPORT 24/7</div>
            <div className="text-gray-600 mt-2 text-sm">Contact us 24 hours a day, 7 days a week.</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
        <HiArrowPathRoundedSquare className="text-gray-600 h-[40px] w-[40px]"/>
          <div>
            <div className="text-lg font-semibold">30 DAYS RETURN</div>
            <div className="text-gray-600 mt-2 text-sm">
            Simply return it within 30 days for an exchange.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
        <CiLock  className="text-gray-600 h-[40px] w-[40px]"/>
          <div>
            <div className="text-lg font-semibold">100% PAYMENT SECURE</div>
            <div className="text-gray-600 mt-2 text-sm">
            We ensure secure payment with PEV.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;
