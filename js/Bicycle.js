/* The Bicycle interface. */
var Bicycle = new Interface('Bicycle', ['assemble', 'wash', 'ride', 'repair']);
/* Speedster class. */
var Speedster = function() { // implements Bicycle

};
Speedster.prototype = {
  assemble: function() {
    return "Speedster assembled";
  },
  wash: function() {
    return "Speedster washed";
  },
  ride: function() {
    return "Speedster riden";
  },
  repair: function() {
    return "Speedster repaired";
  }
};