/**
 * It is time to write some bigger code! You have a bankAccount that is modeled as given.
 *
 * Finish the two functions that will donate money (donateMoney) and pay rent (payRent).
 * If you do not have enough funds, call the onFail function given and don't change the bankAccount.
 * If you do have the funds, update the bankAccount accordingly.
 *
 * TIP: have a look at the test code to get more information on what needs to happen
 * TIP: a lot of the things the functions do are the same, you may want to create one or more other functions to not duplicate code
 */



// so functions needs to create obj and add it to transactions array



const bankAccount = {
  currentBalance: 250,
  transactions: [
 {prevAmount: 350, newAmount: 250, reason: "Donation"},
  ],
};



const makeTransaction = (amount, onFail, onSuccess, reason) => {
	
if(amount>bankAccount.currentBalance){
	onFail();
	return;
  }
  const transaction = {
  prevAmount: bankAccount.currentBalance,
  newAmount: bankAccount.currentBalance - amount,
  reason: reason,
  };
  
  bankAccount.currentBalance -= amount;
  bankAccount.transactions.push(transaction);
  onSuccess();
}


const donateMoney = (amount, onSuccess, onFail) => { 
makeTransaction(amount, onFail, onSuccess, 'Donation');
};

const payRent = (amount, onSuccess, onFail) => {
	makeTransaction(amount, onFail, onSuccess, 'Rent');
};

/**
 * TEST CODE. DO NOT EDIT
 */

const onSuccessEnglish = () => {
  console.log("Payment successful! Thank you!");
};
const onFailEnglish = () => {
  console.log("You do not have enough money to make this payment.");
};

const onSuccessDutch = () => {
  console.log("Betaling geslaagd! Dank u!");
};
const onFailDutch = () => {
  console.log("U heeft niet voldoende saldo om deze betaling te doen.");
};

donateMoney(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

payRent(100, onSuccessEnglish, onFailEnglish);
console.log(bankAccount);

donateMoney(100, onSuccessDutch, onFailDutch);
console.log(bankAccount);

/**
* The console should print out the following:
Payment successful! Thank you!
{
currentBalance: 150,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' }
]
}
Payment successful! Thank you!
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
U heeft niet voldoende saldo om deze betaling te doen.
{
currentBalance: 50,
transactions: [
  { prevAmount: 350, newAmount: 250, reason: 'Donation' },
  { prevAmount: 250, newAmount: 150, reason: 'Donation' },
  { prevAmount: 150, newAmount: 50, reason: 'Rent' }
]
}
* 
*/
