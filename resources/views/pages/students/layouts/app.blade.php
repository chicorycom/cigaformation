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
<aside class="left-sidebar">
    <div class="logo">
        <a href="/"> <img src="/images/logo.png" alt="CIGA-FORMATION" /> </a>
    </div>
    <nav class="left-nav">
        <ul id="nav">
            <li ><a href="#welcome" data-section="welcome" id="default" >Welcome</a></li>
            <li><a href="#pre-register" data-section="pre-register">Pré-inscription</a></li>
            <li><a href="#">Demande de bourse</a></li>
            <li><a href="#">Structure</a></li>
            <li><a href="#">Paiement en ligne</a></li>
            <li><a href="#">Exament en ligne</a></li>
            <li><a href="#">Coures en ligne</a></li>
            <li><a href="#">Carnet de note</a></li>
            <li><a href="#">Emploie du temps</a></li>
        </ul>
    </nav>
</aside>
<div id="main-wrapper">
    <div class="main-content">
        <header class="content-header">
            <h3 class="text-primary text-weight-bold">CENTRE D'INFORMATIQUE ET DE GESTION APPLIQUEE</h3>
        </header>
        <main class="content js-content"></main>
    </div>
</div>
<script src="/students/js/nav.js"></script>
</body>
</html>
