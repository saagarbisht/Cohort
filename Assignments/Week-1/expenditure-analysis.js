/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spendingChart = [];
  transactions.forEach((spendings) => {
    const index = spendingChart.findIndex(
      (spendingChart) => spendingChart.category === spendings.category
    );
    if (index === -1) {
      spendingChart.push({
        category: spendings.category,
        totalSpent: spendings.price,
      });
    } else {
      spendingChart[index].totalSpent += spendings.price;
    }
  });
  return spendingChart;
}

const spendings = [
  {
    category: "Food",
    totalSpent: 30,
    price: 30,
  },
  {
    category: "Clothing",
    totalSpent: 40,
    price: 40,
  },
  {
    category: "Electronics",
    totalSpent: 30,
    price: 30,
  },
];

const result = calculateTotalSpentByCategory(spendings);
console.log(result);
