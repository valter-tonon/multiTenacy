<?php

namespace App\Http\Controllers;

use App\Models\Departamento;
use Doctrine\DBAL\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DepartamentoController extends Controller
{
    protected $rules = [
        'name' => 'required|min:3',
        'description' => 'required',
        'url' => 'required'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $departamentos = Departamento::all();
        return Inertia::render('Departamentos', ['departamentos' => $departamentos,
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
            ]);
    }

    public function createPage()
    {
        return Inertia::render('Departamentos/Create', [
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Departamento::create($request->all())) {
            return $this->success('Departamento salvo com sucesso', 1200);
        } else {
            return $this->error('Ops! Algo não deu certo!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function show(Departamento $departamento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function edit( Request $request )
    {
        $idDepartamento = pathinfo($request->path())['basename'];
        $departamento = Departamento::where('id', $idDepartamento)->get()->first();
        return Inertia::render('Departamentos/Create',
            ['departamento' => $departamento,
                'user' => Auth::guard('tenant')->user()->name,
                'prefix' => \Request::route('prefix')
                ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = pathinfo($request->path())['basename'];
        if(Departamento::where('id', $id)->update($request->validate($this->rules))) {
            return $this->success('Departamento alterado com sucesso');
        } else {
            return $this->error('Oops! Algo não deu certo!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Departamento  $departamento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = pathinfo($request->path())['basename'];
        if (Departamento::where('id', $id)->delete()) {
            return $this->success('Departamento excluído com sucesso');
        } else {
            return $this->error("Ooops! Algo não deu certo!");
        }

    }
}
