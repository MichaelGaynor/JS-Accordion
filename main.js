$('.content').hide();

$(function(){
  $('.accordion-toggle').on('click', function(){
    $('.content').hide('slow');
    $(this).next('.content').show('slow');
  });
});

// $(function(){
  
// })
