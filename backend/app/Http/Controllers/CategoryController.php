<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    protected $rules = [
        'name' => 'required|min:3'
    ];
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Categorias', ['categorias' => $categories ,
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')]);
    }

    public function store(Request $request)
    {
        $categoria = $this->validate($request, $this->rules);
        Category::create($categoria);
        return $this->success('Categoria criada com sucesso');
    }

    public function edit(Request $request)
    {
        $id = explode('/',$request->path())[2];
        $category = Category::where('id', $id)->get()->first();
        $categories = Category::all();
        return view('tenant.categories.index', compact('category', 'categories'));
    }



    public function show(Request $request)
    {
        $id = explode('/',$request->path())[2];
        $categoria = Category::where('id' , $id)->get()->first();

        return Inertia::render('Categorias/CategoryCreate', [
            'category' => $categoria,
            'user' => Auth::guard('tenant')->user()->name,
            'prefix' => \Request::route('prefix')
        ]);

    }

    public function destroy(Request $request, $id)
    {
        $id = explode('/',$request->path())[2];
        $categoria = Category::where('id', $id)->get()->first();
        $categoria->delete();
        return $this->index();
    }

    public function update(Request $request)
    {
        $id = explode('/',$request->path())[2];
        Category::where('id', $id)->update($request->validate($this->rules));
        return $this->success('Categoria alterada com sucesso');
    }
}
