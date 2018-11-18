<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Blade;
use \App\Brand;

class BladeController extends Controller
{
    public function index()
    {
        $blades = Blade::all();
        $brands = Brand::all();

        return view('blade' ,compact('blades','brands'));

    }

    ////////

    public function store(Request $request)
    {

        Blade::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$blades = Blade::findOrFail($request->Blade_id);

    	$blades->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$blades = Blade::findOrFail($request->blade_id);

    	$blades->delete($request->blade_id);
    	
        return back();

    }
}
