<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubType extends Model
{
    protected $fillable = ['title','descreption', 'type_id'];


    public function type() 
    {
        return $this->belongsTo(Type::class);
    }

    public function item() 
    {
        return $this->hasMany(Item::class, "subtype_id", 'id');
    }
}
