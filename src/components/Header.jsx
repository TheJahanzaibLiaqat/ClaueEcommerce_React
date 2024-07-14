import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import germany from "/images/germany.png"
import canada from "/images/canada.png"
import china from "/images/china.png"
import france from "/images/france.png"
import india from "/images/india.png"
import italy from "/images/italy.png"
import usa from "/images/usa.png"
import arab from "/images/arab.png"
import britian from "/images/britian.png"





const Header = () => {
  return (
    <div className="main text-xs">
      <div className="first md:flex sm:justify-between md:px-6 xl:px-0 xl:justify-around bg-black text-white pt-2 sm:pt-0">
<div className="flex justify-center">
        <div className="flex gap-4 py-3">
        <div className="cursor-pointer hover:text-orange-400 hover:duration-300 flex items-center gap-1">
        <div className="text-sm md:text-md lg:text-lg xl:text-sm"><BsTelephone /></div>
        <div className="md:text-md lg:text-lg xl:text-sm">+923134964026</div>
        </div>

        <div className="cursor-pointer hover:text-orange-400 hover:duration-300 flex items-center gap-1">
        <div className="text-sm md:text-md lg:text-lg xl:text-sm"><CiMail /></div>
        <div className="md:text-md lg:text-lg xl:text-sm">jahan.zaib3373@gmail.com</div>
        </div>
        </div>
        </div>


        <div className="py-3 text-center md:text-start md:text-md lg:text-lg xl:text-sm">
        Summer sale discount off <span className="text-red-500"> 50%! </span> <span className="cursor-pointer hover:text-orange-400 hover:duration-300">Shop Now</span>
        </div>

<div className="xl:flex gap-6 hidden ">
        <div className="group/item flex items-center  ">
           <div className=" text-white cursor-pointer group-hover/item:text-orange-400 hover:duration-300 relative py-3 ">English 

           <ul className="invisible group-hover/item:visible z-20 absolute top-16 group-hover/item:top-10 duration-200 -left-5 cursor-pointer text-gray-500 border py-3 px-5 bg-white space-y-3">
            <li className="hover:text-orange-400 flex gap-2"><img src={canada} alt="" className="h-[20px]" /> Canada</li>
            <hr  className="w-[100px]"/>
            <li className="hover:text-orange-400 flex gap-2"><img src={arab} alt="" className="h-[20px]" />Iran</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={france} alt="" className="h-[20px]" />France</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={italy} alt="" className="h-[20px]" />Italy</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={germany} alt="" className="h-[20px]" />Germany</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={china} alt="" className="h-[20px]" />China</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={india} alt="" className="h-[20px]" />India</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={britian} alt="" className="h-[20px]" />Austrailia</li>
            <hr />
            <li className="hover:text-orange-400 flex gap-2"><img src={usa} alt="" className="h-[20px]" />USA</li>

           </ul>
           </div>

           <div className="text-lg group-hover/item:text-orange-400"><RiArrowDropDownLine /></div>
        </div>

        <div className="group/item xl:flex items-center hidden">
           <div className=" text-white cursor-pointer z-20 group-hover/item:text-orange-400 hover:duration-300 relative py-3 ">USD - US Dollar 
           <ul className="invisible group-hover/item:visible absolute top-16 group-hover/item:top-10 duration-200 cursor-pointer text-gray-500 border py-2 px-9 bg-white">
            <li className="hover:text-orange-400">Pak-Ruppes</li>
           </ul>
           </div>

           <div className="text-lg group-hover/item:text-orange-400"><RiArrowDropDownLine /></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
