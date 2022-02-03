function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
}

$(document).ready(function () {
    campus();
});

function campus() {
    $.ajax({
        url: "/UsuariosContenido/campus",
        type: "POST",
        success: function (data) {
            $(".campus").html(data);
        }
    });
}

$(document).on("change", "#campus", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/UsuariosContenido/usuarios_contenido",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".usuario").html(data);
                }
            });
        });
    })
});

$(document).on("change", "#usuario", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/UsuariosContenido/grupos_trabajo",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".grupo").html(data);
                }
            });
        });
    })
});

function modal_actualizar(id) {
    $.ajax({
        url: "/UsuariosContenido/modal_actualizar",
        type: "POST",
        data: {
            id
        },
        success: function (data) {

            data = JSON.parse(data);

            var id = [];

            data.forEach(arreglo => {
                id.push(arreglo.id_grupo_trabajo);
            });

            grupos_trabajo().then(function () {
                $(".grupo_act").val(id).trigger("change");
            });

            $('#usuario_act').val(data[0].id_usuario);
            $('#modal_actualizar').modal('show');
        },
        error: function () {
        },
    });
}

function grupos_trabajo() {
    return $.ajax({
        url: "/UsuariosContenido/grupos_trabajo_todos",
        type: "POST",
        success: function (data) {
            $(".grupo_act").html(data);
        }
    });
}