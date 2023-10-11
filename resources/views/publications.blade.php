@extends('layouts.main')

@section('title', 'Publications')

@section('content')
    <h1 class="heading">publications</h1>

    @foreach ($quotes as $quote)

        <x-publication quote='{{ $quote["quote"] }}' hero='{{ $quote["hero"] }}'></x-publication>

    @endforeach
@endsection
