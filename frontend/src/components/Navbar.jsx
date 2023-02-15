const Navbar = () => {
    return (
        <section class="h-32 bg-[#650202]">
            <div class="flex justify-start text-5xl text-white font-bold inline-block pl-10 pt-8">
                BPU
            </div>

            <div className="flex justify-end pr-10">
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    About Us
                </div>
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    Events
                </div>
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    Constitution
                </div>
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    Parties
                </div>
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    Leadership
                </div>
                <div className="text-2xl text-white font-bold inline-block pl-10">
                    Contact
                </div>
            </div>
        </section>
    );
}

export default Navbar;