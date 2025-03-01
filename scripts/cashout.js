document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("cash")
    const accountNumber = document.getElementById("cashout-account-number").value;
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = Number(amount);
    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = Number(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = Number(mainBalance);
    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        const newMainBalance = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = newMainBalance;
        // console.log(mainBalance, newMainBalance)
      } else {
        alert("Enter correct Pin");
      }
    } else {
      alert("Enter valid Account Number");
    }
  });
