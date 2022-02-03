function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
}

function modal_actualizar(id) {
    $.ajax({
        url: "/Grupos_Trabajo/modal_actualizar",
        type: "POST",
        data: {
            id
        },
        success: function (data) {

            data = JSON.parse(data);

            $('#id_act').val(data.id);
            $('#nombre_act').val(data.nombre);
            $('#modal_actualizar').modal('show');
        },
        error: function () {
        },
    });
}


