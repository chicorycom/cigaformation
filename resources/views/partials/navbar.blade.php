<header class="header_area navbar_fixed">
    <div class="main_menu">
        <div class="search_input d-none d-md-block" id="search_input_box">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="contact d-flex justify-content-between">
                        <div class="mr-3"><i class="ti-mobile mr-1"></i> <span>+221 338778361 / 776677470</span></div>
                        <div><i class="ti-email mr-1"></i> <a href="mailto:infociga@gmail.com" style="color: #fff;">infociga@gmail.com</a></div>
                    </div>
                    <div class="login-register ">
                        <span class="header-login cursor-pointer">Login</span> | <span class="header-register cursor-pointer">Register</span>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand logo_h" href="#" ><img src="/images/logo.png" alt=""/></a>
                <button class="navbar-toggler" type="button" id="navbar-toggler">
                    <span class="icon-bar"></span> <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div
                    class="collapse navbar-collapse offset"
                    id="navbarSupportedContent"
                >
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item @if(Request::path() == '/' or request()->path() == 'home') active @endif">
                            <a class="nav-link" href="{{ route('page', 'home') }}" >Acceil</a>
                        </li>
                        <li class="nav-item @if(Request::path() == 'about') active @endif">
                            <a class="nav-link " href="{{ route('page', 'about') }}" >A propos</a>
                        </li>
                        <li class="nav-item submenu dropdown">
                            <a  class="nav-link dropdown-toggle"
                                href="#{{ route('page', 'contact') }}"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                onclick="(e)=>{e.stopPropagation()}"
                            >Campus</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'contact') }}">Campus Guediaway</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'contact') }}" >Campus Malika</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item submenu dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >Formations</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'formation-initiale') }}">Formation Initiale</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'formation-continue') }}" >Formation Continue</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'formation-modulaire') }}">Formation modulaire</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item submenu dropdown">
                            <a
                                href="#"
                                class="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >Labs</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('page', 'rech-innov') }}">Rech & Innov</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('page', 'cdoc') }}">Cdoc</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('page', 'opportunites') }}">Opportunites</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="{{ route('page', 'contact') }}">Campus</a>
                        </li>-->
                    </ul>
                </div>

            </div>
        </nav>
    </div>
</header>
<div id="sidebar-mobile">
    <ul class="sidebar-nav d-flex flex-column justify-content-center align-items-center">
        <li class="sidebar-brand"></li>
        <li class="nav-item @if(Request::path() == '/' or request()->path() == 'home') active @endif">
            <a class="nav-link" href="{{ route('page', 'home') }}" >Acceil</a>
        </li>
        <li class="nav-item submenu dropdown">
            <a  class="nav-link dropdown-toggle"
                href="#{{ route('page', 'contact') }}"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onclick="(e)=>{e.stopPropagation()}"
           >Campus</a>
            <ul class="dropdown-menu">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'campus-guediaway') }}">Campus Guediaway</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'campus-malika') }}" >Campus Malika</a>
                </li>
            </ul>
        </li>
        <li class="nav-item @if(Request::path() == 'about') active @endif">
            <a class="nav-link " href="{{ route('page', 'about') }}" >A propos</a>
        </li>
        <li class="nav-item submenu dropdown">
            <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onclick="(e)=>{e.stopPropagation()}"
            >Formations</a>
            <ul class="dropdown-menu">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'formation-initiale') }}">Formation Initiale</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'formation-continue') }}" >Formation Continue</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'formation-modulaire') }}">Formation modulaire</a>
                </li>
            </ul>
        </li>
        <li class="nav-item submenu dropdown">
            <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
            >Labs</a>
            <ul class="dropdown-menu">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('page', 'rech-innov') }}">Rech & Innov</a>
                </li>

            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('page', 'cdoc') }}">Cdoc</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('page', 'opportunites') }}">Opportunites</a>
        </li>
    </ul>
</div>
