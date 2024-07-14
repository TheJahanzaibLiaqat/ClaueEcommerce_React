import model11 from "/images/model11.webp"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBarChartOutline } from "react-icons/io5";
import model12 from "/images/model12.webp"
import cloth from "/images/cloths.webp"
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice/userSlice";
import Swal from 'sweetalert2'



const Trending = () => {

  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const addHandle = (item) =>{
     dispatch(addUser(item))
    //  navigate("/item")
    Swal.fire("Product is add to cart");
  }
    const card = [
        {id:"1", img:"/images/model3.webp", description:"100% Cotton Sleeveless Maxi Shirt Dress" , price: 115.00},
        {id:"2", img:"/images/model4.webp", description:"Fairy Belted Floral Midi Dress" , price:6.00},
        {id:"3", img:"/images/model5.webp", description:"Floral Short-Sleeve Silk Chiffon Dress" , price:120.00},
        {id:"4", img:"/images/model6.webp", description:"100% Linen Button Detail Midi Skirt" , price:39.00},
        {id:"5", img:"/images/model7.webp", description:"Buttoned-Front Linen Blazer Vest" , price:39.00},
        {id:"6", img:"/images/model8.webp", description:"Slim-Fift V-neck T-shirt" , price:73.00},
        {id:"7", img:"/images/model9.webp", description:"100% Wool Vintage Style Cloche Hat4" , price:115.00},
        {id:"8", img:"/images/model10.webp", description:"Drawstring Raglan-Sleeved 100% Cotton Hoodie" , price:99.00},

    ]
  return (
    <div>
        <div>
        <div>
      <div className="text-center font-semibold uppercase text-3xl">Trending</div>
      <p className="italic text-gray-600 text-center font-mono">Top view in this week</p>

<div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:grid-cols-4 lg:mx-28 mx-3 my-10 gap-6">
      {
        card.map((item) =>(
            <div key={item.id} className="cursor-pointer group/item">
               <div className="h-[32vh] md:h-[45vh] xl:h-[45vh] overflow-hidden relative group-hover/item:hidden duration-500 transition-transform"><img src={item.img} alt="" className="absolute inset-0" />
               
               
               </div>
               <div className="relative h-[32vh] md:h-[45vh] overflow-hidden hidden group-hover/item:block group-hover/item:duration-300 bg-black">
               <div className="bg-cover bg-bottom group-hover/item:opacity-45 absolute  inset-0" style={{backgroundImage:`url(${model11})`}}>
                
                
            
               </div>
               <div>
               <CiSearch className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-2 duration-300 hover:bg-black hover:text-white hover:border hover:border-gray-500"/>
               <CiHeart className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-12 duration-300 hover:bg-black hover:text-white hover:border hover:border-gray-500"/>
               <IoBarChartOutline className="bg-white h-8 w-8 p-1 rounded-full absolute left-2 top-[90px] duration-300 hover:bg-black hover:text-white hover:border hover:border-gray-500"/>
               </div>
               <Link className="absolute bg-white bottom-6 py-1 px-4 md:py-2 md:px-6 rounded-full left-10 md:left-12 lg:left-20 duration-300 hover:bg-black hover:border hover:text-white hover:border-gray-500" onClick={()=>addHandle(item)}>Add to Cart</Link>
               </div>
               <div className="mt-3 hover:text-orange-300 duration-300">{item.description}</div>
               <div className="text-gray-600 mt-4">${item.price}.00</div>
            </div>
        ))
      }

</div>
    </div>
        </div>


        <div className="lg:flex lg:mx-28 gap-6 space-y-4 lg:space-y-0 mb-5">
            <div className="h-[35vh] md:h-[55vh] lg:h-[48vh] w-[90vw] lg:w-[50vw] mx-auto relative overflow-hidden cursor-pointer"><img src={model12} alt="" className="absolute inset-0 hover:scale-110 duration-300 transition-transform" />
            <div className="text-white absolute block top-[100px] md:top-[150px] lg:top-[170px] md:ms-20 ms-14 lg:ms-0 lg:mx-auto w-[60vw] lg:w-[40vw] font-bold text-center">
            <div className="text-3xl md:text-4xl uppercase">lookbook 2024</div>
            <p className="text-lg font-semibold uppercase">Make love this look</p>
            </div>
            </div>
            <div className="h-[35vh] md:h-[55vh] lg:h-[48vh] w-[90vw] lg:w-[50vw] mx-auto relative overflow-hidden cursor-pointer"><img src={cloth} alt="" className="absolute inset-0 hover:scale-110 duration-300 transition-transform" />
            <div className="text-white absolute block top-[90px] md:top-[140px] lg:top-[150px] mx-auto md:ms-20 ms-14 lg:ms-0 lg:mx-auto w-[60vw] lg:w-[40vw] font-bold text-center">
            <p className="text-lg font-semibold uppercase">summer sale</p>
            <div className="text-5xl md:text-6xl uppercase">up to 70% </div>
            
            </div>
            </div>
            

        </div>
    </div>
  )
}

export default Trending
