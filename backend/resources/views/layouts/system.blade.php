<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Shop Commerce</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<style>

    li {
        list-style: none;
    }

    .header .nav-link:hover {
        border-bottom: 3px solid #1976d2;
    }

    .header .nav-link {
        font-weight: 600;
        color: #555 !important;
        padding: 20px 1.0rem !important;
        border: 0;
        border-bottom: 3px solid transparent;
    }

    .dropdown:hover>.dropdown-menu {
        display: block;
    }
    .header .dropdown-menu {
        box-shadow: rgba(0,0,0,0.08) 0px 4px 16px 0px, rgba(0,0,0,0.06) 0px 2px 6px 0px;
        border: 1px solid #1976d2;
        top: 95%
    }

    .header .dropdown-item {
        padding: 10px 15px;
        font-weight: 600;
        color: #444
    }

</style>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img src="{{ asset('img/logo-nav2.png') }}" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav">
                    <!-- Authentication Links -->
                    @auth('system')
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::guard('system')->user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('system.logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('system.logout') }}" method="POST"
                                      style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('system.login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('system.register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
    @auth('system')
    <div style=" background : #cccccc; display: flex ; height: 65px;" >
        <nav class="header navbar navbar-expand-lg navbar-light" >
            <div class="container">
                <ul class='navbar-nav mr-auto'>
                    <li>
                        <a class="menu-link nav-link" href="/">Início</a>
                    </li>
                    <li class="nav-item dropdown" data-toogle="dropdown">
                        <a class="menu-link nav-link" href='#' >Produtos</a>
                        <div class='dropdown-menu'>
                            <a class='dropdown-item' href="/categorias">
                                Categorias
                            </a>
                            <a class='dropdown-item' href="/generos">
                                Genêros
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    @endauth
    <main class="py-4">
        @yield('content')
    </main>
</div>
</body>
</html>
