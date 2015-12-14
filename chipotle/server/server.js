
Meteor.methods({
  PreviousOrder: function (email,pass,location,phone) {
    this.unblock();
      var Chips = Meteor.npmRequire('chipsandguac');
      var Future = Meteor.npmRequire('fibers/future');
      var future = new Future; 
      var cag= new Chips({
          version: "1.1.0"
      });

      console.log("here")

      cag._email = email
      cag._password = pass
      cag._locationId  = location
      cag._phoneNumber = phone
      console.log(cag)
      cag.getOrders().then(function(orders){
  
            id = orders[0]["id"]
            cag.submitPreviousOrderWithId(id,truer).then(function(orderDetails){
                // console.log(orderDetails)
                  console.log(orderDetails["pickupTimes"][0]);
                  future.return(orderDetails["pickupTimes"][0]);
                
                });

      });

      return future.wait() 

}

});
