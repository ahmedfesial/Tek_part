import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineChartCard from "../LineChartCard/LineChartCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import PieChartCard from "../PieChartCard/PieChartCard";
import {
  faCoins,
  faFolderOpen,
  faMoneyBillAlt,
  faClock,
  faCalendarAlt,
  faTasks,
  faPlus, // Kept for other components if needed, but removed from ProgressCard
  faTimes, // Kept for other components if needed, but removed from ProgressCard
  faEllipsisH,
  faChartBar, // For the chart icon in LineChartCard header
  faCalendarDays, // For the calendar icon in LineChartCard header
  faCheckCircle, // For the "on the right track" checkmark
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { library } from "@fortawesome/fontawesome-svg-core";
import IntroImg from "../../assets/photos/Register.png"; // Make sure the path is correct
import { Link } from "react-router-dom";

library.add(
  faCoins,
  faFolderOpen,
  faMoneyBillAlt,
  faClock,
  faCalendarAlt,
  faTasks,
  faPlus,
  faTimes,
  faEllipsisH,
  faChartBar,
  faCalendarDays,
  faCheckCircle
);
const StatCard = ({
  label,
  value,
  icon,
  iconBg,
  valueColor = "text-gray-900",
}) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg flex items-center flex-row-reverse justify-end gap-4 text-right w-full overflow-hidden">
    <div className="flex-1 min-w-0">
      <p className="text-sm text-gray-500 mb-1 truncate">{label}</p>
      <h2 className={`text-2xl sm:text-3xl font-bold break-words ${valueColor}`}>
        {value}
      </h2>
    </div>
    <div className={`p-3 rounded-full shrink-0 ${iconBg}`}>{icon}</div>
  </div>
);

const TaskItem = ({ text, completed }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={completed}
        readOnly
        className="form-checkbox h-5 w-5 text-[#4C64D5] rounded-md border-gray-300 focus:ring-[#4C64D5] ml-3" // Larger checkbox, rounded-md, ml-3 for RTL
      />
      <span
        className={completed ? "line-through text-gray-500" : "text-gray-900"}
      >
        {text}
      </span>
    </div>
    <button className="text-gray-400 hover:text-gray-600">
      <FontAwesomeIcon icon="ellipsis-h" />
    </button>
  </div>
);

const TeamMember = ({ id, name, role, avatar }) => (
  <div className="flex items-center flex-row-reverse justify-end space-x-4 space-x-reverse py-2 border-b border-gray-100 last:border-b-0">
    {" "}
    {/* rtl layout and spacing */}
    <div className="text-right">
      <Link to={`/users/${id}`}>
        <p className="font-semibold text-[#2B3674]">{name}</p>
      </Link>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
    <img
      src={avatar}
      alt={name}
      className="w-12 h-12 rounded-full object-cover"
    />{" "}
    {/* Larger avatar */}
  </div>
);

