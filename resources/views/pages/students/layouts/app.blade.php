<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:title" content="" />
    <meta property="og:type"  content="website" />
    <meta property="og:description"   content=" " />
    <meta property="og:site_name"   content="" />
    <meta property="og:locale"   content="fr_FR" />
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:image" content="" />
    <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ asset('students/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('students/css/normalize.min.css') }}" rel="stylesheet">
    <link href="{{ asset('students/css/main.css') }}" rel="stylesheet">

</head>
<body id="welcome">
<div class="overlay">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
<div class="wrapper">

    <!-- Sidebar -->
    <nav id="sidebar">
        <div class="logo">
            <a href="/"> <img src="/images/logo.png" alt="CIGA-FORMATION" /> </a>
        </div>
        <ul class="list-unstyled components js-nav-data"></ul>
    </nav>

    <!-- Page Content -->
    <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-default">
                    <i class="fa fa-align-left"></i>
                </button>
                <header class="d-none d-md-block">
                    <h4 class="text-primary text-weight-bold ">CENTRE D'INFORMATIQUE ET DE GESTION APPLIQUEE</h4>
                </header>


                <ul class="nav navbar-nav ml-auto">
                    <!-- <li class="nav-item active">
                         <a class="nav-link" href="#">Page</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Page</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Page</a>
                     </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Déconnecter</a>
                    </li>
                </ul>
            </div>
        </nav>


            <div class="container">
                <main class="content js-content"></main>
            </div>

        <!-- We'll fill this with dummy content -->
    </div>

</div>



<script src="/students/js/nav.js"></script>
</body>
</html>
