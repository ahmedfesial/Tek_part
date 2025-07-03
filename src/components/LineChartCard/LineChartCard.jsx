import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LineChartCard = () => {
  const LineChartVisual = () => (
    <svg viewBox="0 0 400 150" className="w-full h-full">
      {/* Line 1 (Purple-ish) */}
      <polyline
        fill="none"
        stroke="#7D5BFF" // A purple-ish color
        strokeWidth="3"
        points="0,100 80,70 160,90 240,50 320,80 400,60"
      />
      {/* Circle on the purple line (mimicking the highlight) */}
      <circle
        cx="240"
        cy="50"
        r="5"
        fill="white"
        stroke="#7D5BFF"
        strokeWidth="2"
      />
      {/* Line 2 (Light Blue) */}
      <polyline
        fill="none"
        stroke="#4DABF7" // A light blue color
        strokeWidth="3"
        points="0,120 80,100 160,110 240,90 320,100 400,120"
      />
    </svg>
  );

  return (
    <div className="lg:col-span-2 col-span-full bg-white text-[#2B3674] p-6 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 text-sm py-1 px-3 bg-gray-100 rounded-lg flex items-center">
          <FontAwesomeIcon icon="calendar-days" className="w-4 h-4 ml-1" />
          This month
        </div>
        <div className="flex items-center text-gray-400">
          <FontAwesomeIcon
            icon="chart-bar"
            className="w-5 h-5 ml-2 text-gray-500"
          />
        </div>
      </div>

      {/* Line Chart Area */}
      <div className="h-48 relative mb-6">
        {" "}
        {/* Added mb-6 for spacing */}
        <LineChartVisual />
        {/* X-axis labels (Months) */}
        <div className="flex justify-between text-gray-500 text-xs mt-2 absolute bottom-0 left-0 right-0 px-4">
          <span>SEP</span>
          <span>OCT</span>
          <span>NOV</span>
          <span>DEC</span>
          <span>JAN</span>
          <span>FEB</span>
        </div>
      </div>

      {/* Productivity Section */}
      <div className="mt-6 flex items-start justify-end flex-col">
        {" "}
        {/* Aligned to end and column for right-to-left flow */}
        <div className="text-right">
          <div className="text-green-500 text-xl font-bold mb-1">+2.45%</div>
          <div className="text-gray-600 text-sm">الإنتاجية</div>
          <div className="flex items-center text-green-500 text-sm mt-1 justify-end">
            <span className="ml-1">على الطريق الصحيح</span>
            <FontAwesomeIcon icon="check-circle" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LineChartCard;