<?php

namespace App\Http\Controllers\System;

use App\Http\Controllers\Controller;

use App\Models\System\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Plan::all();
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
     * @param  Plan $plan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $plan = Plan::where('id', $id)->get()->first();
        return $plan;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function edit(Plan $plan)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Plan  $plan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plan $plan)
    {
        //
    }

}
