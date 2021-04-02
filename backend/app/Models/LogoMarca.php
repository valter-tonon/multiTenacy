<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class LogoMarca extends Model
{
    use Uuid;

    protected $casts = [
        'id' => 'string'
    ];

    public $incremeting = false;
}
