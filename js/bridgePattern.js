var Bakery = function() {
  var secretIngredient = "Extra butter";
    this.privilegedGetter = function() {
      return secretIngredient;
    };
};

var neighborhoodBakery = new Bakery;
var ingredient = neighborhoodBakery.privilegedGetter();