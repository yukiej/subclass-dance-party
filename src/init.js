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

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() - 100) * Math.random(),
      ($("body").width() - 100) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var spacing = ($("body").height() - 100)/(window.dancers.length + 1);
      window.dancers[i].setPosition(spacing * (i+1), 50);
    }
  });

  $('.scrambleButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(($("body").height() - 100) * Math.random(), ($("body").width() - 100) * Math.random());
    }
  });

  $('.groupDanceButton').on('click', function(event){
    //for each dancer in window.dancers
    //calculate its distance to all the other dancers
    //if the distance is within some set number
    markNearestNeighbors(100);
  });

  function markNearestNeighbors(distance) {
    var allDancers = window.dancers;
    for (var i = 0; i < allDancers.length; i++) {
      var minTop = allDancers[i].top - distance;
      var maxTop = allDancers[i].top + distance;
      var minLeft = allDancers[i].left - distance;
      var maxLeft = allDancers[i].left + distance;
      for (var k = 0; k < allDancers.length; k++) {
        if (i !== k) {
          if (allDancers[k].top < maxTop && allDancers[k].top > minTop && allDancers[k].left < maxLeft && allDancers[k].left > minLeft) {
            allDancers[k].hasNeighbors = true;
            var dancer = allDancers[k].$node;
            dancer.addClass("groupDance");
          }
        }
      }
    }
  };
});

