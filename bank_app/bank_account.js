class BankAccount 
{
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Creating instances of BankAccount
  const account1 = new BankAccount(16431, "Saju", 1000);
  const account2 = new BankAccount(16432, "Abir", 500);
  
  // Demonstrate functionality
  console.log("Initial Account Information:");
  account1.displayAccountInfo();
  account2.displayAccountInfo();
  
  console.log("\nDepositing to Account 1:");
  account1.deposit(300);
  
  console.log("\nWithdrawing from Account 2:");
  account2.withdraw(250);
  
  console.log("\nAttempting to withdraw more than balance from Account 1:");
  account1.withdraw(3000);
  
  console.log("\nUpdated Account Information:");
  account1.displayAccountInfo();
  account2.displayAccountInfo();
  
 