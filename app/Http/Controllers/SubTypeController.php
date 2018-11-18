<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\SubType;
use \App\Type;

class SubTypeController extends Controller
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
        $subtypes = SubType::all();
        $types = Type::all();
        

        return view('subtype' ,compact('subtypes', 'types'));

    }

    ////////

    public function store(Request $request)
    {

        SubType::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$subtypes = SubType::findOrFail($request->subtype_id);

    	$subtypes->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$subtypes = Type::findOrFail($request->subtype_id);

    	$subtypes->delete($request->subtype_id);
    	
        return back();

    }
}

