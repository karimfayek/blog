<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\ThinClient;
use \App\Brand;

class ThinController extends Controller
{
    public function index()
    {
        $thins = ThinClient::all();
        $brands = Brand::all();

        return view('thins' ,compact('thins', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        ThinClient::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$thins = ThinClient::findOrFail($request->thinClient_id);

    	$thins->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$thins = ThinClient::findOrFail($request->thinClient_id);

    	$thins->delete($request->thinClient_id);
    	
        return back();

    }

}

