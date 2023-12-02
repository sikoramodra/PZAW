<?php

use App\Http\Controllers\PublicationController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SiteController::class, 'home'])->name('site.home');
Route::get('/about-us', [SiteController::class, 'about'])->name('site.about_us');

Route::get('users/{id}', [UserController::class, 'show'])->name('user.show');


Route::get('/publications', [PublicationController::class, 'index'])
    ->name('publication.index');
Route::get('/publications/{publication}', [PublicationController::class, 'show'])
    ->name('publication.show')->whereNumber('publication');

Route::get('/publications/add', [PublicationController::class, 'create'])
    ->name('publication.form');
Route::post('/publications/add', [PublicationController::class, 'add'])
    ->name('publication.add');

Route::get('publications/{publication}/edit', [PublicationController::class, 'edit'])
    ->name('publication.edit');
Route::put('publications/{publication}', [PublicationController::class, 'update'])
    ->name('publication.update');

Route::delete('publications/{publication}', [PublicationController::class, 'destroy'])
    ->name('publication.destroy');
