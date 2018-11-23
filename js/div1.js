$(function() {
    //when the "Start game" button pressed, the game starts, the theme song stops
    $('#div1').on('click', function(e)  {
        sonic.pause();
        button.play();
        $("#div1").fadeOut();
        $("#div2").fadeOut();
        $("#div3").fadeOut();
        $("#div7").fadeIn();
        $("#div8").fadeIn();
        $("#soundon").fadeOut();
        $("#soundoff").fadeOut();

        });
        });
