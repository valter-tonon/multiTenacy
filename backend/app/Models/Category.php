<?php

namespace App\Models;

use App\Models\Traits\Uuid;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Uuid, Sluggable;

    protected $fillable = ['name', 'description', 'slug', 'department_id'];

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

    public function departamento ()
    {
        return $this->belongsTo(Departamento::class, 'department_id');
    }
}
