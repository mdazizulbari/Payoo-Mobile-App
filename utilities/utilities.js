function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  const convertedValue = Number(value);
  return convertedValue;
}
function getInnerTextByID(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = Number(value);
  return convertedValue;
}
function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
