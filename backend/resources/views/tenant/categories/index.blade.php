@extends('layouts.tenant')


@section('content')
    <div class="container">
        <h2 class="text-center">Categorias</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form method="POST" action="{{ route('tenant.categorias.store', ['prefix' => \Request::route('prefix')]) }}" class="mt-4 mb-5">
                    @method('POST')
                    @csrf
                    <div class="col-10">
                        <label for="category">Nome</label>
                        <input type="text" class="form-control" placeholder="nome da categoria" name="name" value="{{$category->name ?? ''}}"/>
                        <button type="submit" class="btn btn-primary mt-4">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <table class="table table-dark table-hover table-striped">
                    <thead >
                        <tr>
                            <th>cod</th>
                            <th width="60%">Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($categories as $category)
                            <tr>
                                <td>{{substr($category->id, 0, 5)}}</td>
                                <td>{{$category->name}}</td>
                                <td>
                                    <a href="{{route("tenant.categorias.edit",['prefix'=> \Request::route('prefix'), $category->id])}}" class="btn btn-outline-primary mr-2">Editar</a>
                                    <button class="btn btn-danger" onclick="">Excluir</button>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
