<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThinClient extends Model
{
    protected $fillable = ['title','descreption', 'brand_id'];
}
