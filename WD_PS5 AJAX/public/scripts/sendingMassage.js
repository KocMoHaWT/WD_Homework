$(document).ready(() => {
    $('#sendMessage').click((e) => {
        e.preventDefault();
        sendMessage();
    })

    $('#message').on('keyup',(e) => {
        if(e.keyCode == 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        let message = $('#message').val();
        if(message.length < 1) {
            return;
        }
        $.ajax({
            method: "POST",
            url: "../private/php/handleMessages.php",
            data: {message: message, enamemail: $('#name--session').val()}
        })
        $('#message').val('');
    }

});

