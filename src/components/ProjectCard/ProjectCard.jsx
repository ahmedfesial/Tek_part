import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  progress,
  color = "bg-blue-600",
  label,
  date,
}) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg w-full overflow-hidden break-words">
    <p style={{ fontSize: "14px" }} className=" text-gray-400 mb-2 text-right">
      {date}
    </p>
    <h3 className="text-2xl text-[#27104E] font-semibold mb-2 text-right">
      <Link to={"/projects/id"}>{title}</Link>
    </h3>
    <p style={{ fontSize: "18px" }} className=" text-gray-500 mb-2 text-right">
      {label}
    </p>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      {" "}
      {/* Smaller height for progress bar */}
      <div
        className={`${color} h-2 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <div className="flex justify-between items-center text-sm text-gray-600">
      <div className="flex -space-x-2 overflow-hidden flex-row-reverse">
        {" "}
        {/* For avatars */}
        {/* Placeholder avatars based on image */}
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://placehold.co/24x24/E0E7FF/FFFFFF/png?text=A"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://placehold.co/24x24/CFD8DC/FFFFFF/png?text=B"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://placehold.co/24x24/FFE0B2/FFFFFF/png?text=C"
          alt=""
        />
      </div>
      <span className="font-semibold">{progress}%</span>{" "}
      {/* Moved percentage to the right */}
    </div>
  </div>
);
export default ProjectCard;