
var ChipsAndGuac = require('chipsandguac');
 
ChipsAndGuac.getNearbyLocations("10018").then(function(locations) {
  console.log(JSON.stringify(locations));
});

// instantiate a new ChipsAndGuac object, passing in required configuration and credentials. 
var cag = new ChipsAndGuac({
  email:'', 
  password:'', 
  locationId: '', 
  phoneNumber:'' // must match user profile 
});

cag.getOrders().then(function(orders) {
  console.log(orders);
});

cag.submitPreviousOrderWithId(123456789, true).then(function(orderDetails) {
  console.log(orderDetails);
});
