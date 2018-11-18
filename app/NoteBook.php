<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NoteBook extends Model
{
    protected $fillable = ['title','descreption', 'brand_id'];
}
