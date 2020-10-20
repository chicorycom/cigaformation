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
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">

</head>
<body class="water-loading">
        <div class="parent-water">
            <div class="water"><span>CIGA FORMATION</span></div>
        </div>

        <div class="all">
            <!--================ Start Header Menu Area =================-->
            @include('chicorycom::partials.navbar')
            @section('header')
                <x-chicorycom-slide></x-chicorycom-slide>
            @show
            <main class="py-4">
                @yield('content')
            </main>
            @include('chicorycom::partials.footer')
        </div>
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
        <script>
            window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v4.0'
                });
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

        <!-- Your customer chat code -->
        <div class="fb-customerchat"
             attribution=setup_tool
             page_id="1110442325641312"
             theme_color="#0084ff"
             logged_in_greeting=" Salut! Comment pouvons-nous vous aider?"
             logged_out_greeting=" Salut! Comment pouvons-nous vous aider?">
        </div>

        <script src="{{ asset('js/theme.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/loader.min.js') }}"></script>
        @stack('scripts')
</body>
</html>
