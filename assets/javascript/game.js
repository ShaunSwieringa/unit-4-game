$( document ).ready(function(){
    var Random=Math.floor(Math.random()*102+19)
    
    $('#scoreToMatch').text(Random);
    
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        }

  function winning(){
  alert("Winner! Winner! Chicken dinner!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function loser(){
  alert ("Tough luck, maybe next time!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

    $('.purple').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 

          if (playerTotal == Random){
            winning();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            winning();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            winning();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            winning();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 