@extends('layouts.main')

@section('title', 'Home')

@section('content')
    <ul>
        <x-nav route="about_us" icon="info" name="about-us"></x-nav>
        <x-nav route="publications" icon="user" name="publications"></x-nav>
        <x-nav route="quotes" icon="message-square" name="quotes"></x-nav>
    </ul>

    <h1 class="heading">Witaj na naszej jak na razie pustej stronie!</h1>
    <p>Dzisiaj jest {{ $date }}</p>
@endsection
