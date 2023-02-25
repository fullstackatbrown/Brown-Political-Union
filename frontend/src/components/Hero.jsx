const Hero = () => {
  return (
    <div class="relative h-3/4 bg-cover bg-center bg-[url('/public/hero.jpeg')]">
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/70 justify-center content-center text-center md:text-left flex flex-col">
        <h2 class="text-white text-4xl font-bold px-5 md:px-80">
          Fostering ideological discourse, challenging perspectives, effecting
          personal-political growth
        </h2>
      </div>
    </div>
  );
};

export default Hero;
