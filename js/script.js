$(document).ready(function() {
    //--------------automaticlly scrolling down -------//
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
            scrollTop: 0
        }, 1000);
    })
    //--------------automaticlly scrolling down -------//

    //--------------showing the project detailes -------//
    $('#Musicloud').click(function() {
        $('.project_1').slideDown('fast')
    })
    $('#jom-terry').click(function() {
        $('.project_2').slideDown('fast')
    })
    $('#skema').click(function() {
        $('.project_3').slideDown('fast')
    })
    $('#porfolioGame').click(function() {
        $('.project_4').slideDown('fast')
    })

    //--------------showing the project detailes -------//




    //--------btton to close the project details ------//

    $('#close').click(function() {
        $('.project_1').slideUp('fast')
    })
    $('#close-2').click(function() {
        $('.project_2').slideUp('fast')
    })
    $('#close-3').click(function() {
        $('.project_3').slideUp('fast')
    })
    $('#close-4').click(function() {
        $('.project_4').slideUp('fast')
    })
    //--------------button to close the project details -------//


    //--------------burger menu -------//

    $('.burger-container').click(function() {
        $('.nav-btns').slideToggle()
    })

    var mouse_is_inside = false;
    $('.burger-container').click(function() {
        mouse_is_inside = true;
    }, function() {
        mouse_is_inside = false;
    });
    var $navBtns = $('.nav-btns');
    $("body").mouseup(function() {

        if (!mouse_is_inside && window.innerWidth < 768) $navBtns.hide();
    });
    $(window).resize(function() {
        $navBtns.removeAttr('style')
    })
    //--------------burger menu -------//

})
