var arrRandom, arrUser, arrResult;
var limit = 5;
var secAttesa = 2;

$(function () {
  reset();

  $("#start").click(function () {
    while (arrRandom.length < limit) {
      var nr = getNumberGenerator(1, 100);

      if (!arrRandom.includes(nr)) arrRandom.push(nr);
    }

    printDisplay("I numeri estratti sono: " + arrRandom.join(" - "));
    $("#start").hide();

    setTimeout(function () {
      printDisplay("Inserisci " + limit + " numeri.");
      $("#console").show();
    }, secAttesa * 1000);
  });

  $("#send-number").click(function () {
    if (arrUser.length < limit) {
      if (arrUser.includes($("input").val())) {
        printDisplay("Attenzione numero già inserito");
      } else {
        arrUser.push($("input").val());
        printDisplay("Numeri inseriti: " + arrUser.join(" - "));
      }
    }
    if (arrUser.length == limit) {
      for (var num of arrUser) {
        if (arrRandom.includes(parseInt(num))) {
          arrResult.push(num);
        }
      }
      console.log(arrResult);

      setTimeout(function () {
        printDisplay("Attesa...");
        $("#console").hide();
      }, 500);

      setTimeout(function () {
        if (arrResult.length === 0) {
          printDisplay("Hai perso!");
        } else if (arrResult.length === limit) {
          printDisplay("Hai vinto");
        } else {
          printDisplay(
            "Hai indovinato questi numeri: " + arrResult.join(" - ")
          );
        }
        $("#restart").show();
      }, 2500);
    }
    $("input").val("");
    $("input").focus();
  });

  $("#restart").click(function () {
    reset();
  });
});

function reset() {
  limit = parseInt(prompt("Scegli quanti numeri inserire"));
  arrRandom = [];
  arrUser = [];
  arrResult = [];
  printDisplay("Per iniziare a giocare clicca su VIA");
  $("#display").show();
  $("#start").show();
  $("#restart").hide();
  $("#console").hide();
}

function printDisplay(text) {
  $("#display").text(text);
}

function getNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
