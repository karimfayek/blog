<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Rack;
use \App\Subtype;

class RackController extends Controller
{
    public function index()
    {
        $racks = Rack::all();
        $subtypes = Subtype::all();

        return view('rack' ,compact('racks', 'brands', 'subtypes'));

    }

    ////////

    public function store(Request $request)
    {
        $racks = new Rack;
        $racks->title = $request->title;
        $racks->descreption = $request->descreption;
        $racks->type = $request->type;
        $racks->brand_id = $request->brand_id;
        $racks->slug = $request->slug;

        if ($request->file('image')){
            $myimage = $request->file('image');
            $filename = time() . '.' . $myimage->getClientOriginalExtension();
            $myimage->move(public_path('uploads'), $filename);
            $racks->image = $filename;
            
            
        }
        
        
        $racks->save();
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$racks = Rack::findOrFail($request->rack_id);

    	$racks->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$racks = Rack::findOrFail($request->rack_id);

    	$racks->delete($request->rack_id);
    	
        return back();

    }

}

