//---------------------------TABS -------------------------------------//
$(document).ready(function(){
	$(".tab_content").hide(); //ocultar todo
	$("ul.tabs li:first").addClass("active").show(); //activar el primer tab
	$(".tab_content:first").show(); //mostrar el contenido del tab

	$("ul.tabs li").click(function(){
		
		$("ul.tabs li").removeClass("active"); //eliminar clase active
		$(this).addClass("active"); //adicionar clase activa
		$(".tab_content").hide(); //ocultar el contenido del tab

		var activeTab=$(this).find("a")attr("href"); //buscar el atributo para identificar el tab y el contenido
		$(activeTab).fadeIn(); //efecto de transicion
		return false;
			
		});
	});
//--------------------------------SLIDER--------------------------------//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}