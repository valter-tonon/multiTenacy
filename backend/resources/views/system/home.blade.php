@extends('layouts.system')
@livewireStyles
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                @livewire('categoria')
            </div>
        </div>
    </div>
</div>
@livewireScripts
@endsection
