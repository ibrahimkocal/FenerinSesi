$(function(){
  $('#slider1').carousel({
      interval: 4000
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var isActive = this.classList.contains("active");
    
    // Tüm accordionların aktiflik durumunu kaldır
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
    }
    
    if (!isActive) {
      // Tıklanan accordion'ı aç
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function flipCard(element) {
  element.classList.add("hover");
}

function unflipCard(element) {
  element.classList.remove("hover");
}
