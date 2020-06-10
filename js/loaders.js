$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
  
 
  
    $(".modal").modal();
    $(".parallax").parallax();
  
    $(".carousel.carousel-slider.myslider").carousel({
      fullWidth: true,
      indicators: true,
    });
  });
  
  function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
  
    instance.open();
  }