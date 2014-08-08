/* The Bicycle interface. */
var Cake = new Interface('Cake', ['bake', 'assemble', 'frost', 'box']);
/* Speedster class. */
var RedVelvet = function() { // implements Bicycle

};
RedVelvet.prototype = {
  bake: function() {
    return "Cake baked.";
  },
  assemble: function() {
    return "Cake assembled.";
  },
  frost: function() {
    return "Cake frosted.";
  },
  box: function() {
    return "Cake boxed up.";
  }
};