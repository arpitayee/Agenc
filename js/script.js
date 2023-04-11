$(function(){
  $('.counterup').counterUp({
    delay: 10,
    time: 1000
});
$('.review-part').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
prevArrow:".left",
nextArrow:".right",
    centerMode:true,
    centerPadding:"60px",
   pauseOnHover: false,
  });

})
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $('.navbar').addClass('menu')
  }
  else{$('.navbar').removeClass('menu')
}
})

$(".top-btn").on('click',function(){
$("html,body").animate({scrollTop:0},1000)
})

$(window).on('scroll', function(){
  var scroll = $(this).scrollTop();

  if(scroll>500)
  $('.top-btn').fadeIn(100)
  else{
    $('.top-btn').fadeOut(100)
  }
}


)