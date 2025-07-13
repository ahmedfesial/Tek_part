import React from "react";
import ProfilePhoto from "../../assets/photos/Profile.jpg";

export default function Profile() {
  return (
    <>
      <main dir="rtl" className="main-color min-h-screen p-4">
        {/*Profile Photo  */}
        <div className="flex justify-center mt-15">
          <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-color text-center mt-1 text-xl sm:text-2xl">
         Ahmed Faisal
        </h1>

        {/* career */}
        <h2 className="text-center mt-1 text-gray-400 text-sm sm:text-base">
          Front-End Developer
        </h2>

        {/* Cards */}
        <div className="mt-15 flex flex-wrap justify-around gap-4">
          {/*Card 1 */}
          <div className="bg-[#DDACF545] py-4 px-8 text-center rounded-2xl hover:shadow-2xl w-full sm:w-[45%] lg:w-[22%]">
            <div className=" bg-[#DDACF566] p-2 rounded-full w-[70px] h-[70px] flex justify-center items-center ms-10">
              <i className="fa-solid fa-clipboard-list text-4xl text-white"></i>
            </div>
            <h1 className="text-color ">المهام اليومية</h1>
            <h2 className="text-gray-400">200</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ACD1F529] py-4 px-8 text-center rounded-2xl hover:shadow-2xl duration-300 w-full sm:w-[45%] lg:w-[22%]">
            <div className=" bg-[#ACD1F557] p-2 rounded-full w-[70px] h-[70px] flex justify-center items-center ms-10">
              <i className="fa-solid fa-layer-group text-4xl text-white"></i>
            </div>
            <h1 className="text-color ">المهام اليومية</h1>
            <h2 className="text-gray-400">2000</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FDD3B469] py-4 px-8 text-center rounded-2xl hover:shadow-2xl duration-300 w-full sm:w-[45%] lg:w-[22%]">
            <div className=" bg-[#FDD3B482] p-2 rounded-full w-[70px] h-[70px] flex justify-center items-center ms-10">
              <i className="fa-solid fa-list-check text-4xl text-white"></i>
            </div>
            <h1 className="text-color my-2">المهام اليومية</h1>
            <h2 className="text-gray-400">50</h2>
          </div>

          {/* Card 4 */}
          <div className="bg-[#8DCD753B] py-4 px-8 text-center rounded-2xl hover:shadow-2xl duration-300 w-full sm:w-[45%] lg:w-[22%]">
            <div className=" bg-[#73C25533] p-2 rounded-full w-[70px] h-[70px] flex justify-center items-center ms-10">
              <i className="fa-solid fa-clipboard-list text-4xl text-white"></i>
            </div>
            <h1 className="text-color my-2">المهام اليومية</h1>
            <h2 className="text-gray-400">50</h2>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-15">
          <h1 className="text-color ms-14">مهاراتك :</h1>

          <div className="flex flex-wrap justify-around mt-4 gap-4">
            <div className="bg-[#ACD1F536] py-2 px-10 rounded-2xl hover:shadow-2xl duration-300">
              <h1>UI Designer</h1>
            </div>

            <div className="bg-[#9854CB1A] py-2 px-10 rounded-2xl hover:shadow-2xl duration-300">
              <h1>UX Designer</h1>
            </div>

            <div className="bg-[#DCECDB] py-2 px-10 rounded-2xl hover:shadow-2xl duration-300">
              <h1>Wireframe</h1>
            </div>

            <div className="bg-[#F7E7DD] py-2 px-10 rounded-2xl hover:shadow-2xl duration-300">
              <h1>Prototype</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
