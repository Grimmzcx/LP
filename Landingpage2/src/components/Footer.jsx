import React from "react";

function Footer(){
    return(
        <>
        <footer>
        <section id='3' className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
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

            <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <ul className="space-y-2">
                <li>📍 Bulacan, Philippines · San Jose del Monte, Philippines</li>
                <li>✉️ negosyongpaunlad@gmail.com</li>
            </ul>
            </div>
            
            <div>
            <img src="" className='h-52' alt="" />
            </div>
        </section>
        </footer>
        </>
    )
}
export default Footer;