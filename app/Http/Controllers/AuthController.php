<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    function form() {
        return view('user.login');
    }

    public function login(LoginRequest $request) {
        $credentials = $request->only('name', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->route(
            'site.home'
            )->with('success', 'Successfully logged in');
        } else {
            return redirect()->route(
            'auth.form'
            )->with('error', 'Incorrect username or password');
        }
    }

   public function logout() {
       Auth::logout();
       return redirect()->route(
           'auth.form'
       )->with('success', 'Successfully logged out');
   }
}
