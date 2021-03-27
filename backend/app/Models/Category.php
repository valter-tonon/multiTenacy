<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Uuid;

    protected $fillable = ['name'];

    protected $casts = [
        'id' => 'string'
    ];
    protected $connection = 'tenant';
    public $incrementing = false;
}
