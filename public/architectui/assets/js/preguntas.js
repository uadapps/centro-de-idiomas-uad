function limpiar_modal() {
    $('#form_crear').trigger("reset");
    $('#form_actualizar').trigger("reset");
}

$(document).ready(function () 
{
    grupos();
    consultar_preguntas();
});

function grupos() 
{
    return $.ajax({
        url: "/Probatorios/grupos",
        type: "POST",
        success: function (data) {
            $(".grupo").html(data);
        }
    });
}

function consultar_preguntas() 
{
	id_grupo_trabajo = $("#select_grupo_trabajo option:selected").val();
	
    return $.ajax({
        url: "/Preguntas/consultar_preguntas",
        type: "POST",
		data: {id_grupo_trabajo},
        success: function (data) {
            $("#tabla_preguntas").html(data);
        }
    });
}

function consultar_indicadores() 
{
	id = $("#grupo option:selected").val();
	
    return $.ajax({
        url: "/Preguntas/consultar_indicadores",
        type: "POST",
		data: {id},
        success: function (data) {
            $(".indicador").html(data);
        }
    });
}

function consultar_indicadores_act() 
{
	id = $("#grupo_act option:selected").val();
	
    return $.ajax({
        url: "/Preguntas/consultar_indicadores",
        type: "POST",
		data: {id},
        success: function (data) {
            $(".indicador_act").html(data);
        }
    });
}

function consultar_indicadores_edit(id) 
{
    return $.ajax({
        url: "/Preguntas/consultar_indicadores_edit",
        type: "POST",
		data: {id},
        success: function (data) {
            $(".indicador_act").html(data);
        }
    });
}

function modal_actualizar(id) 
{
    $.ajax({
        url: "/Preguntas/consultar_pregunta",
        type: "POST",
        data: {id},
        success: function (data) 
		{
            $('#modal_actualizar').modal('show');
            data = JSON.parse(data);

            $('#id_act').val(data.id);

            grupos().then(function () {
                $('#grupo_act option').filter(function (index) {
                    return $(this).text() === data.grupo;
                }).prop("selected", true);
            });
			
			consultar_indicadores_edit(data.id_grupo_trabajo).then(function () {
                $('#indicador_act option').filter(function (index) {
                    return $(this).text() === data.indicador;
                }).prop("selected", true);
            });
            
			$('#pregunta_act').val(data.pregunta);
			
        },
        error: function () {
        },
    });
}

function modal_asignar(id) 
{
    $.ajax({
        url: "/Preguntas/probatorios_consultar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
            $("#lista_probatorios").html(data);
            $('#modal_asignar').modal('show');
        },
        error: function () {},
    });
}

function asignar_probatorio(id_pregunta, id_probatorio)
{
	var chk = 'chk' + id_probatorio;
	var val = document.getElementById(chk).checked;
	
	$.ajax({
        url: "/Preguntas/asignar_probatorio",
        type: "POST",
        data: {id_pregunta, id_probatorio, val},
        success: function (data) 
		{
			if(val == true)
			{
				new PNotify({
					text: 'Probatorio asignado correctamente.',
					type: 'success',
					styling: 'bootstrap3'
				});
			}
			else
			{
				new PNotify({
					text: 'Probatorio desasignado correctamente.',
					type: 'danger',
					styling: 'bootstrap3'
				});
			}
        },
        error: function () {},
    });
}