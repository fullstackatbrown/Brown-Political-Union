const buttons = [
  { name: "About Us", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Constitution", link: "/constitution" },
  { name: "Parties", link: "/parties" },
  { name: "Leadership", link: "/leadership" },
  { name: "Contact", link: "/contact" },
];

const NavbarButton = ({ name, link }) => {
  return (
    <a class="text-lg text-white font-bold" href={link}>
      {name}
    </a>
  );
};

const Navbar = () => {
  return (
    <section class="md:fixed flex w-full bg-[#650202] justify-between items-center flex-wrap top-0 px-5 md:px-20 py-3 z-50 drop-shadow-lg">
      <a class="text-3xl md:text-5xl text-white font-bold" href="/">
        BPU
      </a>
      <div class="flex flex-wrap gap-8 mt-5 md:mt-0">
        {buttons.map(({ name, link }, i) => (
          <NavbarButton name={name} link={link} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Navbar;
