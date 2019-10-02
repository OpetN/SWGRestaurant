function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["Email"].value;
  var z = document.forms["myForm"]["Phone"].value;
  if (x & y & z == "") {
    alert("Entire form must be filled out");
    return false;
  }
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  if (z == "") {
    alert("Phone number must be filled out");
    return false;
  }
alert("Thank you for submitting your information! You will now be redirected to the home page")
return true;

}
