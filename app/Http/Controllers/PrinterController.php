<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Printers;
use \App\Brand;

class PrinterController extends Controller
{
    public function index()
    {
        $printers = Printers::all();
        $brands = Brand::all();

        return view('printers' ,compact('printers', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        Printers::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$printers = Printers::findOrFail($request->printers_id);

    	$printers->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$printers = Printers::findOrFail($request->printers_id);

    	$printers->delete($request->printers_id);
    	
        return back();

    }

}

