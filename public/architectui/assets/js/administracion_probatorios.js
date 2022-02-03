function modal_documentos(id) 
{
	$.ajax({
        url: "/AdministracionProbatorios/documentos_consultar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
            $("#tabla_documentos").html(data);
            $('#id_indicador').val(id);
			$('#modal_documentos').modal('show');
        },
        error: function () {},
    });
	
}

function asignaciones_consultar() 
{
	id = $("#indicador_principal option:selected").val();
	
	$.ajax({
        url: "/AdministracionProbatorios/asignaciones_consultar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
            $("#tabla_asignaciones").html(data);
        },
        error: function () {},
    });
	
}

function mostrar_comentarios(id) 
{
	$.ajax({
        url: "/AdministracionProbatorios/admin_probatorio_consultar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
			data = JSON.parse(data);
			
            $('#comentarios').val(data[0].comentarios);
			$('#modal_comentarios').modal('show');
        },
        error: function () {},
    });
}

function modal_archivo(id, id_indicador) 
{
	$.ajax({
        url: "/AdministracionProbatorios/admin_probatorio_consultar",
        type: "POST",
        data: {id},
        success: function (data) 
		{
			data = JSON.parse(data);
			
			$('#id_admin_probatorio').val(id);
			$('#id_indicador').val(id_indicador);
			$('#caracteristica').text(data[0].caracteristica);
			$('#modal_archivo').modal('show');
        },
        error: function () {},
    });
	
}

$(function () 
{
    $('#archivo').change(function (e) 
	{
        var fileName = this.files[0].name;
		var fileSize = this.files[0].size;
		
		if (fileSize > 5000000) {
            alert('El tamaño del archivo supera el permitido a 5MB');
            this.value = '';
        } 
		else 
		{
			var ext = fileName.split('.').pop();
			switch (ext) {
				case 'pdf':
					break;
				default:
					alert('Extensión de archivo inválida, por favor verificar.');
					this.value = '';
			}
		}
    });
});
