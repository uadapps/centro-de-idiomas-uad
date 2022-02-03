$(document).ready(function () {
	$.ajax({
		url: "/Campus/campus",
		type: "POST",
		beforeSend: function () {
			$("#loading").html("<img src='architectui/images/uad/cargando.gif'/>");
		},
		success: function (data) {
			$('#contenido_tabla').html(data);
			$("#loading").html("");
		}
	});
});