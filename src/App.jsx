import AccountCard from "./components/AccountCard";
import Navbar from "./components/Navbar";
import SpendingChart from "./components/SpendingChart";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="min-h-screen bg-stone-300 p-2">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-stone-800 mb-6 text-center">
          My Banking Dashboard
        </h1>

        <AccountCard />
        <SummaryCard />
        <SpendingChart />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
