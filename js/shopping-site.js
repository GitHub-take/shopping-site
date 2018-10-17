$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplaySpeed : 1000,
    autoplay: true
  });
  
  $('#menu_icon').click(function() {
    $('#menu').slideToggle();
  });
  
  $('#search_text').on('click', function() {
    $(this).val('');
  });

});

$(window).load(function() {
  $('.img_list img').click(function() {
    var img_src = $(this).attr("src");
    $('.display_img img').attr("src", img_src);
  });
});