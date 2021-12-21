$(document).ready(function() {
    $('.menu__icon').click(function(event) {
        $('.menu__icon,.menu__body,.menu__logo').toggleClass('active');
    });
});
/*Эта функция используется для сознадия меня бургера.*/
$(document).ready(function() {
    $('.slider__body').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function ibg() {
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

/* Этот код предназначен для установки картинки как бекграунд без CSS. Задаем блоку с картинкой 
класс Ibg и прописываем дополнительные параменты в CSS*/