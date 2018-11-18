<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Page;
use \App\Category;
use \App\Brand;

class PageController extends Controller
{
    //


    public function index()
    {
        $pages = Page::all();
        $categories = Category::all();
        $brands = Brand::all();

        return view('pages', compact('pages', 'categories', 'brands'));

    }


    public function store(Request $request)
    {

        Page::create($request->all());
        //dd($request->all());
        return back();

    }


    public function update(Request $request)
    {

    	$page = Page::findOrFail($request->page_id);

    	$page->update($request->all());
    	
        return back();

    }

    public function destroy(Request $request)
    {

    	$page = Page::findOrFail($request->page_id);

    	$page->delete($request->page_id);
    	
        return back();

    }





}
