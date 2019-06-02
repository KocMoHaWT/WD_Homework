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
        info: "Бараш",
        src:"./images/Stevie_Feliciano.png"
    }];


$(document).ready(() => {
    const li = '<li></li>';
    const select = $('.select');



    array.map(function(element){
        select.append($(li)
            .addClass('list__block hide')
            .attr('value',element.info)
            .html(`<img src="${element.src}" alt="${element.info}"> ${element.info}`));
    });
    $('li:last-child').css('border','none');

    $('#option').click(function () {
        $('li').not(this).toggleClass('hide');
    })


    $('li').on('mouseover mouseout',function () {
        $(this).toggleClass('picked');
    })

    $('li:not(:first-child)').click(function () {
        $('li').not(this).toggleClass('hide');
    })
});