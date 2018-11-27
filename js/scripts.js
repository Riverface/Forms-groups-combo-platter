var item1ct = 0;
var item2ct = [0, 0, 0];
var item3ct = 0;
$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready
$("#receipt").hide();
  $('#nameForm').submit(function () {
   onSubmit();
   return false;
  });
  $('#adbform').submit(function () {
   adbsubmit();
   return false;
  });
$("#item1").click(function(){
item1ct++;
console.log($("#item1").val());

});
$("#item2").click(function(){
  var x = $("#size option:selected").val();
console.log($("#size option:selected").val());
if(x == "S")
{
item2ct[0]++;
console.log( $("#item2").val() + " SMALL " + item2ct[0]);
}
else if( x == "M")
{
item2ct[1]++;
console.log( $("#item2").val() + " MEDIUM  " + item2ct[1]);
}
else if(x == "L")
{
item2ct[2]++;
console.log( $("#item2").val() + " LARGE " + item2ct[2]);
}
});
$("#item3").click(function(){
item3ct++;
});

console.log($("#item3").val());
$("#checkout").click(function()
{
mktplcsubmit();


});
});

function onSubmit()
{
  var favcol;
  var firstName;
  var lastName;

  firstName = $("#fName").val();
  lastName = $("#lName").val();

  // console.log(firstName + "is your first name.");
  // console.log(lastName + "is your last name.");
  favcol = $("#color").val()
  $("#theContent").html("<div>" + "Your first name is "
  + firstName + "."
  + " Your last name is "
  + lastName + ". Your favorite fruit is "
  + $("#favFruit").val() + ". If you had a pet monkey its name would be "
  + $("#monkeyName").val() + ". Your rapper name is Yung "
  + $("#yung").val() + ". Your age is "
  + $("#viewerAge").val()
  + $("#color").val()
  + ".</div>");



$("#theContent").css("background-color", favcol);
    return false;
}

function adbsubmit()
{
  $("#adbstorage").append("<div class='adbentry'> Address: "
  + $("#adb1").val()
  + "<br> City: "
  + $("#adb2").val()
  + "<br> State"
  + $("#adb3").val()
  + ".<br> Zip Code"
  + $("#adb4").val()
  + ".</div>");

}

function mktplcsubmit()
{
$("#receipt").show();
$("#receipt").html("<div class='container'>");

if(item1ct > 0)
{
$("#receipt").append(item1ct + " First item " + (item1ct * 10) + "$" + "<br>");
}

if(item2ct[0] > 0)
{
$("#receipt").append(item2ct[0] + " Second Item (Small) " + (item2ct[0] * 10) + "$" + "<br>");

}
if(item2ct[1] > 0)
{
  $("#receipt").append(item2ct[1] + " Second Item (Medium) " + (item2ct[1] * 10) + "$" + "<br>");

}
if(item2ct[2] > 0)
{
$("#receipt").append(item2ct[2] + "  Second Item (Large) " + (item2ct[2] * 10 ) + "$" + "<br>");

}
if(item3ct > 0)
{
$("#receipt").append(item3ct + " Third Item " + (item3ct * 20) + "$" + "<br>");
}
var subtotal = (((item1ct * 10) + (item2ct[0] * 10) + (item2ct[1] * 10) + (item2ct[2] * 10) + (item3ct * 10)));
var tax = subtotal * .05;

 $("#receipt").append("<div class='totals'> <hr> SUBTOTAL - " + subtotal + "$" + "<br>");
 $("#receipt").append("TAX - " + tax + "$" + "<br>");
 $("#receipt").append("TOTAL - " + (subtotal + tax) + "$" + "</div> </div>");
}
