<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Marcas extends Model
{
    use Uuid, Sluggable;

    protected $fillable = ['name','description', 'slug'];

    protected $casts = [
        'id' => 'string'
    ];
    protected $connection = 'tenant';
    public $incrementing = false;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
