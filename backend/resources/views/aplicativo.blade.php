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
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}"/>
    <script src="{{ mix('/js/app.js') }}" defer ></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


</head>
<style>

    li {
        list-style: none;
    }

    .header .nav-link:hover {
        border-bottom: 3px solid transparent;
        padding: .5rem;
        border-radius: 5px;
        border-image-source: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(172,164,17,1) 71%, rgba(240,78,125,1) 100%);
        border-image-slice: 5;
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
        border: 2px solid transparent;
        padding: .5rem;
        border-radius: 5px;
        border-image-source: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(172,164,17,1) 71%, rgba(240,78,125,1) 100%);
        border-image-slice: 5;
        top: 95%
    }

    .header .dropdown-item {
        padding: 10px 15px;
        font-weight: 600;
        color: #444
    }

</style>
<body>
    @routes
    @inertia
</body>
</html>
