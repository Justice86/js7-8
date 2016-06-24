$(document).ready(function() {
    var tabs = $('#tabs');
    $('.tabs-text', tabs).each(function (i) {
        if (i != 0) $(this).hide(0);
    });
    tabs.on('click', '.menu a', function (e) {

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.menu a', tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-text', tabs).hide(0);
        $(tabId).show();
    });
});
