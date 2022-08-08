$(document).ready(function() {
    let tries = 3;
    let whatsappClicks = 0;
    const whatsappNeededClicks = 10;

    $('.result__btn-whatsapp').attr('href', `https://wa.me/?text=${window.location.href}`);

    $('.question__checkbox').click(function(event) {
        event.preventDefault();
        $('.active').removeClass('active');
        $(this).find('.question__checked').addClass('active');
    })

    $('.present__el').click(function(event) {
        event.preventDefault();
        if(!$(this).find('.present__img').hasClass('opened')) {
            $(this).find('.present__img').attr('src', 'img/present_opened.png').addClass('opened')
            if(tries > 1) {
                tries--;
                $('.active-page').removeClass('active-page');
                $('.present-page_empty').addClass('active-page');
            } else {
                $('.active-page').removeClass('active-page');
                $('.present-page_correct').addClass('active-page');
            }
            $('.present__tries-number').html(tries);
        }
    })

    $('.next__btn').click(function(event) {
        event.preventDefault();
        if(document.querySelectorAll('.active').length === 0 && $(this).hasClass('question__btn')) {
            return 0;
        }
        $('.active').removeClass('active')
        $('.active-page').removeClass('active-page');
        $($(this).attr('data-to')).addClass('active-page');

        if($(this).attr('data-to') === '.question__loader') {
            setTimeout(() => {
                $('.active-page').removeClass('active-page');
                $('.present-page').addClass('active-page');
            }, 500)
        }
    })

    $('.result__btn-whatsapp').click(function(event) {
        if(whatsappClicks < 10) {
            whatsappClicks++;
            $('.progress-bar').css('width', String(whatsappClicks / whatsappNeededClicks * 100) + '%');
            $('.progress-percent').html(whatsappClicks / whatsappNeededClicks * 100);
        }
        if(whatsappClicks === whatsappNeededClicks) {
            $('.result__btn-next').prop('disabled', false);
            $('.result__btn-next').css('color', '#fff');
            $('.next__img').attr('src', 'img/icons/next_white.svg')
        }
    })
})