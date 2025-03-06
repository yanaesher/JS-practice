import eurosFormatter from "./euroFormatter.js";

class Wallet {
  #name;
  #cash;
  #dailyAllowance = 40;
  #dayTotalWithdrawals = 0;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
  }

  get name() {
    return this.#name;
  }

  get dailyAllowance() {
    return this.#dailyAllowance;
  }

  deposit(amount) {
    this.#cash += amount;
    return amount;
  }

  withdraw(amount) {
    if (this.#cash - amount < 0) {
      console.log("Error, not enough money");
      return 0;
    }
    if (this.#dayTotalWithdrawals + amount > this.#dailyAllowance) {
      console.log("Error, withdrawals limit 40 EUR");
      return 0;
    }
    this.#cash -= amount;
    this.#dayTotalWithdrawals += amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(`User ${this.name} sent to ${wallet.name} ${amount} EUR`);
    const transferAmount = this.withdraw(amount);
    wallet.deposit(transferAmount);
  }

  set dailyAllowance(newAllowance) {
    this.#dailyAllowance = newAllowance;
    console.log(
      `Daily allowance set to: ${eurosFormatter.format(newAllowance)}`
    );
  }

  resetDayTotalWithdrawals() {
    this.#dayTotalWithdrawals = 0;
  }

  reportBalance() {
    console.log(`${this.name} has ${this.#cash} on balance`);
  }
}

function main() {
  const walletJohn = new Wallet("John", 100);
  const walletJane = new Wallet("Jane", 80);

  walletJohn.reportBalance();
  walletJane.reportBalance();

  walletJane.transferInto(walletJohn, 30);
  walletJane.reportBalance();
  console.log(walletJane.name);
  console.log(walletJohn.name);
  walletJane.dailyAllowance = 100;
  console.log(walletJane.dailyAllowance);
}

main();
