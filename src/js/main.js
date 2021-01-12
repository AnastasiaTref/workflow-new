(function($) {

      $('.sandwich').on('click',function(){ 
          $(this).toggleClass('sandwich--active');
          $('.navbar__list').toggleClass('navbar--active');
      });

})(jQuery);
