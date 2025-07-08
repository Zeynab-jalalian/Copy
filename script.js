let HTMLBox = document.getElementById("HTMLBox");
let HTMLBtn = document.getElementById("HTMLBtn");

HTMLBtn.onclick = function () {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLBtn.innerText = "Codes Copied!";
};

let CSSBox = document.getElementById("CSSBox");
let CSSBtn = document.getElementById("CSSBtn");

CSSBtn.onclick = function () {
  CSSBox.select();
  document.execCommand("copy");
  CSSBtn.innerText = "Codes Copied!";
};

let JSBox = document.getElementById("JSBox");
let JSBtn = document.getElementById("JSBtn");

JSBtn.onclick = function () {
  JSBox.select();
  document.execCommand("copy");
  JSBtn.innerText = "Codes Copied!";
};

