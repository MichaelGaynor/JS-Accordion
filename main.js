$(function(){
  $('.accordion-toggle').on('click', function(){
    $('.content').hide();
    $(this).next('.content').show();
  });
});