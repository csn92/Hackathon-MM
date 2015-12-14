Template.form1.events({
   'submit form': function(event){
    
     console.log("form submitted");
     event.preventDefault();
     var email = event.target.inputEmail.value;

      console.log(email)
     var pass = event.target.inputPassword.value;
     var phone = event.target.phoneNumber.value;
     var location = '2123'
  
    Meteor.call('PreviousOrder',email,pass,location,phone,function(error,result){
      if (error) {
    // handle error
        console.log("something is wrong");
        console.log(error);
      } 
      else {
        // examine result

        console.log("Examining result")
        console.log(result);
         alert("Your order has been placed! Pick up at " + result);
      }

    });
  }

 });

