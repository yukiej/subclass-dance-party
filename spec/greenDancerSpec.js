describe('greenDancer', function() {

  var greenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    greenDancer = new makeGreenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(greenDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node fade toggle', function() {
  //   sinon.spy(greenDancer.$node, 'fadeToggle');
  //   greenDancer.step();
  //   expect(greenDancer.$node.fadeToggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(greenDancer, 'step');
      expect(greenDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //debugger;
      expect(greenDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(greenDancer.step.callCount).to.be.equal(2);
    });
  });
});
