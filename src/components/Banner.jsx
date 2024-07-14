import { Carousel } from "antd";
import model1 from "/images/model1.png"
import model2 from "/images/model2.png"


const Banner = () => (
  <Carousel effect="fade">
    <div>
      <div  className="h-[30vh] md:h-[85vh] px-10 lg:px-16 flex justify-between items-center relative bg-gradient-to-r from-blue-400 via-purple-300 to-blue-300">
        <div className="w-[80vw] lg:w-[60vw] xl:ps-36 -z-1">
          <p className="text-2xl italic font-mono hidden sm:block">Spring - Summer 2024</p>
          <div className="font-bold text-lg md:text-5xl lg:text-6xl mt-5 uppercase">Flash Sale of 70%</div>
          <p className="text-gray-600 mt-5 w-[40vw] hidden lg:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            voluptates minima nobis ducimus, accusamus sit. Adipisci tempore
            voluptatum, omnis corrupti molestias consequuntur possimus officiis.
            Beatae magnam doloribus sequi in dolorum.
          </p>
          <button className="rounded-3xl py-1 px-3 md:py-2 md:px-7 lg:px-8 font-semibold hover:bg-orange-300 hover:text-white hover:duration-300 hover:border-orange-300 border-2 border-black mt-3 sm:mt-7">Shop Now</button>
        </div>

        <div className="w-[40vw]">
            <img src={model1} alt="" className="h-[25vh] w-[50vw] md:h-[60vh] md:w-[80vw] lg:h-[80vh] lg:w-[100vw] xl:h-auto xl:w-auto "/>
        </div>
      </div>
    </div>
    <div>
    <div  className="h-[30vh] md:h-[85vh] px-10 lg:px-16 flex justify-between items-center relative bg-gradient-to-r from-blue-400 via-purple-300 to-blue-300">
        <div className="w-[80vw] lg:w-[60vw] xl:ps-36 -z-1">
          <p className="text-2xl italic font-mono hidden sm:block">Spring - Summer 2023</p>
          <div className="font-bold text-lg md:text-5xl lg:text-6xl mt-5 uppercase">Flash Sale of 80%</div>
          <p className="text-gray-600 mt-5 w-[40vw] hidden lg:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            voluptates minima nobis ducimus, accusamus sit. Adipisci tempore
            voluptatum, omnis corrupti molestias consequuntur possimus officiis.
            Beatae magnam doloribus sequi in dolorum.
          </p>
          <button className="rounded-3xl py-1 px-3 md:py-2 md:px-7 lg:px-8 font-semibold hover:bg-orange-300 hover:text-white hover:duration-300 hover:border-orange-300 border-2 border-black mt-3 sm:mt-7">Shop Now</button>
        </div>

        <div className="w-[40vw]">
            <img src={model2} alt="" className="h-[25vh] w-[50vw] md:h-[60vh] md:w-[80vw] lg:h-[80vh] lg:w-[100vw] xl:h-[80vh] xl:w-auto "/>
        </div>
      </div>
    </div>
  </Carousel>
);
export default Banner;
