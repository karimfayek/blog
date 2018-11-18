<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkStations extends Model
{
    protected $fillable = ['title','descreption', 'brand_id'];
}
