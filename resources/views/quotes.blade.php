@extends('layouts.main')

@section('title', 'Quotes')

@section('content')
    <h1 class="heading">quotes</h1>

    <div class="flex flex-row gap-8 flex-wrap m-8 place-content-center">
    @foreach ($quotes as $quote)

        <x-quote_card quote='{{ $quote["quote"] }}' name='{{ $quote["hero"] }}' role='{{ $quote["role"] }}' img='{{ $quote["image"] }}'></x-quote_card>
    @endforeach
    </div>
@endsection
