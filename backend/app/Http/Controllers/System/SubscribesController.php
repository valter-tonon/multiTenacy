<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\System\Cliente;
use App\Models\System\Subscribe;
use App\Models\UserTenant;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubscribesController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $company = Company::where('prefix', $request['loja'])->get()->first();
        \Artisan::call('tenant:create --ids='.$company->id);
        $cliente = Cliente::where('company_name', $company->prefix)->get()->first();
        \Tenant::setTenant($company);
        UserTenant::create($this->generateData($cliente));
    }

    protected function generateData($cliente)
    {
        $user = array();
        $user['name'] = $cliente->name;
        $user['email'] = $cliente->email;
        return $user;
    }


}
