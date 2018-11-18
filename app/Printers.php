<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Printers extends Model
{
    protected $fillable = ['title','descreption', 'brand_id'];
}
