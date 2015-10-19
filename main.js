// $('.content').hide();

// $(function(){
//   $('.accordion-toggle').on('click', function(){
//     $('.content').hide('slow');
//     $(this).next('.content').show('slow');
//   });
// });

// $(function(){

// })
$(function(){
  $('.accordion-toggle.b').on('click', function(){
    $('.content').removeClass('on').addClass('off');
    $('.content.b').removeClass('off').addClass('on');
  });
});

$(function(){
  $('.accordion-toggle.a').on('click', function(){
    $('.content').removeClass('on').addClass('off');
    $('.content.a').removeClass('off').addClass('on');
  });
});

$(function(){
  $('.accordion-toggle.c').on('click', function(){
    $('.content').removeClass('on').addClass('off');
    $('.content.c').removeClass('off').addClass('on');
  });
});