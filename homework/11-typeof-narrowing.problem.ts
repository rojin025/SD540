type Amount = {
  amount: number;
};

const getAmount = (amount: number | Amount): number => {
  // implement code to return the amount
  if (typeof amount === "number") return amount;
  else if ("amount" in amount) {
    return amount.amount;
  } else {
    console.log("Something went wrong!");
    return 0;
  }
};

getAmount({ amount: 20 });
getAmount(20);
