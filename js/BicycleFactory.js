/* BicycleFactory namespace. */
var BicycleFactory = {

  createBicycle: function(model) {
    var bicycle;
    
    switch(model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider();
        break;
      case 'The Comfort Cruiser':
        bicycle = new ComfortCruiser();
        break;
      default:
        bicycle = new ComfortCruiser();
    }

    Interface.ensureImplements(bicycle, Bicycle);
    return bicycle;

  }

};