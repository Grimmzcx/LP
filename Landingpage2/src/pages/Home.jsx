import React from "react";
import jjmf1 from "../assets/img/jjmf1.jpg";
import jjmf2 from "../assets/img/jjmf2.jpg";
import a1 from "../assets/img/a1.jpg";
import Footer from "../components/Footer";
import calamansi from '../assets/img/calamansi.jpg';
import conditioner from '../assets/img/conditioner.jpg';
import limon from '../assets/img/limon.jpg';
import paste from '../assets/img/paste.jpg';
import gg from '../assets/img/gg.jpg';

function Home(){
    return (
        <>
            <section
                id="1"
                style={{
                    backgroundImage: `url(${a1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                }} className="py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 overflow-y-auto h-[80vh]">
                        <h1 className="text-7xl font-bold text-black mb-4">Welcome</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Basta <span className="font-bold text-black">Best Quality</span> at <span className="font-bold text-black">Best brand</span> JJM na yan.
                        </p>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        
                        <p className="text-lg text-gray-600 mb-6">
                            Morbi id justo eu eros auctor varius. Suspendisse potenti. Quisque dictum vel purus eu condimentum. In dictum arcu eget elit malesuada, ac fermentum leo gravida. Fusce et justo scelerisque, sodales dui eu, efficitur leo.
                        </p>
                        
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="flex right-content space-x-4">
                            <img src={jjmf1} alt="JJM Product 1" data-aos="fade-up" className="w-64 h-auto shadow-lg rounded-md" />
                            <img src={jjmf2} alt="JJM Product 2" data-aos="fade-down" className="w-64 h-auto shadow-lg rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id='2' className="py-20 h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
                <h2 className="mt-4 text-lg text-black">Basta Best Buy at Best Quality JJM nayan!</h2>
                <p className="text-lg text-gray-700">
                We take pride in our state-of-the-art manufacturing processes, which prioritize sustainability and quality at every step.
                By using biodegradable ingredients, recyclable packaging, and reducing waste, we are working towards a cleaner, greener future.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                <div className="text-center">
                    <img src="your-image-url-1" alt="Premium CBD Hemp Seeds" className="w-full h-56 object-cover mb-4 rounded-lg" />
                    <h3 className="text-2xl font-semibold mb-2">Premium CBD Hemp Seeds</h3>
                    <p className="text-gray-600">
                    Blue Forest Farms has the best CBD hemp seed genetics on the market. Buy your hemp seeds now!
                    </p>
                </div>

                <div className="text-center">
                    <img src="your-image-url-2" alt="High CBD Hemp Flower" className="w-full h-56 object-cover mb-4 rounded-lg" />
                    <h3 className="text-2xl font-semibold mb-2">High CBD Hemp Flower</h3>
                    <p className="text-gray-600">
                    High CBD, smokable hemp flower is federally legal and provides an enjoyable way to experience the benefits of CBD.
                    </p>
                </div>

                <div className="text-center">
                    <img src="your-image-url-3" alt="Partner With Us" className="w-full h-56 object-cover mb-4 rounded-lg" />
                    <h3 className="text-2xl font-semibold mb-2">Partner With Us</h3>
                    <p className="text-gray-600">
                    Are you looking to carry our CBD line in your store, or do you have an audience you want to sell to?
                    </p>
                </div>

                </div>
            </div>
            </section>

            <section id='3' className="flex flex-col items-center justify-center py-16 h-screen bg-gray-100 shadow-md">
                <h2 className="text-4xl font-bold text-black mb-8" data-aos="fade-up">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right">
                        <a href="#">
                            <div className="flex justify-center">
                                <img className="p-8 rounded-t-lg w-48" src={calamansi} alt="Calamansi Dishwashing Liquid" />
                            </div>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Liquid</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱28</span>
                                <a href="#" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 ">Add to cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-left">
                        <a href="#">
                            <div className="flex justify-center">
                                <img className="p-8 rounded-t-lg w-48" src={limon} alt="Lemon Dishwashing Liquid" />
                            </div>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Lemon Dishwashing Liquid</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱25</span>
                                <a href="#" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 ">Add to cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right">
                        <a href="#">
                            <div className="flex justify-center">
                                <img className="p-8 rounded-t-lg w-48" src={conditioner} alt="Antibac Fabric Conditioner" />
                            </div>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Antibac Fabric Conditioner</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱35</span>
                                <a href="#" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 ">Add to cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-left">
                        <a href="#">
                            <div className="flex justify-center">
                                <img className="p-8 rounded-t-lg w-48" src={paste} alt="Calamansi Dishwashing Paste" />
                            </div>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Paste</h5>
                            </a>
                            <div className="flex items-center justify-between my-5">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">₱55</span>
                                <a href="#" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 ">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section 
            id="4" 
            style={{
                backgroundImage: `url(${gg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }} className="relative py-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto px-4 space-y-10 md:space-y-0 md:space-x-20" data-aos="fade-up" >           

                <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <div className="w-full  text-black">
                        <h2 className="text-3xl  md:text-4xl font-bold mb-4">Contact Us</h2>
                        <ul className="space-y-2">
                            <li>📍 Bulacan, Philippines · San Jose del Monte, Philippines</li>
                            <li>✉️ negosyongpaunlad@gmail.com</li>
                        </ul>
                        </div>
                </div>
                <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us A Message</h2>
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="firstNameMsg" className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstNameMsg"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"
                                    required
                                />
                            </div>     
                        </div>

                        <div>
                            <label htmlFor="emailMsg" className="block text-gray-700">Email</label>
                            <input type="email" id="emailMsg" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]" placeholder="Enter your email" required/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]" placeholder="Enter your message" required/>
                        </div>

                        <div>
                            <button type="submit"className="bg-[#1E3740] text-white px-6 py-2 rounded-lg hover:bg-[#0d1e23] transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

            <Footer />
        </>
    );
}

export default Home;
