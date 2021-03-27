<?php

namespace App\Models\System;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use Uuid;

    protected $casts = [
        'id' => 'string',
    ];
    public $incrementing = false;
}
