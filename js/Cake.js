/* 
The Cake interface defines the number and names of methods.
*/
var Cake = new Interface('Cake', ['bake', 'assemble', 'frost', 'box']);

/* 
A Cake class implements the Cake interface 
*/
var RedVelvet = function() {

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