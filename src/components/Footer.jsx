import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandSnapchat } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="xl:mx-28 mx-3 xl:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 py-16 space-y-4 md:space-y-0">
        <ul className="space-y-4 text-gray-600">
        <li className="font-bold text-4xl text-black">Claue</li>
        <li className="cursor-pointer hover:text-orange-300 duration-1000">P-182 Street # 7 Sohailabad near Batala Colony</li>
        <li className="cursor-pointer hover:text-orange-300 duration-1000">jahan.zaib3373@gmail.com</li>
        <li className="cursor-pointer hover:text-orange-300 duration-1000">+3134964026</li>
        <li className="flex gap-4"><GrFacebookOption  className="cursor-pointer hover:text-orange-300 duration-1000"/> <IoLogoInstagram className="cursor-pointer hover:text-orange-300 duration-1000"/> <TbBrandSnapchat className="cursor-pointer hover:text-orange-300 duration-1000"/></li>
        </ul>

        <ul className="space-y-4 text-gray-600">
            <li className="font-semibold text-xl text-black">Categories</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Men</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Women</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Accessories</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Shoes</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Denim</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Dress</li>
        </ul>

        <ul className="space-y-4 text-gray-600">
            <li  className="font-semibold text-xl text-black">Infomation</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">About Us</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Contact Us</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Returns & Exchanges</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Shipping & Delivery</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Privacy Policy</li>
        </ul>

        <ul className="space-y-4 text-gray-600">
            <li  className="font-semibold text-xl text-black">Quick Links</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Store Location</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">My Account</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Accessories</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Orders Tracking</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Size Guide</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">FAQs</li>
        </ul>

        <ul className="space-y-4 text-gray-600">
            <li  className="font-semibold text-xl text-black">Newsletter</li>
            <li className="cursor-pointer hover:text-orange-300 duration-1000">Subscribe to our newsletter and get 10% off your first purchase</li>
            <li className="flex border border-gray-700 rounded-full p-1 w-fit"><input type="text" placeholder="Your email address" className="ps-3 w-[30vh] md:w-auto bg-transparent outline-none placeholder:text-gray-700" />
             <button className="bg-black rounded-full py-2 px-5 text-white">Subscribe</button>
             </li>
        
        </ul>



        </div>
      </div>
    </div>
  )
}

export default Footer
