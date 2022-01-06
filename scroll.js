window.onscroll = function() {scrollRotate()};

function scrollRotate() {
  var navimg = document.getElementById("rodaboi");<br/>
  navimg.style.transform = "rotate("+ (window.pageYOffset/5) + "deg)"}