/* CakeFactory namespace. */
var CakeFactory = {

  bakeCake: function(cakeType) {
    var cake;
    
    switch(cakeType) {
      case 'red velvet cake':
        cake = new RedVelvet();
        break;
      case 'pineapple upsidedown':
        cake = new PineappleUpsidedown();
        break;
      case 'black forest cake':
        cake = new BlackForest();
        break;
      default:
        cake = new RedVelvet();
    }

    Interface.ensureImplements(cake, Cake);
    return cake;

  }

};