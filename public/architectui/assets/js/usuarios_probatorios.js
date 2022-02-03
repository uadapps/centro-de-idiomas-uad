function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
    $('#form_estado').trigger("reset");
}

$(document).ready(function () {
    grupos();
    campus();
    estados_probatorios();
});

function grupos() {
    return $.ajax({
        url: "/UsuariosProbatorios/grupos",
        type: "POST",
        success: function (data) {
            $(".grupo").html(data);
        }
    });
}

$(document).on("change", "#grupo", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/UsuariosProbatorios/probatorios",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".probatorio").html(data);
                }
            });
        });
    })
});

function campus() {
    return $.ajax({
        url: "/UsuariosProbatorios/campus",
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
                url: "/UsuariosProbatorios/usuarios_contenido",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".usuario_contenido").html(data);
                }
            });
        });

        $(document).ready(function () {
            $.ajax({
                url: "/UsuariosProbatorios/usuarios_probatorio",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".usuario_probatorio").html(data);
                }
            });
        });
    })
});

function modal_estado(id) {
    $('#id_estado').val(id);
    $('#modal_estado').modal('show');
}

function estados_probatorios() {
    $.ajax({
        url: "/UsuariosProbatorios/estados_probatorios",
        type: "POST",
        success: function (data) {
            $(".estados_probatorios").html(data);
        }
    });
}

function usuarios_contenido(id) {
    return $.ajax({
        url: "/UsuariosProbatorios/usuarios_contenido",
        type: "POST",
        data: {
            id
        },
        success: function (data) {
            $(".usuario_contenido").html(data);
        }
    });
}

function usuarios_probatorio(id) {
    return $.ajax({
        url: "/UsuariosProbatorios/usuarios_probatorio",
        type: "POST",
        data: {
            id
        },
        success: function (data) {
            $(".usuario_probatorio").html(data);
        }
    });
}

function probatorios(id) {
    return $.ajax({
        url: "/UsuariosProbatorios/probatorios",
        type: "POST",
        data: {id},
        success: function (data) {
            $(".probatorio").html(data);
        }
    });
}

function modal_actualizar(id) {
    $.ajax({
        url: "/UsuariosProbatorios/modal_actualizar",
        type: "POST",
        data: {
            id
        },
        success: async function (data) {

            data = JSON.parse(data);

            let id_grupo = await grupos().then(function (){
                $('#grupo option').filter(function (index) {
                    return $(this).text() === data.grupo;
                }).prop("selected", true);
                return $('#grupo').val();
            });

            probatorios(id_grupo).then(function () {
                $('#probatorio option').filter(function (index) {
                    return $(this).text() === data.probatorio;
                }).prop("selected", true);
            });

            let id_campus = await campus().then(function () {
                $('#campus option').filter(function (index) {
                    return $(this).text() === data.campus;
                }).prop("selected", true);
                return $('#campus').val();
            });

            usuarios_contenido(id_campus).then(function () {
                $('#usuario_contenido_act option').filter(function (index) {
                    return $(this).text() === data.solicita;
                }).prop("selected", true);
            });

            usuarios_probatorio(id_campus).then(function () {
                $('#usuario_probatorio_act option').filter(function (index) {
                    return $(this).text() === data.responsable;
                }).prop("selected", true);
            });

            $('#id_act').val(data.id);
            $('#id_prob').val(data.id_probatorio);
            $('#modal_actualizar').modal('show');
        },
        error: function () {
            alert("Error");
        },
    });
}

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
