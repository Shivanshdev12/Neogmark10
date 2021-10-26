init();
function init() {
  var billamt = document.querySelector("#i1");
  var cashamt = document.querySelector("#i2");
  var btnAttr = document.querySelector(".btn");
  var dpAttr = document.querySelectorAll(".dp-notes");
  btnAttr.addEventListener("click", clickHandler);

  function clickHandler() {
    if (billamt.value <= 0 || cashamt.value <= 0) {
      document.querySelector("#i3").innerText = "Invalid Input";
    }
    if (billamt.value > cashamt.value) {
      document.querySelector("#i3").innerText = "Please pay complete amount!!";
    }
    const notes = [2000, 500, 100, 20, 10, 5, 1];
    cashHandler(notes);
  }

  function cashHandler(notes) {
    var dp = [0, 0, 0, 0, 0, 0, 0];
    var amtreturned = cashamt.value - billamt.value;
    for (var i = 0; i < notes.length; i++) {
      dp[i] = Math.trunc(amtreturned / notes[i]);
      amtreturned %= notes[i];
      dpAttr[i].innerText = dp[i];
    }
  }
}
