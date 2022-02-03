$(document).ready(function () {
    estados_evaluador();
});

function archivo(id) {
    $.ajax({
        url: "/UsuariosProbatorios/archivo",
        type: "POST",
        data: {
            id
        },
        success: function (data) {
            data = JSON.parse(data);
            window.open("/VisorArchivos/archivo?ruta=" + encodeURIComponent(btoa(data.ruta)) + "&ext=" + encodeURIComponent(btoa(data.extension)), "_blank");
        },
        error: function () {
            alert("Error");
        },
    });
}

function modal_estado(id) {
    $('#id').val(id);
    $('#modal_estado').modal('show');
}

function estados_evaluador() {
    $.ajax({
        url: "/PrimeraRevision/estados_evaluador",
        type: "POST",
        success: function (data) {
            $(".estados_evaluador").html(data);
        }
    });
}