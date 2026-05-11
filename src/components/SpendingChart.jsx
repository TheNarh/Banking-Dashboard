import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", income: 6000, expenses: 2100 },
  { month: "Feb", income: 5500, expenses: 3200 },
  { month: "Mar", income: 7000, expenses: 2800 },
  { month: "Apr", income: 6200, expenses: 1900 },
  { month: "May", income: 8500, expenses: 2600 },
];

function SpendingChart() {
  return (
    <div className="bg-stone-100 dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
        Income vs Expenses
      </h2>
      <p className="text-sm text-gray-400 mb-6">Last 5 months overview</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#9ca3af", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `GHS ${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value) => [`GHS ${value.toLocaleString()}`]}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "13px" }} />
          <Bar
            dataKey="income"
            name="Income"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="expenses"
            name="Expenses"
            fill="#f87171"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
