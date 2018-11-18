<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Tower;
use \App\Brand;

class TowerController extends Controller
{
    public function index()
    {
        $towers = Tower::all();
        $brands = Brand::all();

        return view('towers' ,compact('towers', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        Tower::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$towers = Tower::findOrFail($request->tower_id);

    	$towers->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$towers = Tower::findOrFail($request->tower_id);

    	$towers->delete($request->tower_id);
    	
        return back();

    }

}

