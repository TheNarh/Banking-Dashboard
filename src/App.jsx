import { useState } from 'react'
import AccountCard from "./components/AccountCard";
import Navbar from "./components/Navbar";
import SpendingChart from "./components/SpendingChart";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <div className="min-h-screen bg-stone-300 p-2 dark:bg-stone-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

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
    </div>   
  );
}

export default App;
