<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('architectui/vendors/@fortawesome/fontawesome-free/css/all.min.css')}}">
        <link rel="stylesheet" href="{{asset('architectui/vendors/ionicons-npm/css/ionicons.css')}}">
        <link rel="stylesheet" href="{{asset('architectui/vendors/linearicons-master/dist/web-font/style.css')}}">
        <link rel="stylesheet" href="{{asset('architectui/vendors/pixeden-stroke-7-icon-master/pe-icon-7-stroke/dist/pe-icon-7-stroke.css')}}">
        <link rel="stylesheet" href="{{asset('architectui/styles/css/main.c604dfdbf69c662531f1.css')}}" >
        <link rel="stylesheet" href="{{asset('architectui/vendors/jquery.fancytree/dist/skin-win8/ui.fancytree.min.css')}}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/themes/default/style.min.css" />

        <style>
            .modal-backdrop{
                z-index:1 !important
            }
            .modal-dialog{
                margin:5rem auto !important;
            }
        </style>
    </head>
    <body  >
 

    <div id="app">

       
    </div>


 

    

    <!-- plugin dependencies -->
    <script type="text/javascript" src="{{asset('architectui/vendors/jquery/dist/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/moment/moment.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/metismenu/dist/metisMenu.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/bootstrap4-toggle/js/bootstrap4-toggle.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/jquery-circle-progress/dist/circle-progress.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/perfect-scrollbar/dist/perfect-scrollbar.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/toastr/build/toastr.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/jquery.fancytree/dist/jquery.fancytree-all-deps.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/apexcharts/dist/apexcharts.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/bootstrap-table/dist/bootstrap-table.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/datatables.net/js/jquery.dataTables.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/datatables.net-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/datatables.net-responsive/js/dataTables.responsive.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/vendors/slick-carousel/slick/slick.min.js')}}"></script>

    <!-- custome.js -->
    <script type="text/javascript" src="{{asset('architectui/js/charts/apex-charts.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/circle-progress.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/demo.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/scrollbar.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/toastr.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/treeview.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/form-components/toggle-switch.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/tables.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/carousel-slider.js')}}"></script>
    <script type="text/javascript" src="{{asset('architectui/js/app.js')}}"></script> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/jstree.min.js"></script>
    <!-- JS --> 
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <script src="{{mix('js/app.js')}}"></script>
    </body>
</html>
