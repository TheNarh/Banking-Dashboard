import { useState } from "react";

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

function TransactionList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTransactions = transactions
    .filter((t) => {
      if (filter === "credit") return t.type === "credit";
      if (filter === "debit") return t.type === "debit";
      return true;
    })
    .filter((t) => t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-stone-100 rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Transactions
      </h2>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {["all", "credit", "debit"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <ul>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {transaction.description}
                </p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>

              <span
                className={`font-bold text-lg ${
                  transaction.type === "credit"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.type === "credit" ? "+" : "-"}GHS{" "}
                {Math.abs(transaction.amount).toLocaleString()}
              </span>
            </li>
          ))
        ) : (
          <li className="text-center py-10 text-gray-400 text-sm">
            No transactions found.
          </li>
        )}
      </ul>
    </div>
  );
}

export default TransactionList;
