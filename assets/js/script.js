
$(document).scroll( function(e){
  const y = $("html").scrollTop();
  if(y > 600) $("nav").addClass("navbar-black")
  else $("nav").removeClass("navbar-black")
})


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

 
