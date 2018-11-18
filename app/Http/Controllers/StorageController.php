<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Storage;
use \App\Brand;

class StorageController extends Controller
{
    public function index()
    {
        $storages = Storage::all();
        $brands = Brand::all();

        return view('storages' ,compact('storages', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        Storage::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$storages = Storage::findOrFail($request->storage_id);

    	$storages->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$storages = Storage::findOrFail($request->storage_id);

    	$storages->delete($request->storage_id);
    	
        return back();

    }

}

