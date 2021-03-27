<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\System\Cliente;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        \DB::transaction(function () use($request){
            $company = Company::create($this->generateCompanyData($request));
            $request['company_name'] = $request['domain'];
            Cliente::create($request->all());
        });
    }

    protected function generateCompanyData($data)
    {
        $company = [];
        $company['name'] = $data['razao'];
        $company['prefix'] = $data['domain'];
        $company['database'] = $data['domain'];
        $company['cnpj'] = $data['cnpj'];

        return $company;
    }

    protected function generateData($user, $plan)
    {
        $atualDatetime = Carbon::now();
        $subscribe['subscriber_id'] = $user->id;
        $subscribe['plan_id'] = $plan;
        $subscribe['startDate'] = $atualDatetime;
        $subscribe['expiration_date'] = $atualDatetime->addMonth();
        $subscribe['remote_subscription_id'] = '';
        $subscribe['remote_plan_id'] = '';
        $subscribe['status'] = 1;
        return $subscribe;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
