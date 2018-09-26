//  var makeCrazyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.attr('class', 'crazyDancer');
//   this.$node.find('img').attr('src', 'images/emoji_poop.png');
  

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   //this.oldStep = this.step;
// };

// makeCrazyDancer.prototype = Object.create(makeDancer.prototype);

// makeCrazyDancer.prototype.oldStep = makeDancer.prototype.step;

// makeCrazyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   this.oldStep();

//   this.$node.fadeToggle(); //Does a slow blink

// };


var makeCrazyDancer = class extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.attr('class', 'crazyDancer');
    this.$node.find('img').attr('src', 'images/emoji_poop.png');
  }
  step() {
    this.oldStep();
    this.$node.fadeToggle(); //Does a slow blink
  }
}

makeCrazyDancer.prototype.oldStep = makeDancer.prototype.step;