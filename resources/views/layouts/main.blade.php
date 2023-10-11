<!DOCTYPE html>
<html lang="pl" class="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>@yield('title')</title>
        <script src="https://unpkg.com/feather-icons"></script>
        @vite('resources/css/app.css')
        <!-- <script src="https://cdn.tailwindcss.com"></script>
        <style type="text/tailwindcss">
            @layer components {
                .heading {
                    @apply text-xl uppercase font-bold text-slate-100 dark:text-slate-900 bg-blue-700 p-2 my-3 !important;
                }
            }
        </style>
        <script>
            tailwind.config = {
                darkMode: 'class',
                theme: {
                extend: {
                fontFamily: {
                    'nova': ['Nova Mono', 'monospace']
                },
                },
                colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#FFFFFF',
                black: '#000000',
                dark: {
                    100: '#282C34',
                    200: '#464B57',
                    300: '#656C7A',
                    400: '#878E9C',
                    500: '#ABB2BF',
                },
                red: {
                    100: '#E06C75',
                    200: '#D85961',
                    300: '#D1474C',
                    400: '#C93539',
                    500: '#C22526',
                },
                green: {
                    100: '#98C379',
                    200: '#80B166',
                    300: '#6A9F55',
                    400: '#558E46',
                    500: '#417C38',
                },
                yellow: {
                    100: '#E5C07B',
                    200: '#E8BB68',
                    300: '#EBB654',
                    400: '#EEB140',
                    500: '#F1AC2B',
                },
                blue: {
                    100: '#61AFEF',
                    200: '#4DA1E6',
                    300: '#3B94DD',
                    400: '#2A88D4',
                    500: '#1A7CCB',
                },
                purple: {
                    100: '#C678DD',
                    200: '#B868D1',
                    300: '#AB59C4',
                    400: '#9E4BB8',
                    500: '#913EAB',
                },
                cyan: {
                    100: '#56B6C2',
                    200: '#47B4C1',
                    300: '#37B3C0',
                    400: '#28B2BF',
                    500: '#19B1BD',
                },
                },
            },
            }
        </script> -->
    </head>
    <body class="bg-white text-dark-100 dark:bg-dark-100 dark:text-white min-h-screen relative flex flex-col">
        <nav class="h-12 w-full text-dark-100 dark:text-white p-2 flex items-center justify-between border-solid border-dark-100 dark:border-white bg-white/75 dark:bg-dark-100/75 px-2 py-4 shadow backdrop-blur-md fixed top-0">
            <h3 class="font-nova text-4xl uppercase underline">pzaw</h3>
            <div class="flex gap-3">
                <x-nav route="home" icon="home" name="home"></x-nav>
                <x-nav route="about_us" icon="info" name="about-us"></x-nav>
                <x-nav route="publications" icon="user" name="publications"></x-nav>
                <x-nav route="quotes" icon="message-square" name="quotes"></x-nav>
            </div>
            <h3 class="animate-pulse cursor-pointer text-2xl">login</h3>
        </nav>
        <main class="flex-grow">
            @yield('content')
        </main>
        <footer class="py-4 w-full px-6 flex-shrink-0">
            <p class="text-lg font-bold">Wojciech Modro</p>
            <p class="text-sm">Copyright © 2023</p>
        </footer>
    </body>
    <script defer>feather.replace();</script>
</html>
