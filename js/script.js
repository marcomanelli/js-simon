$(function() {
  var numComputer = []
  var numGiocatore = []

  $('#start').click(function(){
    $(this).slideUp()

    for(var i=0; i<5; i++){
      numComputer[i] = Math.floor(Math.random() * 100 + 1)

    }
    $('#numeri').text(numComputer)

    setTimeout(function(){
     $('#numeri').hide()
    }, 5000)
  })

  numGiocatore.push($('#input').value())

  console.log(numGiocatore);
  /* //inserimento numeri giocatore
  for(var i=0; i<5; i++){
    numGiocatore = parseInt(prompt('Inserisci i numeri uno alla volta'))
  }
  setTimeout(function(){
    $('#attesa').show()
   }, 5000)

  setTimeout(function(){
    $('#attesa').hide()
  }, 8000) */
})