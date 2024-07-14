const Blog = () => {
  const card = [
    {
      id: "1",
      img: "/images/blog1.webp",
      title: "Burberry Collection For Women",
      month: "By Claue on Jul 30,2021",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dicta voluptate nulla, ex quaerat corporis minima tempore hic dignissimosofficia ",
      price: "$115.00",
    },
    {
      id: "2",
      img: "/images/blog2.webp",
      title: "Paris Fashion Week For Women",
      month: "By Claue on Jul 30,2021",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dicta voluptate nulla, ex quaerat corporis minima tempore hic",
    },
    {
      id: "3",
      img: "/images/blog3.webp",
      title: "Fashion and Mental Health: Boosting Your Mood Through Dress",
      month: "By Claue on Jul 05,2021",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dicta voluptate nulla, ex quaerat corporis minima tempore hic ",
    },
  ];
  return (
    <div>
        <div className="text-center font-semibold uppercase text-3xl">LATEST FROM BLOG</div>
      <p className="italic text-gray-600 text-center font-mono">The freshest and most exciting news</p>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 lg:mx-28 gap-6 my-10 ">
        {card.map((item) => (
          <div key={item.id}>
            <div className="relative overflow-hidden h-[40vh] md:h-[20vh] lg:h-[30vh]">
              <img src={item.img} alt="" className="absolute inset-0 hover:scale-110 duration-300 transition-transform cursor-pointer" />
            </div>
            <div className="font-semibold text-xl mt-6 hover:text-orange-300 cursor-pointer">{item.title}</div>
            <div className="text-gray-700">{item.month}</div>
            <div className="text-gray-600 mt-5">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
