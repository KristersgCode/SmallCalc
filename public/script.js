function multiply() {
  let num1 = parseFloat(document.getElementById("textfield1").value);
  let num2 = parseFloat(document.getElementById("textfield2").value);
  let oper = document.getElementById("operators").value;

  if (oper === "+") {
    document.getElementById("result").value = num1 + num2;
  }

  if (oper === "-") {
    document.getElementById("result").value = num1 - num2;
  }

  if (oper === "/") {
    document.getElementById("result").value = num1 / num2;
  }

  if (oper === "x") {
    document.getElementById("result").value = num1 * num2;
  }

  document.getElementById("textfield1").value = "";
  document.getElementById("textfield2").value = "";
}
