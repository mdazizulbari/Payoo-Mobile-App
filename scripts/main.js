document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const amount = document.getElementById("amount").value;
    // const convertedAmount = Number(amount);
    const amount = getInputValueByID("amount")
    // const pin = document.getElementById("pin").value;
    // const convertedPin = Number(pin);
    const pin = getInputValueByID("pin")
    const accountNumber = document.getElementById("account-number").value;
    // const accountNumber = getInputValueByID("account-number") here we can't convert it to a number, because number doesn't have .length property
    // const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalance = getInnerTextByID("main-balance")
    // const convertedMainBalance = Number(mainBalance);
    console.log(amount, pin, accountNumber, accountNumber.length)
    if (accountNumber.length === 11) {
      console.log(accountNumber.length)
      if (pin === 1234) {
        const newMainBalance = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", newMainBalance)
        // document.getElementById("main-balance").innerText = newMainBalance;
      } else {
        alert("Enter correct Pin");
      }
    } else {
      alert("Enter valid Account Number");
    }
  });
