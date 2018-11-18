<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\WorkStations;
use \App\Brand;

class WorkStationsController extends Controller
{
    public function index()
    {
        $works = WorkStations::all();
        $brands = Brand::all();

        return view('works' ,compact('works', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        WorkStations::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$works = WorkStations::findOrFail($request->workStations_id);

    	$works->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$works = WorkStations::findOrFail($request->workStations_id);

    	$works->delete($request->workStations_id);
    	
        return back();

    }

}

