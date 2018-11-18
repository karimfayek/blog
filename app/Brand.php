<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = ['title','descreption', 'slug','image'];


    public function blade() 
    {
        return $this->hasMany(Blade::class);
    }
    public function racks() 
    {
        return $this->hasMany(Rack::class);
    }
    public function types() 
    {
        return $this->hasMany(Type::class);
    }
    
}
