const Footnote = () => {
  return (
    <section class="flex flex-col lg:flex-row justify-between items-center bg-[#650202] px-5 lg:px-20 py-8">
      <div>
        <div class="text-5xl text-white font-bold">BPU</div>
        <div class="h-5"></div>
        <div class="text-l text-white">
          The Brown Political Union is a nonpartisan student-run organization
        </div>
        <div class="text-l text-white">
          dedicated to providing a forum for respectful political.
        </div>
        <div class="text-l text-white">discourse on campus.</div>
      </div>

      <div class="hidden lg:grid grid-rows-2 grid-flow-col gap-10 mt-8 lg:mt-0">
        <div class="text-xl text-white font-bold inline-block">About Us</div>
        <div class="text-xl text-white font-bold inline-block">Events</div>
        <div class="text-xl text-white font-bold inline-block">
          Constitution
        </div>
        <div class="text-xl text-white font-bold inline-block">Parties</div>
        <div class="text-xl text-white font-bold inline-block">Leadership</div>
        <div class="text-xl text-white font-bold inline-block">Contact</div>
      </div>
    </section>
  );
};

export default Footnote;
