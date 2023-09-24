import React from 'react'
import mobile from '../assets/mobile.png'
import laptops from '../assets/laptops.jpg'

export default function PricePrediction() {
  return (
    <div className="w-full max-w-[1500px] px-5 md:px-10 mx-auto pt-10 ">
      <div className="w-full max-w-[1500px] px-5 md:px-10 mx-auto ">
        <h1 className="mt-[5vh] font-montserrat font-bold text-2xl ">
          Select Your Category
        </h1>
        <div className="mt-[10vh] px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[5vh]">
            <div className="md:max-w-[20vw]  shadow-3xl p-4 rounded-xl flex flex-col gap-[2vh] cursor-pointer hover:scale-105 transition-transform hover:bg-[#01796f]">
              <div className="w-full max-h-[25vh] flex z-10">
                <img
                  src={laptops}
                  alt=""
                  className=" object-cover rounded-xl "
                />
              </div>
              <h1 className="text-md font-montserrat font-bold">Laptops</h1>
            </div>
            <div className="md:max-w-[20vw]  shadow-3xl p-4 rounded-xl flex flex-col gap-[2vh] cursor-pointer hover:scale-105 transition-transform hover:bg-[#01796f]">
              <div className="w-full max-h-[25vh] flex z-10">
                <img
                  src={mobile}
                  alt=""
                  className=" object-cover rounded-xl "
                />
              </div>
              <h1 className="text-md font-montserrat font-bold">Mobiles</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
