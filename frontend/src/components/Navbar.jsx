const buttons = [
  { name: "About Us", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Constitution", link: "/constitution" },
  { name: "Parties", link: "/parties" },
  { name: "Leadership", link: "/leadership" },
  { name: "Contact", link: "/contact" },
  { name: "Login", link: "/admin" }
];

const NavbarButton = ({ name, link }) => {
  return (
    <a className="text-lg text-[#650202] font-bold" href={link}>
      {name}
    </a>
  );
};

const Navbar = () => {
  return (
    <section className="md:fixed flex w-full bg-gray-200 justify-between items-center flex-wrap top-0 px-5 md:px-20 py-3 z-50 drop-shadow-lg">
      <a className="w-10 text-3xl md:text-5xl text-white font-bold" href="/">
          <img src={require("../data/BPU Logo Official Brown.png")} alt={"BPU"} />
      </a>
      <div className="flex flex-wrap gap-8 mt-5 md:mt-0">
        {buttons.map(({ name, link }, i) => (
          <NavbarButton name={name} link={link} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Navbar;
