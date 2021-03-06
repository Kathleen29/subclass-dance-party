$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // makeBlinkyDancer

    // make a dancer with a random position
    // new window['makeBlinkyFunction']
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.colorer').on('mouseenter', function(event) {
      var color = this.style.borderColor;
      $('.blinker').css({
        borderColor: color,
      });
      $('.mover').css({
        borderColor: color,
      });
    });

    $('.colorer').on('mouseleave', function(event) {
      $('.mover').css({
        // border: '50px solid',
        zoom: 1,
      });
    });

  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var xPos = i * 50;
      window.dancers[i].lineUp(xPos);
    }
  });

  $('.disperseButton').on('click', function(event) {
    var newTop, newLeft;
    for (var i = 0; i < window.dancers.length; i++) {
      newTop = $('body').height() * Math.random();
      newLeft = $('body').width() * Math.random();
      window.dancers[i].setPosition(newTop, newLeft);
    }
  });
});

