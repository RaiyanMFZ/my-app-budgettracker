export default function BalanceCard({ balance = [] }) {
    const calculateBalance = (transactions) => {
      return transactions
        .reduce((total, transaction) => total + Number(transaction.amount), 0)
        .toFixed(2);
    };
  
    const calculateIncome = (transactions) => {
      return transactions
        .filter((t) => Number(t.amount) > 0)
        .reduce((total, t) => total + Number(t.amount), 0)
        .toFixed(2);
    };
  
    const calculateExpenses = (transactions) => {
      return transactions
        .filter((t) => Number(t.amount) < 0)
        .reduce((total, t) => total + Number(t.amount), 0)
        .toFixed(2);
    };
  
    return (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg mb-6 p-4">
        <p className="text-sm">Balance</p>
        <h1 className="text-4xl font-bold my-2">
          Total balance: ${calculateBalance(balance)}
        </h1>
  
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm">Income</p>
            <p className="text-lg font-semibold text-green-200">
              ${calculateIncome(balance)}
            </p>
          </div>
          <div>
            <p className="text-sm">Expenses</p>
            <p className="text-lg font-semibold text-red-200">
              ${calculateExpenses(balance)}
            </p>
          </div>
        </div>
      </div>
    );
  }
  