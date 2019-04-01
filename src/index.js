import "./styles.css";

var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

// listen for clicks
btn.addEventListener("click", function() {
  // make a request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var exchangeRate = JSON.parse(XHR.responseText).bpi.USD.rate;
      price.innerText = "$" + exchangeRate + " USD";
    }
  };

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
