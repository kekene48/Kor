document.getElementsByClassName('nav')[0].addEventListener("click", navbar);
document.getElementsByClassName('nav-x')[0].addEventListener("click", navbar);

function navbar() {
  var x = document.getElementsByClassName('header__search-bar')[0];
  var y = document.getElementsByClassName('nav__list')[0];
  var m = document.getElementsByClassName('nav-btn')[0];
  var n = document.getElementsByClassName('nav-btn-1')[0];
  var o = document.getElementsByClassName('nav-btn-3')[0];
  var k = document.getElementsByClassName('nav')[0];
  var p = document.getElementsByClassName('nav-x')[0];


  if (x.style.display === "block") {
    x.style.display = "none";

  } else {
    x.style.display = "block";
  }

  if (x.style.display === "none") {
    y.style.visibility = "visible";
    k.style.display = "none";
    p.style.display = "block";
  } else {
    y.style.visibility = "hidden";
  }
}
