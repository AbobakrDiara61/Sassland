import React from "react";
import avatar00 from "../assets/avatar00.png"
import avatar01 from "../assets/avatar01.png"
import avatar02 from "../assets/avatar02.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/* const imgs = [
    {path: "avatar00.png", id: 100},
    {path: "avatar01.png", id: 101},
    {path: "avatar02.png", id: 102}
] */
const imgs = [
    {path: avatar00, id: 100},
    {path: avatar01, id: 101},
    {path: avatar02, id: 102}
]
const bannerImg = "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&h=600&q=80";
const Hero = () => {
    return (
        <section id="home" className="bg-main-gradient">
            <div className="main-container section-container flex flex-col gap-20">
                <div className="text-center">
                    {/* <p className="inline-block text-saas text-sm font-bold rounded-3xl py-2 px-3 ring-1 ring-saas bg-saas/10">Introducing Sassland 2.0</p> */}
                    <p className="inline-block text-saas text-sm font-bold rounded-3xl py-2 px-3 border border-saas/20 bg-saas/10">Introducing Sassland 2.0</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold my-5">
                        Transform Your Business With <br /> 
                        Our <span className="text-gradient bg-gradient-to-r">SaaS Solution</span>
                    </h1>
                    <h4 className="text-xl md:text-2xl text-gray-300 my-5 max-w-3xl mx-auto">
                        Streamline your operations, boost productivity, 
                        and enhance customer satisfaction with our 
                        cutting-edge SaaS platform. Experience seamless 
                        integration and unparalleled support.
                    </h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="main-btn">Get Started Free <FontAwesomeIcon icon={faArrowRight} className="block ml-2 w-fit"/> </button>
                        <button className="secondary-btn">Book Demo</button>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="flex items-center justify-center">
                            {imgs.map(({path, id}, index) => 
                                <img 
                                    src={path} 
                                    alt={`User-${index + 1}`} 
                                    key={id} 
                                    className="w-10 h-10 ring-1 ring-saas rounded-full -ml-2"
                                />
                            )}
                        </div>
                        <p className="text-sm text-gray-300"><span className="text-saas font-medium">500+</span> businesses already using our platform</p>
                    </div>
                </div>
                <div className="relative w-full p-2 rounded-xl border border-saas/50 bg-darkGray shadow-saas/20 transition-all duration-500 hover:scale-105 hover:shadow-md ">
                    <img src={bannerImg} alt="mobile banner" className="w-full object-covers rounded-xl" />
                    <p className="text-sm text-white font-medium bg-saas/80 rounded-lg px-3 py-2 absolute bottom-4 left-4">Modern Dashboard Interface</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
