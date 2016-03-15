// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {


/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.photos').magnificPopup({
    delegate: 'a',
    type: 'image',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    modal: false,
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

$('.offerInfo_slider').slick({
  arrows: false,
  dots: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  easing: 'ease-out',
  cssEase: 'ease-out'
});


$('ul.sub').parent().addClass('hasSub');

});




