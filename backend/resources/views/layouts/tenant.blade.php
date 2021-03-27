<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Tenant</title>

    <!-- Scripts -->

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
<div >
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    @auth('tenant')
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::guard('tenant')->user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item"
                                   href="{{ route('tenant.logout', ['prefix' => \Request::route('prefix')]) }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form"
                                      action="{{ route('tenant.logout', ['prefix' => \Request::route('prefix')]) }}"
                                      method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @else
                        <li class="nav-item">
                            <a class="nav-link"
                               href="{{ route('tenant.login', ['prefix' => \Request::route('prefix')]) }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link"
                                   href="{{ route('tenant.register', ['prefix' => \Request::route('prefix')]) }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
    @auth('tenant')
        <div style=" background : #cccccc; display: flex ; height: 65px;" class="shadow-sm">
            <nav class="header navbar navbar-expand-lg navbar-light" >
                <div class="container">
                    <ul class='navbar-nav mr-auto'>
                        <li>
                            <a class="menu-link nav-link" href="/">Início</a>
                        </li>
                        <li class="nav-item dropdown" data-toogle="dropdown">
                            <a class="menu-link nav-link" href='#' >Produtos</a>
                            <div class='dropdown-menu'>
                                <a class='dropdown-item' href="{{ route('tenant.categorias.index', ['prefix' => \Request::route('prefix')]) }}">
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
