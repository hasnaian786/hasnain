
    // Define an array to store transactions
    let transactions = [];
    
    function addTransaction() {
      // Get input values
      const descriptionInput = document.getElementById("description");
      const amountInput = document.getElementById("amount");
      
      // Validate input
      const description = descriptionInput.value.trim();
      const amount = parseFloat(amountInput.value);
      if (description === "" || isNaN(amount)) {
        showError("Please enter a valid description and amount.");
        return;
      }
      
      // Create transaction object
      const transaction = {
        description,
        amount
      };
      
      // Add transaction to the array
      transactions.push(transaction);
      
      // Clear input fields
      descriptionInput.value = "";
      amountInput.value = "";
      
      // Update UI
      updateTransactions();
      updateTotalBalance();
    }
    
    function updateTransactions() {
      const transactionList = document.getElementById("transaction-list");
      
      // Clear previous transactions
      transactionList.innerHTML = "";
      
      // Add new transactions to the list
      transactions.forEach(transaction => {
        const item = document.createElement("li");
        item.className = "transaction-item";
        item.innerText = `${transaction.description}: $${transaction.amount}`;
        transactionList.appendChild(item);
      });
    }
    
    function updateTotalBalance() {
      const totalBalance = document.getElementById("total-balance");
      
      // Calculate total balance
      const balance = transactions.reduce((total, transaction) => {
        return total + transaction.amount;
      }, 0);
      
      // Update total balance in the UI
      totalBalance.innerText = `$${balance.toFixed(2)}`;
    }
    
    function showError(message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.innerText = message;
      document.body.appendChild(errorDiv);
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        errorDiv.remove();
      }, 3000);
    }
  