<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use Uuid;

    protected $fillable = ['name', 'description', 'url'];

    protected $casts = [
        'id' => 'string'
    ];
    protected $connection = 'tenant';
    public $incrementing = false;
}
