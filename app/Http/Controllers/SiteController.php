<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;

class SiteController extends Controller {
    public function home() {
        return view('home', [
            'publication' => Publication::orderBy('created_at', 'desc')->first(),
        ]);
    }

    public function about() {
        return view('about_us');
    }
}
