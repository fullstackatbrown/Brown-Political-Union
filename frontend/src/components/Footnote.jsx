import { SocialIcon } from 'react-social-icons';

const Footnote = () => {
    return (
        <section className="h-72 bg-custom_brown">
            <div className="float-left inline-block pl-10 pt-12">
                <div className="text-5xl text-white font-bold">
                    BPU
                </div>
                <div className="h-5">

                </div>
                <div className="text-l text-white">
                    The Brown Political Union is a nonpartisan student-run organization
                </div>
                <div className="text-l text-white">
                    dedicated to providing a forum for respectful political.
                </div>
                <div className="text-l text-white">
                    discourse on campus.
                </div>
                <div className="mt-6">
                    <div className="float-left">
                        <SocialIcon url="https://facebook.com" fgColor="white" />
                    </div>
                    <div className="ml-4 float-left">
                        <SocialIcon url="https://instagram.com" fgColor="white"/>
                    </div>
                </div>
            </div>

            <div className="float-right grid grid-rows-2 grid-flow-col gap-6 pt-12 pr-20">
                <div className="text-2xl text-white font-bold inline-block">
                    About Us
                </div>
                <div className="text-2xl text-white font-bold inline-block">
                    Events
                </div>
                <div className="text-2xl text-white font-bold inline-block">
                    Constitution
                </div>
                <div className="text-2xl text-white font-bold inline-block">
                    Parties
                </div>
                <div className="text-2xl text-white font-bold inline-block">
                    Leadership
                </div>
                <div className="text-2xl text-white font-bold inline-block">
                    Contact
                </div>
            </div>
        </section>
    );
}

export default Footnote;

