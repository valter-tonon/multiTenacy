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


    public function create()
    {
        return Inertia::render('Marcas/Create',[
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        Marcas::create($request->all());
        return $this->success('Marca criada com sucesso!');
    }


    public function show(Request $request)
    {
        $id = explode('/',$request->path())[2];
        $marca = Marcas::where('id', $id)->get()->first();
        return Inertia::render('Marcas/Create', [
            'marca' => $marca,
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
        ]);

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

    public function update(Request $request)
    {
        $id = explode('/', $request->path())[2];
        $brand = Marcas::where('id', $id)->get()->first();
        if ($brand->update($request->all())){
            return $this->success('Marca alterada com sucesso');
        }
        return $this->error('Erro ao alterar a marca');
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
