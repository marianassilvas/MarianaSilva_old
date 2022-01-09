window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("rodaboi");
  image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
}

