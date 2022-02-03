$(document).ready(function () 
{
	id_campus = "0";
	$.ajax({
        url: "/AvanceProbatorios/avance_consultar",
        type: "POST",
		data: {id_campus},
        success: function (data) 
		{
            $("#contenido_tabla").html(data);
        },
        error: function () {},
    });
});

function avance_consultar() 
{
	id_campus = $("#select_campus option:selected").val();
	
    $.ajax({
        url: "/AvanceProbatorios/avance_consultar",
        type: "POST",
		data: {id_campus},
        success: function (data) 
		{
            $("#contenido_tabla").html(data);
        },
        error: function () {},
    });
}