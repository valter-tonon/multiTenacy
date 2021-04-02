<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Models\Category;
use App\Models\Departamento;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => '/system', 'as' => 'system.'], function () {
    Auth::routes();

    Route::group(['middleware' => 'auth:system'], function(){
        Route::get('home', function () {
            return view('system.home');
        });
    });
});

Route::group(['prefix' => '/{prefix}', 'as' => 'tenant.'], function () {
    Auth::routes();

    Route::group(['middleware' => 'auth:tenant'], function(){
        Route::name('home')->get('home', function () {
            return Inertia::render('Menu');
        });
        //Categorias
        Route::group(['prefix' => 'categorias'], function() {
            Route::name('categorias')->get('', 'CategoryController@index');
            Route::name('categorias.store')->post('', 'CategoryController@store');
            Route::name('categorias-create')->get('/cadastrar', function () {
                return Inertia::render('Categorias/CategoryCreate',
                    [
                        'user' => Auth::guard('tenant')->user()->name,
                        'departamentos' => Departamento::all()
                    ]);
            });
            Route::name('categorias-show')->get('/{id}', 'CategoryController@show');
            Route::name('categorias.update')->put('/{id}', 'CategoryController@update');
            Route::delete('/{id}', 'CategoryController@destroy');
        });
        Route::group(['prefix'=> 'produtos'], function() {
            Route::name('produtos.index')->get('', 'ProductsController@index');
            Route::name('produtos-create')->get('/cadastrar', function () {
                $categories = Category::all();
                return Inertia::render('Produtos/Create',
                ['user' => Auth::guard('tenant')->user()->name, 'categories' => $categories]);
            });
        });
        Route::group(['prefix'  => 'departamentos'], function() {
            Route::name('departamentos.index')->get('', 'DepartamentoController@index');
            Route::name('departamentos.create')->get('/cadastrar' ,'DepartamentoController@createPage');
            Route::name('departamentos.store')->post('/cadastrar', 'DepartamentoController@store');
            Route::name('departamentos.update')->put('/{id}', 'DepartamentoController@update');
            Route::name('departamentos.edit')->get('/{id}', 'DepartamentoController@edit');
            Route::name('departamentos.delete')->delete('/{id}', "DepartamentoController@destroy");
        });
        Route::group(['prefix'  => 'marcas'], function() {
            Route::name('marcas.index')->get('', 'MarcasController@index');
            Route::name('marcas.brand-create')->get('/cadastrar', 'MarcasController@create');
            Route::name('marcas.store')->post('/cadastrar', 'MarcasController@store');
            Route::name('edit')->get('/{id}', 'MarcasController@show');
            Route::name('update')->put('/{id}', 'MarcasController@update');
        });


    });
});


//Route::get('/home', 'HomeController@index')->name('home');
