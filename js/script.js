// Scroll to top 

$( document ).ready(function() {
    $(".sidebar").click(function(){
        $(".sidebar .left-box").toggle("slide");
      });
    $(".backtotop").click(function() {
        $(window).scrollTop(0);
    });

    $('.spotlight-slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
    });

    $(".slick-prev").click(function () {
		$(".spotlight-slide").slick("slickPrev");
	});
	$(".slick-next").click(function () {
		$(".spotlight-slide").slick("slickNext");
	});

  // mobileMenu

  let one = document.getElementById("menu-icon");
  one.addEventListener("click", function() {
      document.getElementById("mobile-menu").classList.add("active")
      for(x of document.getElementsByClassName("overlay")){
          x.classList.add("active")
      }
  })

  $('.overlay').on('click', function(){
    $(this).removeClass('active')
    $('#mobile-menu').removeClass('active')
  })
  let two = document.getElementsByClassName("close");
  for(x of two){
      x.addEventListener('click',()=>{
          for(x of document.getElementsByClassName("overlay")){
              x.classList.remove("active")
          }
          document.getElementById("mobile-menu").classList.remove("active")
      })
  }

});

