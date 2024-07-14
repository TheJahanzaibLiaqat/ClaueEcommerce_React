import model22 from "/images/model22.webp"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



const Seller = () => {
    const card = [
        {id:"1", img:"/images/model14.webp", description:"100% Cotton Sleeveless Maxi Shirt Dress" , price:"$115.00"},
        {id:"2", img:"/images/model15.webp", description:"Fairy Belted Floral Midi Dress" , price:"$6.00"},
        {id:"3", img:"/images/model16.webp", description:"Floral Short-Sleeve Silk Chiffon Dress" , price:"$120.00"},
        {id:"4", img:"/images/model17.webp", description:"100% Linen Button Detail Midi Skirt" , price:"$39.00"},
        {id:"5", img:"/images/model18.webp", description:"Buttoned-Front Linen Blazer Vest" , price:"$39.00"},
        {id:"6", img:"/images/model19.webp", description:"Slim-Fift V-neck T-shirt" , price:"$73.00"},
        {id:"7", img:"/images/model20.webp", description:"100% Wool Vintage Style Cloche Hat4" , price:"$115.00"},
        {id:"8", img:"/images/model21.webp", description:"Drawstring Raglan-Sleeved 100% Cotton Hoodie" , price:"$99.00"},
    ]
  return (
    <div className="mt-12">
        <div>
        <div>
      <div className="text-center font-semibold uppercase text-3xl">Best Seller</div>
      <p className="italic text-gray-600 text-center font-mono">Top sale in this week</p>

<div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:grid-cols-4 lg:mx-28 mx-3 my-10 gap-6">
      {
        card.map((item) =>(
            <div key={item.id} className="cursor-pointer group/item">
               <div className="h-[28vh] md:h-[45vh] xl:h-[42vh] overflow-hidden relative group-hover/item:hidden duration-500 transition-transform"><img src={item.img} alt="" className="absolute inset-0" />
               
               
               </div>
               <div className="relative h-[28vh] md:h-[42vh] overflow-hidden hidden group-hover/item:block group-hover/item:duration-300 bg-black">
               <div className="bg-cover bg-top group-hover/item:opacity-55 absolute  inset-0" style={{backgroundImage:`url(${model22})`}}>
                
                
            
               </div>
               <div>
               <CiSearch className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-2 duration-300 hover:bg-black hover:text-white hover:border-gray-500hover:border"/>
               <CiHeart className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-12 duration-300 hover:bg-black hover:text-white hover:border-gray-500 hover:border"/>
               <IoBarChartOutline className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-[90px] duration-300 hover:bg-black hover:text-white hover:border-gray-500 hover:border"/>
               </div>
               <Link to="/item" className="absolute bg-white bottom-6 py-1 px-4 md:py-2 md:px-6 rounded-full left-10 md:left-12 lg:left-20 duration-300 hover:bg-black hover:border-gray-500 hover:text-white hover:border">Add to Cart</Link>
               </div>
               <div className="mt-3 hover:text-orange-300 duration-300">{item.description}</div>
               <div className="text-gray-600 mt-4">{item.price}</div>
            </div>
        ))
      }

</div>
    </div>
        </div>


       
    </div>
  )
}

export default Seller
