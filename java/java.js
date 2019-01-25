function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu-area") {
    x.className += " responsive";
  } else {
    x.className = "menu-area";
  }
}