<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePublicationRequest;
use App\Http\Requests\UpdatePublicationRequest;
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
        $data = $request->validated();

        $newP = new Publication($data);
        $newP->save();

        return redirect()->route('publications.show', $newP)->with('success', 'Success');
    }

    public function edit(Publication $publication) {
        $users = User::all();

        return view('publications.form', [
            'publication' => $publication,
            'authors' => $users
        ]);
    }

    public function update(UpdatePublicationRequest $request, Publication $publication) {
        $data = $request->validated();
        $publication->fill($data);
        $publication->save();

        return redirect()->route('publications.show', ['publication' => $publication])->with('success', 'Success');
    }

}
