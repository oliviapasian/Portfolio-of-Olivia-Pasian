// Button to auto-scroll
$("button").click(function () {
  $('html,body').animate({
    scrollTop: $(".grid").offset().top
  },
    'slow');
});