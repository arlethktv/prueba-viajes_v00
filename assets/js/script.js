
//Navbar
$(document).scroll( function(e){
  const y = $("html").scrollTop();
  if(y > 300) $("nav").addClass("nav-black")
  else $("nav").removeClass("nav-black")
})


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

 
//Tooltip redes sociales
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip({
      placement : 'right'
  });
});


var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
