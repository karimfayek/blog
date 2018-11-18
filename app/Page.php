<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    //
    protected $fillable = ['title','descreption','categories_id', 'brand_id'];



    public function brand() 
    {
        return $this->belongsTo(Brand::class);
    }

    public function category() 
    {
        return $this->belongsTo(Category::class, 'categories_id');
    }
    


}


