$(document).ready(function () 
{
	$("#select_ucontenido").hide();
	
	id_campus = "0";
	id_uc = "0";
	$.ajax({
        url: "/AvanceContenido/avance_consultar",
        type: "POST",
		data: {id_campus, id_uc},
        success: function (data) 
		{
            $("#contenido_tabla").html(data);
        },
        error: function () {},
    });
});

function ucontenido_consultar() 
{
	$("#select_ucontenido").show();
	id_campus = $("#select_campus option:selected").val();
	
    $.ajax({
        url: "/AvanceContenido/ucontenido_consultar",
        type: "POST",
		data: {id_campus},
        success: function (data) 
		{
            $("#select_ucontenido").html(data);
        },
        error: function () {},
    });
}

function avance_consultar() 
{
	id_campus = $("#select_campus option:selected").val();
	id_uc = $("#select_ucontenido option:selected").val();
	
    $.ajax({
        url: "/AvanceContenido/avance_consultar",
        type: "POST",
		data: {id_campus, id_uc},
        success: function (data) 
		{
            $("#contenido_tabla").html(data);
        },
        error: function () {},
    });
}

function archivo(id) 
{
    $.ajax({
        url: "/UsuariosProbatorios/archivo",
        type: "POST",
        data: {id},
        success: function (data) {
            data = JSON.parse(data);
            window.open("/VisorArchivos/archivo?ruta=" + encodeURIComponent(btoa(data.ruta)) + "&ext=" + encodeURIComponent(btoa(data.extension)), "_blank");
        },
        error: function () {
            alert("Error");
        },
    });
}