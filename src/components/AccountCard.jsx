function AccountCard() {
  return (
    <div className="bg-stone-100 rounded-2xl shadow-md p-6 mb-6 transition-colors duration-300">
      <p className="text-sm text-gray-500 dark:text-black-400 mb-1">Account Holder</p>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-4">Ludwig Narh</h2>

      <p className="text-sm text-gray-500 dark:text-black-400 mb-1">Account Number</p>
      <p className="text-lg font-medium text-gray-700 dark:text-black-300 mb-4">
        GH • 0012 3456 7890
      </p>

      <p className="text-sm text-gray-500 dark:text-black-400 mb-1">Available Balance</p>
      <h3 className="text-4xl font-bold text-blue-500">GHS 12,500.00</h3>
    </div>
  );
}

export default AccountCard;
