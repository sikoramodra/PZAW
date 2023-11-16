<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePublicationRequest;
use App\Models\Publication;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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

    public function create() {
        $users = User::all();

        return view('publications.form', [
            'authors' => $users
        ]);
    }

    public function store(StorePublicationRequest $request) {
        $data = $request->validate();

        $newP = new Publication($data);
        $newP->save();

        return redirect()->route('publications.show', $newP);
    }
}
