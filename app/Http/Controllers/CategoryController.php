<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Category;

class CategoryController extends Controller
{
    //
    public function index()
    {
    	$categories = Category::all();

        return view('category', compact('categories'));

    }

    ////////

    public function store(Request $request)
    {

        Category::create($request->all());
        return back();

    }

    ////////

    public function update(Request $request)
    {

    	$category = Category::findOrFail($request->category_id);

    	$category->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$category = Category::findOrFail($request->category_id);

    	$category->delete($request->category_id);
    	
        return back();

    }

}

