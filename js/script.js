$(document).ready(function(){
    $("#project").click(function() {
      $('html, body').animate({
        scrollTop: $("#projects-sec").offset().top + 20
      }, 1000);
    })
    $("#skills").click(function() {
      $('html, body').animate({
        scrollTop: $("#skills-sec").offset().top
      }, 1000);
    })
    $("#about").click(function() {
      $('html, body').animate({
        scrollTop: $("#about-sec").offset().top
      }, 1000);
    })
    $("#contact").click(function() {
      $('html, body').animate({
        scrollTop: $("#footer").offset().top
      }, 1000);
    })
    $("#page-top").click(function() {
      $('html, body').animate({
        scrollTop:0
      }, 1000);
    })



    $('#Musicloud').click(function(){
      $('.project_1').slideDown('fast')
    })
    $('#jom-terry').click(function(){
      $('.project_2').slideDown('fast')
    })
    $('#skema').click(function(){
      $('.project_3').slideDown('fast')
    })
    $('.resume').click(function(){
      $('.resume-page').slideDown('fast')
    })





    $('#close').click(function(){
      $('.project_1').slideUp('fast')
    })
    $('#close-2').click(function(){
      $('.project_2').slideUp('fast')
    })
    $('#close-3').click(function(){
      $('.project_3').slideUp('fast')
    })
    $('#close-4').click(function(){
      $('.resume-page').slideUp('fast')
    })

    $('.burger-container').click(function(){
      $('.nav-btns').slideToggle()
    })

    var mouse_is_inside = false;
    $('.burger-container').click(function(){
        mouse_is_inside=true;
    }, function(){
        mouse_is_inside=false;
    });

    $("body").mouseup(function(){
        if(! mouse_is_inside) $('.nav-btns').hide();
    });
})
