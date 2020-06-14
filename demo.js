// AJAX WAY

let factnumber = document.getElementById("factnumber");
let facttext = document.getElementById("facttext");
let fact = document.getElementById("fact");

factnumber.addEventListener("input", getFactAjax);

function getFactAjax() {
  let number = factnumber.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numberapi.com/" + number);
  xhr.onload = function () {
    if (this.status == 200 && number != "") {
      fact.style.display = "block";
      facttext.innerText = this.responseText;
    }
    if (number == "") {
      fact.style.display = "none";
    }
  };
  xhr.send();
}
