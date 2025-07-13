import React from "react";
import ProfilePhoto from "../../assets/photos/Profile.jpg";

export default function Settings() {
  return (
    <>
      {/* Settings */}
      <main
        dir="rtl"
        className="main-color min-h-screen flex justify-center items-start p-4"
      >
        <div className="w-full">
          {/*Profile Photo*/}
          <div className="flex justify-center mt-10">
            <div className="w-[120px] h-[120px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
              <img
                src={ProfilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-color text-center mt-4 text-xl md:text-2xl">
            Ahmed Faisal
          </h1>

          {/* career */}
          <h2 className="text-center mt-1 text-gray-400 text-sm md:text-base">
            Front-End Developer
          </h2>

          {/* Email */}
          <div className="mt-8 px-4">
            <h1 className="text-color mb-2 text-sm md:text-base">
              البريد الإلكترونى :
            </h1>
            <input
              type="email"
              placeholder="ahmedfesial150@gmail.com"
              className="bg-white w-full p-3 rounded-2xl hover:shadow-2xl duration-300"
            />
          </div>

          {/* Password */}
          <div className="mt-6 px-4">
            <h1 className="text-color mb-2 text-sm md:text-base">
              كلمة المرور :
            </h1>
            <input
              type="password"
              placeholder="ادخل كلمة المرور"
              className="bg-white w-full p-3 rounded-2xl hover:shadow-2xl duration-300"
            />
          </div>

          {/* Language */}
          <div className="mt-6 px-4 mb-10">
            <h1 className="text-color mb-2 text-sm md:text-base">اللغة :</h1>
            <input
              type="text"
              placeholder="العربية"
              className="bg-white w-full p-3 rounded-2xl hover:shadow-2xl duration-300"
            />
          </div>
        </div>
      </main>
    </>
  );
}
