import './LeftBanner.css/';
import { IoNotificationsOutline } from "react-icons/io5";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ProfilePhoto from '../../assets/photos/Profile.jpg';
import { ar } from "date-fns/locale";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const LeftBanner = () => {
  const [selected, setSelected] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 cursor-pointer bg-blue-600 text-white p-2 rounded-full shadow-lg"
      >
        <FiMenu size={24} />
      </button>

      {/* الـ LeftBanner */}
      <div
        className={`LeftBanner fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:static md:translate-x-0 md:w-full md:shadow-none md:block`}
      >
        {/* زرار الإغلاق في الموبايل */}
        <div className="flex justify-end md:hidden p-4 ">
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={24} className="text-gray-800 cursor-pointer" />
          </button>
        </div>

        {/* محتوى البانر */}
        <div className="w-full px-4 py-4 lg:px-6">
          {/* بيانات المستخدم */}
          <div className="user mb-6 w-[320px] hover:shadow-2xl duration-300 transition-all">
            <div className="userData flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="avatar w-12 h-12 rounded-full overflow-hidden">
                  <img src={ProfilePhoto} alt="user img" className="w-full h-full object-cover" />
                </div>
                <div className="content text-right">
                  <h3 className="font-bold text-lg">Ahmed Faisal</h3>
                  <p className="text-sm text-gray-700">Front-End Developer</p>
                </div>
              </div>
              <IoNotificationsOutline className="text-yellow-400 w-6 h-6 self-start sm:self-auto" />
            </div>
          </div>

          {/* كرت الترحيب */}
          <div className="welcomeCard bg-[#ACD1F536] p-4 rounded-2xl mb-6 text-right w-[320px] hover:shadow-2xl duration-300 transition-all">
            <p className="text-[#27104E] text-xl font-semibold" dir="rtl">
              نحن في شركه تك بارت ندعمك ونتمنى لك يوم سعيد
            </p>
            <p className="text-[#27104E] mt-2 text-sm font-light leading-6" dir="rtl">
              افحص قائمة المهام لديك، اسحب لتحديد نسبة النجاح ثم اضغط انتهاء فور انتهائك من المهمة.
            </p>
          </div>

          {/* تقويم ديناميكي */}
          <div className="bg-[#F5F5F5] p-4 rounded-2xl overflow-x-auto w-[320px] hover:shadow-2xl duration-300 transition-all">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              locale={ar}
              weekStartsOn={6}
              modifiersClassNames={{
                selected: "bg-blue-600 text-white rounded-full",
                today: "text-red-500 font-bold",
              }}
              className="text-sm rtl"
              styles={{
                caption: { direction: "rtl" },
                head_row: { direction: "rtl" },
                row: { direction: "rtl" },
                table: { width: "100%" },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBanner;
