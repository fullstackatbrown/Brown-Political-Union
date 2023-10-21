const Event = ({ image, virtual, title, description, where, when }) => {
  return (
    <div className="flex flex-col md:flex-row mb-12 drop-shadow-lg">
      <div className="flex mr-16 justify-center align-center w-full md:w-auto">
        <img className="object-cover md:h-96 w-full md:w-96 rounded-md" src={image} />
      </div>
      <div className="flex flex-col my-4 md:my-10 w-full justify-center">
        <p className="text-slate-600">{virtual ? "Virtual" : "In-Person"}</p>
        <h3 className="font-bold text-3xl mb-4">{title}</h3>
        <p>{description}</p>
        <div className="mt-8">
          <p>
            <span className="font-bold">Where: </span>
            {virtual ? (
              <a className="text-cyan-600 hover:text-blue-800" href={where}>
                Link
              </a>
            ) : (
              where
            )}
          </p>
          <p>
            <span className="font-bold">When: </span>
            {when}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
