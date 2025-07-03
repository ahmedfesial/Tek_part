import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCheckCircle,
  faCircle,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faChevronDown, faCheckCircle, faCircle, faChevronUp);

// 1. ProjectProgressCard Component (لا تغيير هنا)
const ProjectProgressCard = ({
  date,
  projectName,
  description,
  progress,
  successRate,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 text-right">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-500 text-sm">{date}</p>
          <h2 className="text-xl font-bold text-[#2B3674] mt-1">
            {projectName}
          </h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? "chevron-up" : "chevron-down"}
          className="text-gray-400 text-lg cursor-pointer transition-transform duration-300"
          onClick={toggleOpen}
        />
      </div>

      {isOpen && (
        <div className="transition-all duration-300 ease-in-out overflow-hidden">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-[#4C64D5] h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="font-semibold text-[#2B3674]">{progress}%</span>
            <span>{successRate}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// 2. TaskItem Component (تم إضافة prop جديدة: onToggle و جعل الأيقونة قابلة للنقر)
const TaskItem = ({ id, text, completed, onToggle }) => {
  return (
    <div className="flex items-center justify-start py-2">
      <FontAwesomeIcon
        icon={completed ? "check-circle" : "circle"}
        className={`text-lg ml-3 cursor-pointer ${
          completed ? "text-green-500" : "text-gray-300"
        }`}
        onClick={() => onToggle(id)} // تمرير id المهمة عند النقر
      />
      <span
        className={`font-semibold text-base ${
          completed ? "line-through text-gray-500" : "text-[#2B3674]"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

// 3. TaskListSection Component (تم تمرير onToggleTask إلى TaskItem)
const TaskListSection = ({ title, tasks, onToggleTask }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 text-right">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#2B3674]">
          {title}:
        </h3>
        <FontAwesomeIcon
          icon={isOpen ? "chevron-up" : "chevron-down"}
          className="text-gray-400 text-lg cursor-pointer transition-transform duration-300"
          onClick={toggleOpen}
        />
      </div>

      {isOpen && (
        <div className="transition-all duration-300 ease-in-out overflow-hidden">
          <div className="space-y-1">
            {tasks.map((task) => ( // استخدام task.id كـ key
              <TaskItem
                key={task.id}
                id={task.id} // تمرير id المهمة
                text={task.text}
                completed={task.completed}
                onToggle={onToggleTask} // تمرير دالة التبديل
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Page Component (إدارة حالة المهام هنا)
const ProjectDetailPage = ({handleToggleTask, allTasks }) => {

  // تصفية المهام لعرضها في الأقسام المناسبة
  const completedTasks = allTasks.filter((task) => task.completed);
  const remainingTasks = allTasks.filter((task) => !task.completed);

  return (
    <div
      dir="rtl"
      className="p-6 bg-gray-100 min-h-screen font-cairo text-gray-800"
    >
      <ProjectProgressCard
        date="22 نوفمبر"
        projectName="موقع تجاري"
        description="تصميم"
        progress={90}
        successRate="النجاح"
      />
  
      <TaskListSection title="المهام المنتهية" tasks={completedTasks} onToggleTask={handleToggleTask} />
      <TaskListSection title="المهام المتبقية" tasks={remainingTasks} onToggleTask={handleToggleTask} />
    </div>
  );
};

export default ProjectDetailPage;