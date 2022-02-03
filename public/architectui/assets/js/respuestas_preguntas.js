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

function limpiar_modal() {
    $('#form_respuesta_ucontenido').trigger("reset");
}

function modal_respuesta_ucontenido(id) {
	$('#id_pregunta').val(id);
    $('#modal_respuesta_ucontenido').modal('show');
}