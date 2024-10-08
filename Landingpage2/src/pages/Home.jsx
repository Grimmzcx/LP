import React from "react"
import jjmf1 from "../assets/img/jjmf1.jpg"
import jjmf2 from "../assets/img/jjmf2.jpg"
import a1 from "../assets/img/a1.jpg"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
        <section  id="1" style={{ backgroundImage: `url(${a1})` }} className= "py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-screen px-4">
            <div data-aos="fade-up" className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-7xl font-bold text-black mb-4">Welcome</h1>
              <p className="text-lg text-gray-600 mb-6">
                Basta <span className="font-bold text-black">Best Quality</span> at <span className="font-bold text-black">Best brand</span> JJM na yan.
                </p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="flex right-content space-x-4">
                <img src={jjmf1} alt="" data-aos="fade-up" className="w-64 h-auto shadow-lg rounded-md"/>
                <img src={jjmf2} alt="" data-aos="fade-up" className="w-64 h-auto shadow-lg rounded-md"/>
              </div>
            </div>
          </div>
        </section>

        <section id='2' className="flex flex-col items-center justify-center h-screen py-10 bg-gray-100 shadow-black">
            <h2 className="text-4xl font-bold text-black mb-8">
                Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Liquid</h5>
                        </a>
                        <div className="flex items-center justify-between my-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₱28</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/docs/images/products/lemon-dishwashing.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Lemon Dishwashing Liquid</h5>
                        </a>       
                        <div className="flex items-center justify-between my-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₱25</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Buy Now</a>
                        </div>
                    </div>
                </div>


                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Antibac Fabric Conditioner</h5>
                        </a>
                        <div className="flex items-center justify-between my-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₱35</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>


                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/docs/images/products/calamansi-dishwashing.png" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">JJM Calamansi Dishwashing Paste</h5>
                        </a>
                        <div className="flex items-center justify-between my-5">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₱55</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
       
        </>
    )
}
export default Home