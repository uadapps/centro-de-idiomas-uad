function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
}

$(document).ready(function () {
    campus();
    roles();
	consultar_usuarios();
});

function campus() {
    $.ajax({
        url: "/Usuarios/campus",
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
                url: "/Usuarios/empleados",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    $(".empleados").html(data);
                }
            });
        });
    })
});

$(document).on("change", "#empleado", function () {
    $("option:selected", this).each(function () {

        var id = $(this).val();

        $(document).ready(function () {
            $.ajax({
                url: "/Usuarios/usuario",
                type: "POST",
                data: {
                    id
                },
                success: function (data) {
                    data = JSON.parse(data);
                    $("#usuario").val(data);
                }
            });
        });
    })
});

function roles() {
    $.ajax({
        url: "/Usuarios/roles",
        type: "POST",
        success: function (data) {
            $(".roles").html(data);
        }
    });
}

function roles_act() {
    return $.ajax({
        url: "/Usuarios/roles",
        type: "POST",
        success: function (data) {
            $(".roles_act").html(data);
        }
    });
}

function modal_actualizar(id) {
    $.ajax({
        url: "/Usuarios/modal_actualizar",
        type: "POST",
        data: {
            id
        },
        success: function (data) {

            data = JSON.parse(data);

            roles_act().then(function () {
                $('#rol_act option').filter(function (index) {
                    return $(this).text() === data.rol;
                }).prop("selected", true);
            });

            checkbox = data.activo;

            if (checkbox == 1) {
                checkbox = true;
            } else {
                checkbox = false;
            }

            $('#id_act').val(data.id);
            $('#usuario_act').val(data.usuario);
            $('#password_hidden').val(data.password);
            $('#correo_act').val(data.correo);
            $('#activo_act').prop("checked", checkbox);
            $('#modal_actualizar').modal('show');
        },
        error: function () {
        },
    });
}

function consultar_usuarios() 
{
	id_campus = $("#select_campus option:selected").val();
	id_rol = $("#select_roles option:selected").val();
	
    return $.ajax({
        url: "/Usuarios/consultar_usuarios",
        type: "POST",
		data: {id_campus, id_rol},
        success: function (data) {
            $("#tabla_usuarios").html(data);
        }
    });
}


