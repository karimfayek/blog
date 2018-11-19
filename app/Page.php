<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    //
    protected $fillable = ['title','descreption','category_id', 'slug'];





    public function category() 
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    


}


