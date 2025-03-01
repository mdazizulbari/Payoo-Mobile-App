function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
// document.getElementById("cash-out-section").style.display = "none";
handleToggle("cash-out-section", "none");
handleToggle("transaction-section", "none");
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("cash-out-section", "none");
  handleToggle("add-money-section", "block");
  // document.getElementById("cash-out-section").style.display = "none";
  // document.getElementById("add-money-section").style.display = "block";
  handleToggle("transaction-section", "none");
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cash-out-section", "block");
  handleToggle("add-money-section", "none");
  // document.getElementById("cash-out-section").style.display = "block";
  // document.getElementById("add-money-section").style.display = "none";
  handleToggle("transaction-section", "none");
});
document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("cash-out-section", "none");
    handleToggle("add-money-section", "none");
    handleToggle("transaction-section", "block");
  });
