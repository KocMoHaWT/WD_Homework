const array = [
    {
        info: "Чарлик",
        src:"./images/Christian.png"
    },
    {
        info: "Крош",
        src:"./images/Elliot_Fu.png"
    },
    {
        info: "Нюша",
        src:"./images/Jenny_Hess.png"
    },
    {
        info: "Совунья",
        src:"./images/Stevie_Feliciano.png"
    }];
const select = $('.select');
$(document).ready(() => {
    let flag = false;
    const li = '<li></li>';
    array.map(function(element){
        let info = element.info;
        select.append($(li)
            .addClass('list__block hide')
            .attr('value',info)
            .html(`<img src="${element.src}" alt="${info}"> ${info}`));
    });
    $('li:last-child').css('border','none');

    $('li').on('mouseover mouseout',function () {
        $(this).toggleClass('picked');
    })

    $('li').on('click', function () {
        $('.show').removeClass('show');
        $(this).addClass('show');
        $('li').not(this).toggleClass('hide');
    });

    $(document).on('click', function (e) {
      if(!$(e.target).hasClass('list__block') ) {
          $('li').not($('.show')).addClass('hide');
      }
    });
});