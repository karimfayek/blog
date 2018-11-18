<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\MobileWorkstations;
use \App\Brand;

class MobileController extends Controller
{
    public function index()
    {
        $mobiles = MobileWorkstations::all();
        $brands = Brand::all();

        return view('mobiles' ,compact('mobiles', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        MobileWorkstations::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$mobiles = MobileWorkstations::findOrFail($request->mobileWorkstations_id);

    	$mobiles->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$mobiles = MobileWorkstations::findOrFail($request->mobileWorkstations_id);

    	$mobiles->delete($request->mobileWorkstations_id);
    	
        return back();

    }

}

