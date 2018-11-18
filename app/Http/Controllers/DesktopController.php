<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Desktop;
use \App\Brand;

class DesktopController extends Controller
{
    public function index()
    {
        $desktops = Desktop::all();
        $brands = Brand::all();

        return view('desktops' ,compact('desktops','brands'));

    }

    ////////

    public function store(Request $request)
    {

        Desktop::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$desktops = Desktop::findOrFail($request->desktop_id);

    	$desktops->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$desktops = Desktop::findOrFail($request->desktop_id);

    	$desktops->delete($request->desktop_id);
    	
        return back();

    }

}
