var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
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
  var newSize = Math.floor(15 * Math.random() + 2).toString() + 'px solid';
  var newOpacity = Math.random() * 1;

  this.$node.addClass('mover');
  this.$node.animate({
    top: newTop,
    left: newLeft,
    opacity: newOpacity,
  },
  Math.random() * 5000);
  console.log(newSize);
  // this.$node.css('border', newSize);
};