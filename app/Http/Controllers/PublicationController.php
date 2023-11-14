<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationController extends Controller {
    public function index() {
        $publications = Publication::orderBy('created_at', 'desc')->get();

        return view('publications.index', [
            'publications' => $publications
        ]);
    }

    public function show(Publication $publication) {
        return view('publications.show', [
            'publication' => $publication,
            'comments' => $publication->comments
        ]);
    }
}
