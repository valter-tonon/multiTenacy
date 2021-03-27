<?php

namespace App\Http\Controllers;

use App\Models\Marcas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MarcasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $marcas  = Marcas::all();
        return Inertia::render('Marcas', ['marcas' => $marcas,
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Marcas  $marcas
     * @return \Illuminate\Http\Response
     */
    public function show(Marcas $marcas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Marcas  $marcas
     * @return \Illuminate\Http\Response
     */
    public function edit(Marcas $marcas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Marcas  $marcas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Marcas $marcas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Marcas  $marcas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Marcas $marcas)
    {
        //
    }
}
