// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"><img height="100" width="100"></span>');
//   this.step();
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.top = top; 
//   this.left = left;
//   this.hasNeighbors = false;

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   this.setPosition(top, left);
// };

// makeDancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   //console.log('dancer step');
// };

// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   this.top = top; 
//   this.left = left; 
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

var makeDancer = class {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"><img height="100" width="100"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top; 
    this.left = left;
    this.hasNeighbors = false;
    this.step();
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition() {
    this.top = top; 
    this.left = left; 
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

}