@extends('layouts.main')

@section('title', 'Publications')

@section('content')
    <h1 class="heading">publications</h1>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
        @foreach ($publications as $id=>$publication)
            <x-publication
                id='{{ $id }}'
                title='{{ $publication->title }}'
                content='{{ $publication->excerpt }}'
                author='{{ $publication->author }}'
            >
            </x-publication>
        @endforeach
    </div>
@endsection
