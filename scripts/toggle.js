// document.getElementById("cash-out-section").style.display = "none";
handleToggle("cash-out-section", "none");
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("cash-out-section", "none");
  handleToggle("add-money-section", "block");
  // document.getElementById("cash-out-section").style.display = "none";
  // document.getElementById("add-money-section").style.display = "block";
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cash-out-section", "block");
  handleToggle("add-money-section", "none");
  // document.getElementById("cash-out-section").style.display = "block";
  // document.getElementById("add-money-section").style.display = "none";
});
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
