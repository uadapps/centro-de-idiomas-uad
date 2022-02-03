function limpiar_modal() {
    $('#form_estado').trigger("reset");
}

$(document).ready(function () {
    estados_probatorios();
});

function modal_estado(id) {
    $('#id_estado').val(id);
    $('#modal_estado').modal('show');
}

function estados_probatorios() {
    $.ajax({
        url: "/PreAprobados/estados_probatorios",
        type: "POST",
        success: function (data) {
            $(".estados_probatorios").html(data);
        }
    });
}

function probatorios(id) {
    return $.ajax({
        url: "/PreAprobados/probatorios",
        type: "POST",
        data: {id},
        success: function (data) {
            $(".probatorio").html(data);
        }
    });
}

function archivo(id) {
    $.ajax({
        url: "/PreAprobados/archivo",
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
