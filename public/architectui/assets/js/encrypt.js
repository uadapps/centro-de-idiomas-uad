
$("#password_login").change(function () {
    var pass = $('#password_login').val();
    $("#password_login_cifrado").val(encodeURIComponent(btoa(pass)));
});

$("#password").change(function () {
    var pass = $('#password').val();
    $("#password_nuevo").val(encodeURIComponent(btoa(pass)));
});

$("#password_act").change(function () {
    var pass = $('#password_act').val();
    $("#password_nuevo_act").val(encodeURIComponent(btoa(pass)));
});