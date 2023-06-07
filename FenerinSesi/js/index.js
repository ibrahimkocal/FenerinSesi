let title = document.title;
let position = 0;
let speed = 200; // Animasyon hızı (milisaniye cinsinden)

function marqueeTitle() {
    document.title = title.substring(position) + title.substring(0, position);
    position++;
    if (position > title.length) {
    position = 0;
  }
}
setInterval(marqueeTitle, speed);

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

$(document).ready(function() {
  $('.nav-link.dropdown-toggle').click(function(e) {
      e.preventDefault();
      var $dropdownMenu = $(this).next('.dropdown-menu');
      $dropdownMenu.slideToggle();
  });
});

$(function(){
  $('#slider1').carousel({
      interval: 4000
  });
});

$(document).ready(function(e){
  $('.btn').on('mouseenter', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
  })
  $('.btn').on('mouseout', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x})
  })
})

function guncelTarihVeSaat() {
  var tarih = new Date();

  var gun = tarih.getDate();
  var ay = tarih.getMonth() + 1;
  var yil = tarih.getFullYear();

  var saat = tarih.getHours();
  var dakika = tarih.getMinutes();
  var saniye = tarih.getSeconds();

  gun = gun < 10 ? "0" + gun : gun;
  ay = ay < 10 ? "0" + ay : ay;

  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  var tarihSaat = "Tarih ve Saat: " + gun + "/" + ay + "/" + yil + "";
  tarihSaat += " "+ " "+ saat + ":" + dakika + ":" + saniye;

  document.getElementById("tarihSaat").innerHTML = tarihSaat;
}

setInterval(guncelTarihVeSaat, 1000);

function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
      if(!container.hasClass('active')){
          container.addClass('active');
          evt.preventDefault();
      }
      else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
          container.removeClass('active');
          // clear input
          container.find('.search-input').val('');
      }
}