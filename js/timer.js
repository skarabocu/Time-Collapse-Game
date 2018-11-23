

window.onload = function(){




     $("#div1").click(function(){//as the button "Start game" pressed, the timer will start to count down
     hou = 1;
     sec = 00;

     interval = setInterval(function(){
if(sec >=10)//if the second is gretar than 10, the second displays as it is
{
       document.getElementById("timer").innerHTML = hou +" : " + sec ;
}
if(sec <10)//if the second is less than 10, the second displays with a 0 in the beginning in order to have a real clock display
{
       document.getElementById("timer").innerHTML = hou +" : 0" + sec ;
}
       sec--;
       if(sec == -01)//when second is -1, the second will go up to 60 and minute will be decreased by 1
       {
         hou = hou-1;
         sec = 59;
         }
         if (hou == -1 && sec==59)// when the timer is 0:00, the interval will be cleared, the "Time is up" panel appears and alarm sound plays.
         {
          clearInterval(interval);
          $("#div9").fadeIn();
          alarm.play();
         }


      },500);
      });

      $("#div9").click(function(){//when the "Time is up" button pressed, two new buttons called "Start again and "Return to the menu" buttons appear and the alarm sound stops
      $("#div9").fadeOut();
       alarm.pause();
       $("#div10").fadeIn();
           $("#div11").fadeIn();
           });

           $("#div10").click(function(){//when the "Start again" button pressed, the game restarts
           button.play();
           $("#div10").fadeOut();
           $("#div11").fadeOut();
      hou = 1;
      sec = 00;
      interval = setInterval(function(){

       if(sec >=10)//if the second is gretar than 10, the second displays as it is
{
       document.getElementById("timer").innerHTML = hou +" : " + sec ;
}
if(sec <10)//if the second is less than 10, the second displays with a 0 in the beginning in order to have a real clock display
{
       document.getElementById("timer").innerHTML = hou +" : 0" + sec ;
}
       sec--;
       if(sec == -01)
       {
         hou = hou-1;
         sec = 59;
         }
         if (hou == -1 && sec==59)
         {
          clearInterval(interval);
          $("#div9").fadeIn();
          alarm.play();
         }


      },500);
      });

      $("#div11").click(function(){//when the "Return to menu" button pressed, the user turns back to the main menu and the theme song starts to play
      button.play();
      sonic.play();
        $("#div1").fadeIn();
        $("#div2").fadeIn();
        $("#div3").fadeIn();
        $("#soundon").fadeIn();
        $("#soundoff").fadeIn();
        $("#div7").fadeOut();
        $("#div8").fadeOut();
        $("#div10").fadeOut();
        $("#div11").fadeOut();

        });

        $("#div8").click(function(){//when the "Return to the main menu" button pressed, the user turns back to the main menu during the game and theme song starts again.
        clearInterval(interval);
        button.play();
        sonic.play();
        $("#div1").fadeIn();
        $("#div2").fadeIn();
        $("#div3").fadeIn();
        $("#soundon").fadeIn();
        $("#soundoff").fadeIn();
        $("#div7").fadeOut();
        $("#div10").fadeOut();
        $("#div11").fadeOut();
        $("#div8").fadeOut();

        });


    }

