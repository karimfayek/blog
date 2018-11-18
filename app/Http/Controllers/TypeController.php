<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Type;
use \App\Brand;

class TypeController extends Controller
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
        $types = Type::all();
        $brands = Brand::all();

        return view('type' ,compact('types','brands'));

    }

    ////////

    public function store(Request $request)
    {

        Type::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$types = Type::findOrFail($request->type_id);

    	$types->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$types = Type::findOrFail($request->type_id);

    	$types->delete($request->type_id);
    	
        return back();

    }
}
