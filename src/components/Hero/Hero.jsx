import { useState } from "react";
import food1 from "../../assets/biryani2.png";
import food2 from "../../assets/biryani3.png";
import food3 from "../../assets/biryani5.png";
import bgImg from "../../assets/vector3.png";

const ImageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundposition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(food1);
  return (
    <div
      style={bgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white
    duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content sction */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4
            pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Foodie
              </span>{" "}
              Zone
            </h1>
            <p className="text-sm p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ad a possimus vitae praesentium! Doloribus ea nulla architecto
              laboriosam? Eum?
            </p>
            <div>
              <button
                className="bg-gradient-to-r from-primary
               to-secondary text-white px-4 py-2 
               rounded-full hover:scale-105 duration-200"
              >
                Order Now
              </button>
            </div>
          </div>
          {/* Image sction */}
          <div className="order-1 sm:order-2 min-h-[450px] flex justify-center items-center relative">
            {/* main image section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden"
            >
              <img
                src={imageId}
                alt=""
                className="w-[300px] sm:w-[450px] mx-auto animate-spin-slow"
              />
            </div>
            {/*image list section */}
            <div
              className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center
                gap-4 absolute bottom-0 lg:-right-10 bg-white/30 rounded-full"
            >
              {ImageList.map((item) => {
                return (
                  <img
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-contain inline-block
                                hover:scale-105 duration-200 cursor-pointer"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? food1 : item.id === 2 ? food2 : food3
                      );
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
