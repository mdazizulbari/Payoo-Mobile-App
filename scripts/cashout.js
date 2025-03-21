document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("cash")
    const accountNumber = document.getElementById(
      "cashout-account-number"
    ).value;
    const amount = getInputValueByID("cashout-amount");
    // const amount = document.getElementById("cashout-amount").value;
    // const convertedAmount = Number(amount);
    const pin = getInputValueByID("cashout-pin");
    // const pin = document.getElementById("cashout-pin").value;
    // const convertedPin = Number(pin);
    const mainBalance = getInnerTextByID("main-balance");
    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = Number(mainBalance);
    if (amount > mainBalance) {
      alert("Your balance is less than that!");
      return;
    }
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const newMainBalance = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", newMainBalance);
        // document.getElementById("main-balance").innerText = newMainBalance;
        const transactionContainer = document.getElementById(
          "transaction-container"
        );
        const p = document.createElement("p");
        p.innerText = `cashout ${amount} from this ${accountNumber} account.`;
        transactionContainer.appendChild(p);
      } else {
        alert("Enter correct Pin");
      }
    } else {
      alert("Enter valid Account Number");
    }
  });
