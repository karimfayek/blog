<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Monitor;
use \App\Brand;

class MonitorController extends Controller
{
    public function index()
    {
        $monitors = Monitor::all();
        $brands = Brand::all();

        return view('monitors' ,compact('monitors', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        Monitor::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$monitors = Monitor::findOrFail($request->monitor_id);

    	$monitors->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$monitors = Monitor::findOrFail($request->monitor_id);

    	$monitors->delete($request->monitor_id);
    	
        return back();

    }

}

