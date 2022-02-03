<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title><?=$this->renderSection('title')?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
    <meta name="description" content="This is an example dashboard created using build-in elements and components.">
    <meta name="msapplication-tap-highlight" content="no">
    <link rel="stylesheet" href="architectui/vendors/@fortawesome/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="architectui/vendors/ionicons-npm/css/ionicons.css">
    <link rel="stylesheet" href="architectui/vendors/linearicons-master/dist/web-font/style.css">
    <link rel="stylesheet" href="architectui/vendors/pixeden-stroke-7-icon-master/pe-icon-7-stroke/dist/pe-icon-7-stroke.css">
    <link href="architectui/styles/css/base.css" rel="stylesheet">
	<link rel="stylesheet" href="architectui/vendors/jquery.fancytree/dist/skin-win8/ui.fancytree.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/themes/default/style.min.css" />
    <?=$this->renderSection('css')?>
</head>

<body>

    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">

        <!-- ENCABEZADO -->
        <?=$this->include("layouts/header") ?>
        <!-- FIN ENCABEZADO -->

        <div class="app-main">
            <div class="app-sidebar sidebar-shadow">

                <!-- MENU -->
                <?= $this->include("layouts/menu");  ?>
                <!-- FIN MENU -->

            </div>

            <div class="app-main__outer">

                <!-- COTENIDO -->
                <div class="app-main__inner">

                    <?=$this->renderSection('content')?>

                </div>
                <!-- FIN COTENIDO -->

                <!-- PIE -->
                <?= $this->include("layouts/footer"); ?>
                <!-- FIN PIE -->

            </div>
        </div>
    </div>



    <?=$this->renderSection('modals')?>


    <!-- LAYOUT LATERAL -->
    <?php echo view("modulos/layout_lateral"); ?>
    <!-- FIN LAYOUT LATERAL -->

    

    <!-- plugin dependencies -->
    <script type="text/javascript" src="architectui/vendors/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/moment/moment.js"></script>
    <script type="text/javascript" src="architectui/vendors/metismenu/dist/metisMenu.js"></script>
    <script type="text/javascript" src="architectui/vendors/bootstrap4-toggle/js/bootstrap4-toggle.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/jquery-circle-progress/dist/circle-progress.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/toastr/build/toastr.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/jquery.fancytree/dist/jquery.fancytree-all-deps.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/apexcharts/dist/apexcharts.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/bootstrap-table/dist/bootstrap-table.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/datatables.net/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
    <script type="text/javascript" src="architectui/vendors/slick-carousel/slick/slick.min.js"></script>

    <!-- custome.js -->
    <script type="text/javascript" src="architectui/js/charts/apex-charts.js"></script>
    <script type="text/javascript" src="architectui/js/circle-progress.js"></script>
    <script type="text/javascript" src="architectui/js/demo.js"></script>
    <script type="text/javascript" src="architectui/js/scrollbar.js"></script>
    <script type="text/javascript" src="architectui/js/toastr.js"></script>
    <script type="text/javascript" src="architectui/js/treeview.js"></script>
    <script type="text/javascript" src="architectui/js/form-components/toggle-switch.js"></script>
    <script type="text/javascript" src="architectui/js/tables.js"></script>
    <script type="text/javascript" src="architectui/js/carousel-slider.js"></script>
    <script type="text/javascript" src="architectui/js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/jstree.min.js"></script>
    <!-- JS -->
    <script type="text/javascript" src="architectui/assets/js/usuarios.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script type="text/javascript">
        let mensaje = '<?php echo $mensaje ?>';

        if (mensaje == '1') {
            swal('', 'Usuario registrado con exito!', 'success');
        } else if (mensaje == '2') {
            swal('', 'Ya existe el usuario!', 'error');
        } else if (mensaje == '3') {
            swal('', 'Usuario actualizado con exito!', 'success');
        } else if (mensaje == '4') {
            swal('', 'Usuario eliminado con exito!', 'success');
        }
    </script>

    <?=$this->renderSection('js')?>

</body>

</html>