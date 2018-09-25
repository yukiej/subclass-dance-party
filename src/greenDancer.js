var makeGreenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'greenDancer');
  this.$node.find('img').attr('src', 'images/emoji_cat.png');
  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
};

makeGreenDancer.prototype = Object.create(makeDancer.prototype);

makeGreenDancer.prototype.oldStep = makeDancer.prototype.step;

makeGreenDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.toggle("pulsate");
};