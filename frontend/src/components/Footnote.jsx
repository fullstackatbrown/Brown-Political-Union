import { SocialIcon } from 'react-social-icons';

const Footnote = () => {
    return (
      <section className="h-72 bg-gray-200">
        <div className="float-left inline-block pl-10 pt-12">
          <div className="flex items-center space-x-3">
            <a
              className="w-12 text-3xl md:text-5xl text-white font-bold"
              href="/"
            >
              <img
                src={require("../data/BPU Logo Official Brown.png")}
                alt={"BPU"}
              />
            </a>
            <div className="text-5xl text-[#650202] font-bold">BPU</div>
          </div>
          <div className="h-5"></div>
          <div className="text-l text-[#650202]">
            The Brown Political Union is a nonpartisan student-run organization
          </div>
          <div className="text-l text-[#650202]">
            dedicated to providing a forum for respectful political.
          </div>
          <div className="text-l text-[#650202]">discourse on campus.</div>
          <div className="mt-6">
            <div className="float-left">
              <SocialIcon url="https://facebook.com" fgColor="white" />
            </div>
            <div className="ml-4 float-left">
              <SocialIcon url="https://instagram.com" fgColor="white" />
            </div>
          </div>
        </div>

        <div className="float-right grid grid-rows-2 grid-flow-col gap-6 pt-12 pr-20">
          <div className="text-2xl text-[#650202] font-bold inline-block">
            About Us
          </div>
          <div className="text-2xl text-[#650202] font-bold inline-block">
            Events
          </div>
          <div className="text-2xl text-[#650202] font-bold inline-block">
            Constitution
          </div>
          <div className="text-2xl text-[#650202] font-bold inline-block">
            Parties
          </div>
          <div className="text-2xl text-[#650202] font-bold inline-block">
            Leadership
          </div>
          <div className="text-2xl text-[#650202] font-bold inline-block">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSC_VzIloUZ37vlAICG21CtEdShoidBJuHIbnGSh-PIBNzbA/viewform">Contact</a>
          </div>
        </div>
      </section>
    );
}

export default Footnote;

