@extends('layouts.main')

@section('title', 'Quotes')

@section('content')
    <ul>
        <x-nav route="home" icon="home" name="home"></x-nav>
        <x-nav route="about_us" icon="info" name="about-us"></x-nav>
        <x-nav route="publications" icon="user" name="publications"></x-nav>
    </ul>

    <h1 class="heading">quotes</h1>

    <div class="flex flex-row gap-8 flex-wrap m-8">
    @foreach ($quotes as $quote)

        <x-quote_card quote='{{ $quote["quote"] }}' name='{{ $quote["hero"] }}' role='{{ $quote["role"] }}' img='{{ $quote["image"] }}'></x-quote_card>
    @endforeach
    </div>
@endsection
