$(document).ready(function () {
    $('.showMenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('open');
    });
    $('.productItem button').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('bg-orange');
    });
    $('.productItem .fa-heart').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});