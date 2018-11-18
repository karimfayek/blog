<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rack extends Model
{
    protected $fillable = ['title','descreption', 'subtype_id','slug','image'];
    protected $table = 'rack';

    public function brand() 
    {
        return $this->belongsTo(Brand::class);
    }



}
