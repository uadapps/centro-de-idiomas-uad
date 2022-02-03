


$("#password").change(function () {
var pass = $('#password').val();
console.log(encodeURIComponent(btoa(pass)));
/*var encriptada = btoa(pass)
$("#password_nuevo_act").val(encriptada);*/
});
