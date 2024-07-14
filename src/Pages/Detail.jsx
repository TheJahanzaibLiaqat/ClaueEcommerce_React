import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Detail = () => {
  const description = useSelector((state) => state.users);
  return (
    <div>
      <div>
        {description.map((value) => (
          <div key={value.id} className="flex justify-evenly mt-5">
            <div>
              <img src={value.img} alt="" className="w-[50vw] h-[90vh]" />
            </div>
            <div className="w-[40vw]">
            <div className="text-4xl font-semibold">{value.description}</div>

         
         <div className="text-gray-500 text-sm font-semibold hover:text-orange-300 hover:underline cursor-pointer mt-2 group/it">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              quo. Qui obcaecati dignissimos deserunt veniam nulla alias nemo
              eum sit minus nihil, odit aspernatur iusto iure, dicta ea sapiente
              voluptates, atque assumenda pariatur odio labore dolore! Eos
              sapiente debitis dolores eligendi ab, doloribus possimus
              blanditiis repudiandae distinctio accusamus eaque, laboriosam
              totam non repellat accusantium aliquid impedit omnis maxime.
              Impedit cumque omnis consectetur iure, possimus vero facilis ullam
              nostrum perferendis tempore delectus hic aspernatur autem a
              inventore illo quasi laudantium quidem laboriosam sit eum
              reprehenderit voluptas dolores? Suscipit atque odio eligendi ipsum
              magni dolores debitis similique cum, est voluptatum cumque culpa
              consequuntur architecto eos. Dignissimos esse id aliquam animi
              libero dolorem eaque, vero repellat voluptatibus sint, asperiores
              quod est unde explicabo ipsum quas repellendus nostrum inventore
              obcaecati, a facere quis ratione quae in. Voluptatibus adipisci
              quae inventore iure quam atque officia optio laborum id doloremque
              enim sapiente nihil consequuntur, ad odit dolores accusantium
              neque modi fugiat? Sapiente cumque fugit odio nemo dolorum
              architecto impedit quas.
            </div>
            <div className="text-lg text-red-600 font-semibold mt-4 mb-10">
             $ {value.price} .00
            </div>
            <Link to="/" className="bg-orange-500 py-2 px-6 text-white rounded-lg">Return</Link>
         </div>
         </div>
         
        ))}
      </div>
    </div>
  );
};

export default Detail;
