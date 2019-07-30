tipCalculator = () => {
  let billAmount = document.getElementById("amount").value;
  let serivce = document.getElementById("service").value;
  let many = document.getElementById("howMany").value;
  let total = (billAmount * (serivce / 100)) / many;
  total = Math.round(total * 100) / 100;
  total.toFixed(2);
  // the input validate
  if (billAmount === "" || billAmount === 0) {
    alert("please Enter a value");
    return;
  }

  if (many === "" || many <= 1) {
    many = 1;
    document.getElementById("perPerson").style.display = "none";
  } else {
    document.getElementById("perPerson").style.display = "block";
  }

  document.getElementById("totalTip").style.display = "flex";
  document.getElementById("tip").innerHTML = total;
};
document.getElementById("totalTip").style.display = "none";

document.getElementById("btn").onclick = () => tipCalculator();
