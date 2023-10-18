<?php

use App\Models\Publication;
use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return view('home', [
        'publication' => Publication::orderBy('created_at', 'desc')->first(),
    ]);
})->name('home');

Route::get('/about-us', function(){
    return view('about_us');
})->name('about_us');


$publications = Publication::orderBy('created_at', 'desc')->get();


Route::get('/publications', function() use($publications){
    return view('index', [
        'publications' => $publications
    ]);
})->name('publications');

Route::get('/publications/{id}', function($id) use ($publications) {
   return view('show', [
       'publication' => $publications[$id]
   ]);
})->name('publication');


$quotes = [
    1 => [
        'quote' => 'You were a boulder... I am a mountain.',
        'hero' => 'Sage',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png',
    ],
    2 => [
        'quote' => 'Racing to the spike side!',
        'hero' => 'Jett',
        'role' => 'Duelist',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png',
    ],
    3 => [
        'quote' => 'Call me tech support again.',
        'hero' => 'Killjoy',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/1/15/Killjoy_icon.png',
    ],
    4 => [
        'quote' => 'One of my cameras is broken!... oh wait... it\'s fine.',
        'hero' => 'Cypher',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png',
    ],
    5 => [
        'quote' => 'I am the beggining. I am the end.',
        'hero' => 'Omen',
        'role' => 'Controller',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png',
    ],
];

Route::get('quotes/list', function() use($quotes) {
    return view('quotes', [
        'quotes' => $quotes
    ]);
})->name('quotes');

