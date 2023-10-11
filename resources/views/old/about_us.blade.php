@extends('layouts.main')

@section('title', 'About us')

@section('content')
    <ul>
        <x-nav route="home" icon="home" name="home"></x-nav>
        <x-nav route="publications" icon="user" name="publications"></x-nav>
        <x-nav route="quotes" icon="message-square" name="quotes"></x-nav>
    </ul>

    <h1 class="heading">title</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem amet ipsa possimus. Aperiam dolorem quidem veniam repellendus repellat fugit libero dolor, reiciendis numquam nesciunt labore fuga quia voluptatibus! Nemo.</p>
@endsection
