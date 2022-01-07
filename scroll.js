window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("rodaboi");
  image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
}

let image = document.getElementById("rodaboi");
image.onclick = function() {
  window.location.href = this.id + 'index.html';
  alert("Flash 9.0.115 is required to enjoy this site.");};
  
