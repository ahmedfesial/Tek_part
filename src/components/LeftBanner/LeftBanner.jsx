import './LeftBanner.css/'
import { IoNotificationsOutline } from "react-icons/io5";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ProfilePhoto from '../../assets/photos/UserPhoto.jpg'
import { ar } from "date-fns/locale";
import { useState } from "react";
// react-day-picker
// date-fns
const LeftBanner = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className="LeftBanner">
      {/* بيانات المستخدم */}
      <div className="user pt-4">
        <div className="userData flex justify-between items-center">
          <IoNotificationsOutline className="text-yellow-400 w-6 h-6" />
          <div className="content text-right mr-2">
            <h3 className="font-bold" dir="rtl">
              م/ ريم
            </h3>
            <p className="text-sm text-gray-950">UI / UX Designer</p>
          </div>
          <div className="avatar">
            <img src={ProfilePhoto} alt="user img"
            />
          </div>
        </div>
      </div>
      {/* كرت الترحيب */}
      <div className="welcomeCard bg-[#ACD1F536] mb-6">
        {/* <img src={ProfilePhoto} alt="welcome" className="mx-auto" /> */}
        <p style={{ color: "#27104E" }} className=" text-[22px]" dir="rtl">
          نحن في شركه تك بارت ندعمك ونتمنى لك يوم سعيد
        </p>
        <p
          style={{ color: "#27104E", fontWeight: "300", marginTop: "10px" }}
          className="text-[16px]"
          dir="rtl"
        >
          افحص قائمة المهام لديك، اسحب لتحديد نسبة النجاح ثم اضغط انتهاء فور
          انتهائك من المهمة.{" "}
        </p>
      </div>

      {/* تقويم ديناميكي */}
      <div style={{padding: "20px", borderRadius: "20px"}} className=" bg-[#F5F5F5]">
         <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        locale={ar}
        weekStartsOn={6} // السبت هو أول يوم في الأسبوع
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
  );
};

export default LeftBanner;