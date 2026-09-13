let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue / 4) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryExpenses = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryExpenses += expenseEntries[i][1];
    }
  }
  return categoryExpenses;
}

function calculateLargestCategory() {
  let categoryNames = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  for (let i = 0; i < categoryNames.length; i++) {
    let categoryTotal = calculateCategoryExpenses(categoryNames[i]);
    categoriesData.push([categoryNames[i], categoryTotal]);
  }
  let largestAmount = 0;
  let largestCategory = "";
  for (let i = 0; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestAmount) {
      largestAmount = categoriesData[i][1];
      largestCategory = categoriesData[i][0];
    }
  }
  return largestCategory;
}

function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  totalExpensesValue += newExpense[1];
}
