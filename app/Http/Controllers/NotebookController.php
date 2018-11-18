<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\NoteBook;
use \App\Brand;

class NoteBookController extends Controller
{
    public function index()
    {
        $notebooks = NoteBook::all();
        $brands = Brand::all();

        return view('notebooks' ,compact('notebooks', 'brands'));

    }

    ////////

    public function store(Request $request)
    {

        NoteBook::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$notebooks = NoteBook::findOrFail($request->noteBook_id);

    	$notebooks->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$notebooks = NoteBook::findOrFail($request->noteBook_id);

    	$notebooks->delete($request->noteBook_id);
    	
        return back();

    }

}

