<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Brand;

class BrandController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
    	$brands = Brand::all();

        return view('brands' ,compact('brands'));

    }

    ////////

    public function store(Request $request)
    {

        Brand::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$brands = Brand::findOrFail($request->brand_id);

    	$brands->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$brands = Brand::findOrFail($request->brand_id);

    	$brands->delete($request->brand_id);
    	
        return back();

    }

}
