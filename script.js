document.addEventListener("DOMContentLoaded", () => {
    const addExpenseBtn = document.getElementById("addExpenseBtn");
    const totalExpensesEl = document.getElementById("totalExpenses");
    const savingsEl = document.getElementById("savings");
    const transactionList = document.getElementById("transactionList");

    let totalExpenses = 0;
    let savings = 1000; // Default savings amount
    let transactions = [];

    // Function to add a new expense
    function addExpense() {
        const name = prompt("Enter expense name:");
        const amount = parseFloat(prompt("Enter amount:"));

        if (!name || isNaN(amount) || amount <= 0) {
            alert("Invalid input.");
            return;
        }

        transactions.push({ name, amount });
        totalExpenses += amount;
        savings -= amount;

        totalExpensesEl.textContent = `$${totalExpenses.toFixed(2)}`;
        savingsEl.textContent = `$${savings.toFixed(2)}`;

        const li = document.createElement("li");
        li.textContent = `${name}: $${amount.toFixed(2)}`;
        transactionList.appendChild(li);
    }

    // Event listener for adding expenses
    addExpenseBtn.addEventListener("click", addExpense);
});
