@extends('layouts.main')

@section('title', 'Publications')

@section('content')
    <h1 class="heading">publications</h1>

    <div class="px-32 py-8 flex flex-col gap-4">
        <h3 class="font-bold text-lg ml-4">{{ $publication->author->name }}</h3>
        <h2 class="font-bold text-3xl ">{{ $publication->title }}</h2>
        <p class="text-xl dark:text-dark-500">{{ $publication->content }}</p>
    </div>
@endsection
