// Back end stuff

function Pet(name, age, animal, personality, sign, ownerName, ownerEmail) {
  this.name = name;
  this.age = age;
  this.animal = animal;
  this.status = true;
  this.personality = personality;
  this.sign = sign;
  this.ownerName = ownerName;
  this.ownerEmail = ownerEmail;
}



// Front End jam
$(document).ready(function() {
  $("div#adoptee-page form").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputAge = parseInt($("input#age").val());
    var inputAnimal = $("input#animal").val();
    var inputPersonality = $("input#personality").val();
    var inputSign = $("input#sign").val();
    var inputOwnerName = $("input#ownerName").val();
    var inputOwnerEmail = $("input#ownerEmail").val();
  });



  var Pet = new Pet()

















  function navBar() {
    $("div#home-page").hide();
    $("div#adopt-page").hide();
    $("div#adoptee-page").hide();
    $("div#success-page").hide();
  }
  $("button#button-home").click(function() {
    navBar();
    $("div#home-page").show();
  });
  $("button#button-adopt").click(function() {
    navBar();
    $("div#adopt-page").show();
  });
  $("button#button-adoptee").click(function() {
    navBar();
    $("div#adoptee-page").show();
  });
  $("button#button-success").click(function() {
    navBar();
    $("div#success-page").show();
  });
});
