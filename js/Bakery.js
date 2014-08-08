/* BicycleShop class, improved. */
var Bakery = function() {};

Bakery.prototype = {
  sellCake: function(cakeType) {
    var cake = CakeFactory.bakeCake(cakeType);
    cake.bake();
    cake.assemble();
    cake.frost();
    cake.box();
    return cake;
  }
};