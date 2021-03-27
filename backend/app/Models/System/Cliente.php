<?php

namespace App\Models\System;

use App\Models\BaseUser;
use Illuminate\Database\Eloquent\Model;

class Cliente extends BaseUser
{
    protected $connection = 'system';
    protected $table = 'clientes';
    protected $fillable=[
        'company_name',
        'phone',
        'document_number',
        'name',
        'city',
        'zipcode',
        'email',
        'street_number',
        'street',
        'neighborhood',
        'estado',
        'ddd'
        ];
}
