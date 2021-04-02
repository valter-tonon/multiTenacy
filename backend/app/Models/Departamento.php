<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use Uuid, Sluggable;

    protected $fillable = ['name', 'description', 'url'];

    protected $casts = [
        'id' => 'string'
    ];
    protected $connection = 'tenant';
    public $incrementing = false;

    public function sluggable(): array
    {
        return [
            'url' => [
                'source' => 'name'
            ]
        ];
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
