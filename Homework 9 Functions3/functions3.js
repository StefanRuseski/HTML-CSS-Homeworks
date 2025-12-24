function atmWithdrawal(){
    let balance = 2000;
    let amount = prompt("Enter the amount to withdraw:");
    amount = parseInt(amount);
    if(amount > balance){
        console.log("Not enough money");
    } else {
        balance -= amount;
        console.log("Withdrawal successful, you withdrew " + amount + "$. New balance: " + balance + "$");
    }
}

atmWithdrawal(); 