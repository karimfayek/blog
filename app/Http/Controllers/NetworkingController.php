<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Networking;
use \App\Brand;

class NetworkingController extends Controller
{
    public function index()
    {
        $networks = Networking::all();
        $brands = Brand::all();

        return view('networks' ,compact('networks','brands'));

    }

    ////////

    public function store(Request $request)
    {

        Networking::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$networks = Networking::findOrFail($request->networking_id);

    	$networks->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$networks = Networking::findOrFail($request->networking_id);

    	$networks->delete($request->networking_id);
    	
        return back();

    }

}