const Home = () => {
  return (
    <div
      dir="rtl"
      className="p-6 bg-gray-100 min-h-screen font-cairo text-gray-800"
    >
      {/* Header */}
      <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">

        <div className="text-right">
          {" "}
          {/* Ensure text is right-aligned */}
          <h1 className="text-3xl font-bold text-[#2B3674] mb-2">
            {" "}
            {/* Darker blue color */}
            المهام اليومية
          </h1>
          <p className="text-[#2B3674] text-lg">خصص مهامك اليومية وقم بها</p>
          <br />
          {/* Blue button */}
          <Link
            className="mt-5 px-6 py-2 bg-[#4C64D5] text-white rounded-lg hover:bg-[#3B4EAB] transition duration-300"
            to={"DailyTasks"}
          >
            مهام اليوم
          </Link>
        </div>
        <img
          src={IntroImg}
          alt="Tasks"
          className="w-48 h-48 object-contain hidden sm:block"
        />
        {/* Slightly larger image */}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          label="إجمالي الراتب"
          value="$55000" // Updated value based on image
          icon={
            <FontAwesomeIcon
              icon="money-bill-alt"
              className="text-[#4CAF50] text-2xl" // Green icon
            />
          }
          iconBg="bg-[#E3F2E3]" // Light green background
          valueColor="text-[#4CAF50]"
        />
        <StatCard
          label="عدد مشاريع قمت بالعمل عليها"
          value="2000"
          icon={
            <FontAwesomeIcon
              icon="folder-open"
              className="text-[#2196F3] text-2xl" // Blue icon
            />
          }
          iconBg="bg-[#E0F2F7]" // Light blue background
          valueColor="text-[#2196F3]"
        />
        <StatCard
          label="عدد المهام منذ بدء العمل"
          value="1000"
          icon={
            <FontAwesomeIcon icon="tasks" className="text-[#EF5350] text-2xl" /> // Red icon
          }
          iconBg="bg-[#FEECEB]" // Light red background
          valueColor="text-[#EF5350]"
        />
        <StatCard
          label="عدد مهام اليوم"
          value="200"
          icon={
            <FontAwesomeIcon icon="tasks" className="text-[#FFC107] text-2xl" /> // Yellow icon
          }
          iconBg="bg-[#FFFDE7]" // Light yellow background
          valueColor="text-[#FFC107]"
        />
        <StatCard
          label="عدد أيام الغياب"
          value="7"
          icon={
            <FontAwesomeIcon
              icon="calendar-alt"
              className="text-[#9C27B0] text-2xl" // Purple icon
            />
          }
          iconBg="bg-[#F3E5F5]" // Light purple background
          valueColor="text-[#9C27B0]"
        />
        <StatCard
          label="الانضمام إلى فريقنا"
          value="منذ 3 أشهر"
          icon={
            <FontAwesomeIcon icon="clock" className="text-[#009688] text-2xl" /> // Teal icon
          }
          iconBg="bg-[#E0F2F1]" // Light teal background
          valueColor="text-[#009688]"
        />
        {/* Pie Chart Card - Replaces a general ChartPlaceholder and is styled specifically */}
        <PieChartCard />
        {/* Line Chart Card - Replaces original ChartPlaceholder */}
        <LineChartCard />
        <ProjectCard
          title="موقع تجاري"
          date="22 نوفمبر"
          label="تصميم"
          progress={90}
          color="bg-[#9C27B0]"
        />{" "}
        {/* Purple progress */}
        <ProjectCard
          title="تطبيق فطرة"
          date="22 نوفمبر"
          label="شاشة الدفع"
          progress={75}
          color="bg-[#4C64D5]"
        />{" "}
        {/* Blue progress */}
        <ProjectCard
          title="تطبيق Gifter"
          date="22 نوفمبر"
          label="شاشة الكود"
          progress={50}
          color="bg-[#EF5350]"
        />{" "}
        <div className="lg:col-span-1 sm:col-span-2 col-span-full bg-white p-6 rounded-lg ">
          <h3 className="text-lg font-semibold mb-4 text-right">
            أعضاء الفريق
          </h3>
          <div className="space-y-2">
            {" "}
            {/* Reduced space-y for tighter list */}
            {[
              {
                id: 1,
                name: "م/ محمد يس",
                role: "UI/UX Designer",
                avatar: "https://placehold.co/48x48/F4A261/ffffff/png?text=MY", // Orange avatar
              },
              {
                id: 2,
                name: "م/ محمد يس",
                role: "UI/UX Designer",
                avatar: "https://placehold.co/48x48/2A9D8F/ffffff/png?text=MY", // Green/Teal avatar
              },
              {
                id: 3,
                name: "م/ محمد يس",
                role: "UI/UX Designer",
                avatar: "https://placehold.co/48x48/264653/ffffff/png?text=MY", // Dark Blue avatar
              },
            ].map((member) => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </div>
        {/* Red progress */}
        <div className="lg:col-span-2 sm:col-span-2 col-span-full bg-white p-6 rounded-lg ">
          <h3 className="text-lg font-semibold mb-4 text-right">
            المهام اليومية
          </h3>
          <div className="space-y-2">
            {" "}
            {/* Reduced space-y for tighter list */}
            {[
              { id: 1, text: "Lending Page Design", completed: true },
              { id: 2, text: "Dashboard Builder", completed: false },
              { id: 3, text: "Mobile App Design", completed: false },
              { id: 4, text: "Illustrations", completed: true },
              { id: 5, text: "Promotional LP", completed: false },
            ].map((task) => (
              <TaskItem key={task.id} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;