import { format } from "date-fns";

const ScrollEvent = ({ image, virtual, title, description, where, registration, when}) => {
  return (
    <div
      className="p-10 w-full h-full bg-black bg-opacity-60 justify-between content-center flex "
      style={{ minWidth: "97%" }}
    >
      <div className="flex flex-col justify-between text-white gap-5 py-5">
        <p className="uppercase">
          {format(when.toDate(), "h:mm a, E MMM d, yyyy")}{" "}
        </p>
        <h1 className="text-3xl"> {title} </h1>
        <div className="mb-3 flex-grow" style={{maxWidth: "70%"}}>{description}</div>
        <p>
          <span className="uppercase">Where: </span>
          {virtual ? (
            <a className="underline hover:text-blue-800" href={where}>
              Link
            </a>
          ) : (
            where
          )}
        </p>
        <a
          href={registration}
          style={{ display: registration ? "flex" : "none" }}
        >
          <button className="bg-[#FFD324] text-black uppercase p-2"> Register</button>
        </a>
      </div>
      <img
        className="object-cover rounded-t-md"
        style={{ width: "300px", height: "350px" }}
        src={image}
        alt=""
      />
    </div>
  );
};

export default ScrollEvent;
