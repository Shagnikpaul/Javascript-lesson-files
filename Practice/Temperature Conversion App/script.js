document.getElementById("submit").onclick = function () {
  inp = document.getElementById("inp").value;
  conver = inp * 9/5 + 32;
  document.getElementById('value').innerHTML = conver+"∘F"
};
