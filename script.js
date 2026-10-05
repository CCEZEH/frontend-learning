function showDepositForm(){
    document.getElementById("depositForm").style.display = "block";
}
function depositMoney() {
    let amount = document.getElementById("depositAmount").value;
    amount = Number(amount);
    if (amount <= 0 || isNaN(amount)) {
        document.getElementById("depositMessage").textContent = "Please enter a valid amount.";
        return;
    }
    document.getElementById("depositMessage").textContent = "Successfully deposited #" + amount.toLocalestring();
}