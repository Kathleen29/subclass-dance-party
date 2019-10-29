var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="colorer"></span>');
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);

makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.change();
};

makeColorDancer.prototype.change = function() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  this.$node.addClass('colorer');
  this.$node.css({ borderColor: randomColor },
    Math.random() * 5000);
};
