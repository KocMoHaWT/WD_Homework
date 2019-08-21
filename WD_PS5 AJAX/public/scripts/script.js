$(document).ready(() => {
    $('#chat').hide();
    $('#enter').click((e) => {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "../private/php/script.php",
            data: {name: $('#name').val(), password: $('#password').val()},
            success: function (data) {
                $('#form').hide();
                $('#chat').show();
                refresh();
            },
            error: function (err) {
                console.log(err);
            }
        })
    })


    function appendMessages(data) {
        $('#chat__window').empty();
        let scroll = $('#chat__window');
        let arr = JSON.parse(data);
        for (let i = 0; i < arr.length; i++) {
            let message = `<li class="massage">[${arr[i].currentDate}] ${arr[i].name}: ${arr[i].message}</li>`;
            $('#chat__window').append(message);
        }
        scroll.scrollTop(scroll[0].scrollHeight);
    }

    function refresh() {
        $.ajax({
            method: 'POST',
            url: '../private/php/script.php',
            data: {},
            success: function (data) {
                appendMessages(data);
                setTimeout(() => {refresh()},3000);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
})