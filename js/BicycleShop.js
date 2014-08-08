/* BicycleShop class, improved. */
var BicycleShop = function() {};

BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle = BicycleFactory.createBicycle(model);
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
};