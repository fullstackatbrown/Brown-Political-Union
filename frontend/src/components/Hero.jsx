import { useState } from "react";

const Hero = () => {
  const images = ["hero.jpeg", "hero2.jpg", "hero3.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1) % images.length);
  };
  return (
    <div className="relative h-3/4 md:h-screen bg-cover bg-fixed bg-auto md:bg-cover">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  bg-fixed justify-center content-center flex flex-col">
        <div
          className="flex h-full transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/70 justify-center content-center text-center md:text-left flex flex-col">
        <h2 className="text-[#FFFFFF] text-4xl 40px lg:px-80">
          Fostering ideological discourse, challenging perspectives, effecting
          personal-political growth
        </h2>
      </div>
      <div className="absolute flex top-0 right-0 w-full h-full justify-center">
        <div className="flex w-full justify-between mb-0">
          <button
            onClick={prevSlide}
            className="text-[#FFFFFF] text-3xl font-bold py-2 px-4 rounded focus:outline-none"
            style={{ visibility: currentSlide === 0 ? "hidden" : "visible" }}
          >
            {"〈"}
          </button>
          <button
            onClick={nextSlide}
            className="text-[#FFFFFF] text-3xl font-bold py-2 px-4 rounded focus:outline-none"
            style={{ visibility: currentSlide === images.length - 1 ? "hidden" : "visible" }}
          >
            {"〉"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
