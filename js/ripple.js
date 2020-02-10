$(function () {
    'use strict';

    const mobileSupport = navigator.userAgent.toLowerCase();

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    };


    if (mobileSupport.match(/mobile/i)) {
        $('.ripple').on('touchstart', function (e) {

            //appending an element with a class name "btn-ripple"
            var rippleEl = $('<span class="ripple-an"></span>').appendTo(this);

            //getting the button's offset position
            var pos = $(this).offset();

            //get the button's width and height
            var width = $(this).outerWidth();
            var height = $(this).outerHeight();

            var posX = e.touches[0].pageX - pos.left;
            var posY = e.touches[0].pageY - pos.top;

            var rippleStyle = new RippleStyle(width, height, posX, posY);
            rippleEl.css(rippleStyle);
        });
    } else {
        $('.ripple').on('mousedown', function (e) {

            //appending an element with a class name "btn-ripple"
            var rippleEl = $('<span class="ripple-an"></span>').appendTo(this);

            //getting the button's offset position
            var pos = $(this).offset();

            //get the button's width and height
            var width = $(this).outerWidth();
            var height = $(this).outerHeight();

            var posX = e.pageX - pos.left;
            var posY = e.pageY - pos.top;

            var rippleStyle = new RippleStyle(width, height, posX, posY);
            rippleEl.css(rippleStyle);
        })
    }

    $('.ripple').on('mouseup touchend touchcancel mouseout', '.ripple-an', function () {
        $(this).fadeOut(600, () => {
            $(this).remove()
        });
    });
    $('.ripple-an').on('mouseup touchend touchcancel mouseout', function () {
        $(this).fadeOut(600, () => {
            $(this).remove()
        });
    });

    $("*").not('.ripple,.ripple-an').on('mouseup touchmove', function () {
        $('.ripple-an').fadeOut(600, () => {
            $('.ripple-an').remove()
        });
    });
});