<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable = ['title','descreption','slug'];




    public function page() 
    {
        return $this->hasMany(Page::class);
    }


}
