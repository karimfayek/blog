<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $fillable = ['title','descreption', 'brand_id','Server','Work-Station', 'Storage'];


    public function brand() 
    {
        return $this->belongsTo(Brand::class);
    }
    public function subtype() 
    {
        return $this->hasMany(SubType::class);
    }
}
