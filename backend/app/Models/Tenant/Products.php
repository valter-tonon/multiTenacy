<?php

namespace App\Models\Tenant;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use Uuid;

    public $incremeting = false;

    protected $casts = [
        'id' => 'string'
    ];
}
