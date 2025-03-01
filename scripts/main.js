document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("working");
    const accountNumber = document.getElementById("account-number").value;
    const amount = document.getElementById("amount").value;
    const convertedAmount = Number(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = Number(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = Number(mainBalance);
    if (accountNumber.length === 11) {
      if (convertedPin === 1234) {
        const newMainBalance = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = newMainBalance;
      } else {
        alert("Enter correct Pin");
      }
    } else {
      alert("Enter valid Account Number");
    }
  });
