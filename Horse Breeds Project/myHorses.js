$(document).ready(function(){ 
  
  $(function(){
 
    // aHorses());
    //cHorses());
    
$("#aHorse").on('click', function aHorses(){
  var horse = ["<a href='shetland.html' target='_blank'>American Shetland</a>", "<a href='Appaloosa.html' target='_blank'>Appaloosa</a>", "<a href='Azteca.html' target='_blank'>Azteca</a>"];
  const horseLink = ["#American", "https://www.ctv.ca/Home", "https://www.economist.com"];
  
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
    
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
  
    document.getElementById("Breeds").innerHTML = horseList;
    
 });

$("#cHorse").on('click', function cHorses(){
  var horse = ["<a href='Criollo.html' target='_blank'>Criollo</a>"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#fHorse").on('click', function fHorses(){
  var horse = ["Falabella"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#gHorse").on('click', function gHorses(){
  var horse = ["Galiceno"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#mHorse").on('click', function mHorses(){
  var horse = ["Mangalarga", "Missouri Fox Trotter", "Morgan"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#pHorse").on('click', function pHorses(){
  var horse = ["Pasa Fino", "Peruvian Stepping Horse", "Pony of the Americas"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#qHorse").on('click', function qHorses(){
  var horse = ["Quarter Horse"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#sHorse").on('click', function sHorses(){
  var horse = ["Saddlebred", "Standardbred"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#tHorse").on('click', function tHorses(){
  var horse = ["Tennessee Walking Horse"];
   var horseList = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseList += "<li>" + horse[i] + "</li>";
  }
   horseList += "</ul>";
document.getElementById("Breeds").innerHTML = horseList;
});

$("#aType").on('click', function aTypes(){
  var horse = ["Albino", "American Performance Horse", "American Warmblood"];
   var horseType = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseType += "<li>" + horse[i] + "</li>";
  }
   horseType += "</ul>";
document.getElementById("listTypes").innerHTML = horseType;
});

$("#cType").on('click', function cTypes(){
  var horse = ["Canadian Cutting Horse"];
   var horseType = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseType += "<li>" + horse[i] + "</li>";
  }
   horseType += "</ul>";
document.getElementById("listTypes").innerHTML = horseType;
});

$("#pType").on('click', function pTypes(){
  var horse = ["Palomino", "Pinto", "Polo Pony"];
   var horseType = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseType += "<li>" + horse[i] + "</li>";
  }
   horseType += "</ul>";
document.getElementById("listTypes").innerHTML = horseType;
});

$("#mType").on('click', function mTypes(){
  var horse = ["Mustang"];
   var horseType = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseType += "<li>" + horse[i] + "</li>";
  }
   horseType += "</ul>";
document.getElementById("listTypes").innerHTML = horseType;
});

$("#rType").on('click', function rTypes(){
  var horse = ["Rocky Mountain Pony"];
   var horseType = "<ul class='nav nav-pills nav-stacked list-unstyled'>";
  for(var i=0; i<horse.length; i++){
   horseType += "<li>" + horse[i] + "</li>";
  }
   horseType += "</ul>";
document.getElementById("listTypes").innerHTML = horseType;
});
  });
});