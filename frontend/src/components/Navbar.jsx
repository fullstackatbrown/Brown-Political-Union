const Navbar = () => {
    return (
        <section className="h-32 bg-custom_brown">
            <div className="float-left text-5xl text-white font-bold inline-block pl-10 pt-8">
                BPU
            </div>

            <div className="float-right pt-10 pr-10">
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
