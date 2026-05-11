const transactions = [
  {
    id: 1,
    description: "Salary Payment",
    amount: 5000,
    type: "credit",
    date: "May 1, 2026",
  },
  {
    id: 2,
    description: "Electricity Bill",
    amount: -200,
    type: "debit",
    date: "May 3, 2026",
  },
  {
    id: 3,
    description: "Freelance Payment",
    amount: 1500,
    type: "credit",
    date: "May 5, 2026",
  },
  {
    id: 4,
    description: "Grocery Shopping",
    amount: -350,
    type: "debit",
    date: "May 6, 2026",
  },
  {
    id: 5,
    description: "Mobile Top-up",
    amount: -50,
    type: "debit",
    date: "May 7, 2026",
  },
  {
    id: 6,
    description: "Bank Transfer In",
    amount: 2000,
    type: "credit",
    date: "May 9, 2026",
  },
];

function SummaryCard() {
  const totalIncome = transactions
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const net = totalIncome - totalExpenses;

  return (
    <div className="bg-stone-100 dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Monthly Summary</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Income</p>
          <p className="text-xl font-bold text-green-600">
            GHS {totalIncome.toLocaleString()}
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Expenses</p>
          <p className="text-xl font-bold text-red-500">
            GHS {totalExpenses.toLocaleString()}
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Net Balance</p>
          <p
            className={`text-xl font-bold ${net >= 0 ? "text-blue-600" : "text-red-500"}`}
          >
            GHS {net.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
