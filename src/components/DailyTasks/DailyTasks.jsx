import React from "react";

export default function DailyTasks() {
  return (
    <>
      <main dir="rtl" className="main-color min-h-screen p-4">

         {/*Header  */}
        <h1 className="text-2xl ms-13 font-semibold mt-22">مهام اليوم :</h1>

        {/* Section 1 */}
        <div className="bg-white w-full max-w-[925px] mx-auto mt-8 py-4 px-6 md:px-12 rounded-3xl hover:shadow-2xl duration-300">
          <p className="font-bold text-gray-400">22 نوفمبر</p>
          <h1 className="text-color my-2 text-2xl font-bold">
            موقع تجاري
          </h1>
          <p className="text-color font-light text-xl">
            تصميم
          </p>

          <div className="w-full my-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="h-2.5 rounded-full"
              style={{ width: "90%", backgroundColor: "#2169B1" }}
            ></div>
          </div>

          <div className="flex justify-between">
            <p className="text-color">النجاح</p>
            <p className="text-color">90%</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white w-full max-w-[925px] mx-auto mt-8 px-4 py-2 rounded-2xl hover:shadow-2xl duration-300">
          <div className="flex items-center py-2">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 mt-2 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="text-color ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              تصميم الصفحة الرئيسية
            </label>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white w-full max-w-[925px] mx-auto mt-8 py-4 px-6 md:px-12 rounded-3xl hover:shadow-2xl duration-300">
          <p className="font-bold text-gray-400">22 نوفمبر</p>
          <h1 className="text-color my-2 text-2xl font-bold">
            موقع تجاري
          </h1>
          <p className="text-color font-light text-xl">
            تصميم
          </p>

          <div className="w-full my-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group overflow-hidden">
            <div
              style={{ width: "90%" }}
              className="h-2.5 rounded-full bg-[#FCA465] w-0 group-hover:w-[90%] transition-all duration-1000"
            ></div>
          </div>

          <div className="flex justify-between">
            <p className="text-color">النجاح</p>
            <p className="text-color">90%</p>
          </div>
        </div>
      </main>
    </>
  );
}
