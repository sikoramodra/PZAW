@extends('layouts.main')

@section('title', 'Publications')

@section('content')
    <ul>
        <x-nav route="home" icon="home" name="home"></x-nav>
        <x-nav route="about_us" icon="info" name="about-us"></x-nav>
        <x-nav route="quotes" icon="message-square" name="quotes"></x-nav>
    </ul>

    <h1 class="heading">publications</h1>

    @foreach ($quotes as $quote)

        <x-publication quote='{{ $quote["quote"] }}' hero='{{ $quote["hero"] }}'></x-publication>

    @endforeach
@endsection
