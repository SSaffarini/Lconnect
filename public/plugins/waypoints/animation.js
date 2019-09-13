var nWidth =$(window).width();

$(document).ready(function(){

    if(nWidth>=992) {

        $('.bounce').css('opacity', 0);

        $('.fadeup').css('opacity', 0);

        $('.fadein').css('opacity', 0);

        $('.fadedown').css('opacity', 0);

        $('.fadeleft').css('opacity', 0);

        $('.faderight').css('opacity', 0);

        $('.rollin').css('opacity', 0);

        $('.zoomin').css('opacity', 0);

    }

});



if(nWidth>=992) {

    $('.bounce').waypoint(function () {

        $(this).addClass('bounceIn');

    }, {offset: '90%'});



    $('.fadein').waypoint(function () {

        $(this).addClass('fadeIn');

    }, {offset: '90%'});



    $('.fadeup').waypoint(function () {

        $(this).addClass('fadeInUp');

    }, {offset: '90%'});



    $('.fadedown').waypoint(function () {

        $(this).addClass('fadeInDown');

    }, {offset: '90%'});



    $('.faderight').waypoint(function () {

        $(this).addClass('fadeInRight');

    }, {offset: '90%'});



    $('.fadeleft').waypoint(function () {

        $(this).addClass('fadeInLeft');

    }, {offset: '90%'});

    $('.rollin').waypoint(function () {

        $(this).addClass('rollIn');

    }, {offset: '90%'});

}