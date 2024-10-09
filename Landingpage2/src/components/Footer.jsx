import React from "react";

function Footer(){
    return(
        <>
        <footer>
        <section id='3' className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-1">
                <h1 className="text-2xl font-bold text-green-300">JJM</h1>
                <p className="text-sm text-green-500">Soap and Detergent Manufacturing</p>
                <h2 className="mt-4 text-lg">
                Basta Best Buy at Best Quality JJM nayan!
                </h2>
                <p className="mt-4">
                We take pride in our state-of-the-art manufacturing processes, which prioritize sustainability and quality at every step. 
                By using biodegradable ingredients, recyclable packaging, and reducing waste, we are working towards a cleaner, greener future.
                </p>
            </div>

            <div className="lg:col-span-1 text-white">
                <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                <ul className="space-y-2">
                <li>📍 Bulacan, Philippines · San Jose del Monte, Philippines</li>
                <li>✉️ negosyongpaunlad@gmail.com</li>
                </ul>
            </div>

            <div className="lg:col-span-1">
                <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-white">Your Email</label>
                    <input
                    type="email"
                    id="email"
                    className="w-full lg:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"
                    placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-white">Your Message</label>
                    <textarea
                    id="message"
                    rows="4"
                    className="w-full lg:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3740]"
                    placeholder="Enter your message"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-[#1E3740] text-white px-6 py-2 rounded-lg hover:bg-[#0d1e23] transition duration-300"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </section>
        </footer>
        </>
    )
}
export default Footer;