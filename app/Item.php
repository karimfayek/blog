<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['title','descreption', 'subtypeid', 'specifications', 'slug', 'image'];


    public function subtype() 
    {
        return $this->belongsTo(SubType::class);
    }
}
