import { Pie } from "react-chartjs-2";

// Modified ChartPlaceholder for the Pie Chart to match image
const PieChartCard = () => {
  const data = {
    labels: ["المهام المنتهية", "المهام المتبقية"], // These labels won't be shown by default Chart.js legend, but used for accessibility
    datasets: [
      {
        label: "النسبة",
        data: [65, 25], // Assuming 65% for blue, 25% for purple based on image
        backgroundColor: ["#4C64D5", "#C7D0EF"], // Main blue and lighter blue for the second segment
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
        cutout: "80%", // Doughnut chart style
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white text-[#2B3674] p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">المخطط البياني</h3>
      </div>
      <div className="h-48 relative flex items-center justify-center">
        <Pie data={data} options={options} />
        <div className="absolute text-center">
          <div className="text-3xl font-bold text-[#2B3674]">65%</div>
          <div className="text-sm text-gray-500">منجز</div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex justify-between mb-2">
          <span className="flex items-center">
            <span className="w-2.5 h-2.5 bg-[#4C64D5] rounded-full ml-2"></span>{" "}
            {/* ml-2 for RTL */}
            المهام المنتهية
          </span>
          <span className="font-semibold text-[#2B3674]">65%</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center">
            <span className="w-2.5 h-2.5 bg-[#C7D0EF] rounded-full ml-2"></span>{" "}
            {/* ml-2 for RTL */}
            المهام المتبقية
          </span>
          <span className="font-semibold text-[#2B3674]">25%</span>
        </div>
      </div>
    </div>
  );
};
export default PieChartCard;