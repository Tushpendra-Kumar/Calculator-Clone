function appendToDisplay(value) {
    document.getElementById("result").innerText += value;
  }
  
  function clearDisplay() {
    document.getElementById("result").innerText = "0";
  }
  
  function calculate() {
    let result = eval(document.getElementById("result").innerText);
    document.getElementById("result").innerText = result;
  }
  