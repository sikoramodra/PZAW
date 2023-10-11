<!DOCTYPE html>
<html lang="pl" class="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>@yield('title')</title>
        <script src="https://unpkg.com/feather-icons"></script>
        @vite('resources/css/app.css')
    </head>
    <body class="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        @yield('content')
    </body>
    <script defer>feather.replace();</script>
</html>
