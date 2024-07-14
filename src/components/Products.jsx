import women from "/images/women.webp"
import accss from "/images/accss.webp"
import watch2 from "/images/watch2.webp"
import footwear from "/images/footwear.webp"



const Products = () => {
  return (
    <div className="md:flex py-14 justify-center items-center gap-5 h-auto space-y-4 md:space-y-0">
        <div className="overflow-hidden relative h-[450px] w-[90vw] md:h-[450px] md:w-[290px] lg:h-[615px] lg:w-[410px] mx-auto md:mx-0">
        <div className="absolute inset-0  cursor-pointer bg-cover bg-center transition-transform duration-300 hover:scale-110" >
           <img src={women} alt="" />

            </div>
            <button className="bg-white py-2 px-6 hover:border-orange-300 hover:text-white hover:bg-orange-300 duration-300 font-semibold left-[120px] md:left-20 lg:left-36 rounded-full mx-auto absolute bottom-10">Women</button>
            </div>
            

<div className="md:flex md:flex-col gap-y-5 space-y-4 md:space-y-0">
      <div className="md:flex gap-5 space-y-4 md:space-y-0">

      <div className="overflow-hidden relative lg:h-[220px] lg:w-[270px] md:h-[170px] md:w-[210px] h-[250px] w-[90vw] mx-auto md:mx-0">
        <div className="absolute inset-0  cursor-pointer  transition-transform duration-300 hover:scale-110" >
          <img src={footwear} alt="" /> 
        
            </div>
            <button className="bg-white py-2 px-6 hover:text-white hover:border-orange-300 hover:bg-orange-300 duration-300 font-semibold left-[120px] md:left-[44px] lg:left-[70px] rounded-full mx-auto absolute bottom-10">FootWear</button>
            </div>

            <div className="overflow-hidden relative lg:h-[220px] lg:w-[270px] md:h-[170px] md:w-[210px] h-[250px] w-[90vw] mx-auto md:mx-0">
        <div className="absolute inset-0  cursor-pointer transition-transform duration-300 hover:scale-110" >
           <img src={watch2} alt="" />

            </div>
            <button className="bg-white py-2 px-6 hover:text-white hover:border-orange-300 hover:bg-orange-300 duration-300 font-semibold left-[120px] md:left-[44px] lg:left-[70px] rounded-full mx-auto absolute bottom-10">Watches</button>
            </div>

      </div>

      <div className="overflow-hidden relative lg:h-[370px] lg:w-[560px] md:h-[240px] md:w-[440px] h-[250px] w-[90vw] mx-auto md:mx-0">
        <div className="absolute inset-0  cursor-pointer transition-transform duration-300 hover:scale-110" >
           <img src={accss} alt="" />

            </div>
            <button className="bg-white py-2 px-6 hover:text-white hover:border-orange-300 hover:bg-orange-300 duration-300 font-semibold  left-[120px] md:left-[160px] lg:left-[200px] rounded-full mx-auto absolute bottom-[35px] md:bottom-10">Accessories</button>
            </div>


            

    </div>
    </div>
  )
}

export default Products
