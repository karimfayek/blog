<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tower extends Model
{
    protected $fillable = ['title','descreption', 'brand_id'];
   


    public function brand() 
    {
        return $this->belongsTo(Brand::class);
    }
}
