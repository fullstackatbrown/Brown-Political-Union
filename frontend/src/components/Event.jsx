const Event = ({ image, virtual, title, description, where, when }) => {
  return (
    <div class="flex flex-col md:flex-row mb-12">
      <div class="flex mr-16 justify-center align-center w-full md:w-auto">
        <img class="object-cover md:h-96 w-full md:w-96 rounded-md" src={image} />
      </div>
      <div class="flex flex-col my-4 md:my-10 w-full justify-center">
        <p class="text-slate-600">{virtual ? "Virtual" : "In-Person"}</p>
        <h3 class="font-bold text-3xl mb-4">{title}</h3>
        <p>{description}</p>
        <div class="mt-8">
          <p>
            <span class="font-bold">Where: </span>
            {virtual ? (
              <a class="text-cyan-600 hover:text-blue-800" href={where}>
                Link
              </a>
            ) : (
              where
            )}
          </p>
          <p>
            <span class="font-bold">When: </span>
            {when}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
