<?php

use App\Http\Controllers\PublicationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SiteController;
use App\Models\Publication;
use Illuminate\Support\Facades\Route;

Route::get('/', [SiteController::class, 'home'])->name('home');
Route::get('/about-us', [SiteController::class, 'about'])->name('about_us');

Route::get('/publications', [PublicationController::class, 'index'])->name('publications.index');
Route::get('/publications/{publication}', [PublicationController::class, 'show'])->name('publications.show')->whereNumber('publication');
Route::get('/publications/add', [PublicationController::class, 'create'])->name('publications.form');
Route::post('/publications/add', [PublicationController::class, 'store'])->name('publication.add');
Route::get('publications/{publication}/edit', [PublicationController::class, 'edit'])->name('publication.edit');
Route::put('publications/{publication}', [PublicationController::class, 'update'])->name('publication.update');

Route::get('users/{id}', [UserController::class, 'show'])->name('users.show');

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

