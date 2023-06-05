
<!DOCTYPE html>
<html>
<head>
  <title>Budget App</title>
   <link rel="stylesheet" href="style.css">
    
</head>
<body>
  <script src="app.js"></script>
  <h1>Budget App</h1>
  
  <h2>Add Transaction</h2>
  <div>
    <input type="text" id="description" placeholder="Description">
    <input type="number" id="amount" placeholder="Amount">
    <button onclick="addTransaction()">Add</button>
  </div>
  
  <h2>Transactions</h2>
  <ul id="transaction-list"></ul>
  
  <h2>Total Balance</h2>
  <div id="total-balance">0</div>
  
  
</body>
</html>
