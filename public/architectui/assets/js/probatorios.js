function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
}

$(document).ready(function () {
    tipo_probatorio();
    grupos();
    $("#mostrar_fecha").hide();
});

function tipo_probatorio() {
    $.ajax({
        url: "/Probatorios/tipo_probatorio",
        type: "POST",
        success: function (data) {
            $(".tipo_probatorio").html(data);
        }
    });
}

function grupos() {
    $.ajax({
        url: "/Probatorios/grupos",
        type: "POST",
        success: function (data) {
            $(".grupo").html(data);
        }
    });
}

function tipo_probatorio_act() {
    return $.ajax({
        url: "/Probatorios/tipo_probatorio",
        type: "POST",
        success: function (data) {
            $(".tipo_probatorio_act").html(data);
        }
    });
}

function grupos_act() {
    return $.ajax({
        url: "/Probatorios/grupos",
        type: "POST",
        success: function (data) {
            $(".grupo_act").html(data);
        }
    });
}

function modal_actualizar(id) {
    $.ajax({
        url: "/Probatorios/modal_actualizar",
        type: "POST",
        data: {
            id
        },
        success: function (data) {

            data = JSON.parse(data);

            $('#id_act').val(data.id);
            $('#nombre_probatorio_act').val(data.nombre);
            $('#caracteristica_probatorio_act').val(data.caracteristica);

            tipo_probatorio_act().then(function () {
                $('#tipo_probatorio_act option').filter(function (index) {
                    return $(this).text() === data.tipo;
                }).prop("selected", true);
            });

            grupos_act().then(function () {
                $('#grupo_act option').filter(function (index) {
                    return $(this).text() === data.grupo;
                }).prop("selected", true);
            });

            if (data.tipo == 'Temporal') {
                $("#mostrar_fecha_act").show();
                $('#fecha_vencimiento_act').val(data.fecha_vencimiento);
            } else {
                $('#mostrar_fecha_act').hide();
            }

            checkbox = data.activo;

            if (checkbox == 1) {
                checkbox = true;
            } else {
                checkbox = false;
            }

            $('#activo_act').prop("checked", checkbox);
            $('#modal_actualizar').modal('show');
        },
        error: function () {
        },
    });
}

$(document).on("change", "#tipo_probatorio", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/Probatorios/fechas",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {

                    data = JSON.parse(data);

                    if (data == 2) {
                        $("#mostrar_fecha").show();
                    } else {
                        $("#mostrar_fecha").hide();
                        $('#fecha_vencimiento').val('');
                    }
                }
            });
        });
    })
});

$(document).on("change", "#tipo_probatorio_act", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/Probatorios/fechas",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {

                    data = JSON.parse(data);

                    if (data == 2) {
                        $("#mostrar_fecha_act").show();
                    } else {
                        $("#mostrar_fecha_act").hide();
                        $('#fecha_vencimiento_act').val('');
                    }
                }
            });
        });
    })
});