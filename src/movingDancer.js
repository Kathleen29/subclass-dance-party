var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mover"></span>');
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);

makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.move();
};

makeMovingDancer.prototype.move = function() {
  var newTop = $('body').height() * Math.random();
  var newLeft = $('body').width() * Math.random();
  this.$node.animate({
    top: newTop,
    left: newLeft
  },
  Math.random() * 5000);
};
