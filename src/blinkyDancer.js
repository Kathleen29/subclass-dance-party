var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('blinker');
  this.$node.fadeIn();
  this.$node.fadeOut();
};

makeBlinkyDancer.prototype.lineUp = function(x) {
  this.$node.css({
    top: $('body').height() / 2,
    left: x,
  });
};