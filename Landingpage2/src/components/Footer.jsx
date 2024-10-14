import React from "react";


function Footer(){
    return(
        <>
        <footer id="5"className="bg-emerald-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                <h1 className="text-green-600 text-2xl font-bold ">JJM</h1>
                <p className="text-black text-sm ">Soap and Detergents Manufacturing</p>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">HR</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">Canadian Customs Clearance</a></li>

                    </ul>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">Logistics</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">US Customs Clearance</a></li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">Finance</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">Blog</a></li>

                    </ul>
                </div>
                </div>
            </div>
        </footer>

        </>
    )
}
export default Footer;