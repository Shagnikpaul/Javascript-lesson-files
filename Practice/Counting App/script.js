let count = 0;
document.getElementById("inc").onclick = function () {
  count += 1;
  document.getElementById("Num").innerHTML = count;
  document.title = count;
};

document.getElementById("dec").onclick = function () {
  count -= 1;
  document.getElementById("Num").innerHTML = count;
  document.title = count;
};

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("Num").innerHTML = count;
  document.title = count;
};
