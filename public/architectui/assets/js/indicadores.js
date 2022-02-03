$(document).ready(function () 
{
    grupo_trabajo();
});

function grupo_trabajo() 
{
    return $.ajax({
        url: "/Indicadores/grupos_trabajo_consultar",
        type: "POST",
        success: function (data) {
            $(".grupo_trabajo").html(data);
        }
    });
}

function modal_agregar(id) 
{
	$('#form_crear').trigger("reset");
	
	if(id > 0)
	{
		return $.ajax({
			url: "/Indicadores/modal_actualizar",
			type: "POST",
			data: {id},
			success: function (data) 
			{
				data = JSON.parse(data);

				grupo_trabajo().then(function () {
					$('#grupo_trabajo option').filter(function (index) {
						return $(this).text() === data[0].grupo_trabajo;
					}).prop("selected", true);
				});
				
				$("#grupo_trabajo").attr("disabled", true); 			
				$('#id_indicador').val(id);
				$('#modal_crear').modal('show');
			}
		});
	}
	else
	{
		$("#grupo_trabajo").removeAttr("disabled");
		$('#id_indicador').val(id);
		$('#modal_crear').modal('show');
	}	
}

function modal_actualizar(id) 
{
    $.ajax({
        url: "/Indicadores/modal_actualizar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
            data = JSON.parse(data);

            $('#id_indicador_e').val(data[0].id);
            $('#numero_e').val(data[0].numero);
            $('#descripcion_e').val(data[0].descripcion);
            $('#observaciones_e').val(data[0].observaciones);
			
			grupo_trabajo().then(function () {
                $('#grupo_trabajo_e option').filter(function (index) {
                    return $(this).text() === data[0].grupo_trabajo;
                }).prop("selected", true);
            });
			
			$("#grupo_trabajo_e").attr("disabled", true); 	
			
            $('#modal_actualizar').modal('show');
        },
        error: function () {},
    });
}

function modal_asignar(id) 
{
    $.ajax({
        url: "/Indicadores/probatorios_consultar",
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

function asignar_probatorio(id_indicador, id_probatorio)
{
	var chk = 'chk' + id_probatorio;
	var val = document.getElementById(chk).checked;
	
	$.ajax({
        url: "/Indicadores/asignar_probatorio",
        type: "POST",
        data: {id_indicador, id_probatorio, val},
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

function modal_descarga(id_indicador)
{
	$('#id_indicador_c').val(id_indicador);
	$('#modal_descarga').modal('show');	
}

function descargar_archivos()
{
	id_indicador = $("#id_indicador_c").val();
	id_campus = $("#campus_descarga option:selected").val();
	campus = $("#campus_descarga option:selected").text();
	
	$.ajax({
        url: "/Indicadores/descargar_archivos",
        type: "POST",
		data: {id_indicador, id_campus, campus},
        success: function (data) 
		{
            
        }
    });
}