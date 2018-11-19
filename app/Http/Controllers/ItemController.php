<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Item;
use \App\Subtype;
use \App\Brand;
use \App\Type;
use \App\Category;
use \App\Page;

class ItemController extends Controller
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
        $items = Item::all();
        $subtypes = Subtype::all();

        return view('item' ,compact('items', 'subtypes'));

    }

    ////////

    public function store(Request $request)
    {
        $items = new Item;
        $items->subtype_id = $request->subtype_id;
        $items->title = $request->title;
        $items->slug = $request->slug;
        $items->descreption = $request->descreption;
        $items->specifications = $request->specifications;
        
        

        if ($request->file('image')){
            $myimage = $request->file('image');
            $filename = time() . '.' . $myimage->getClientOriginalExtension();
            $myimage->move(public_path('uploads'), $filename);
            $items->image = $filename;
            
            
        }
        
        
        $items->save();
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

    public function root()
    {       
        
        $brands = Brand::all();
        $wss = Type::where('Work-Station', 1)->get();

        return view('welcome' ,compact('brands','wss'));
    }


    public function servers(Request $request)
    {
        
        $brands = Brand::findOrFail($request->id);
        $allbrands = Brand::all();
        $types = Type::where('brand_id', $brands->id)->where('Server', 1)->get();
        $typew = Type::where('brand_id', $brands->id)->where('Work-Station', 1)->get();
        $typest = Type::where('brand_id', $brands->id)->where('Storage', 1)->get();
        $cats = Category::all();

        return view('servers' ,compact('brands', 'allbrands','types','typew', 'typest','cats'));
    }

    public function workstations(Request $request)
    {

        $brands = Brand::findOrFail($request->id);
        $allbrands = Brand::all();
        $types = Type::where('brand_id', $brands->id)->where('Work-Station', 1)->get();
        $cats = Category::all();


        return view('work-stations' ,compact('brands', 'types', 'allbrands','cats'));
    }

    public function storages(Request $request)
    {

        $brands = Brand::findOrFail($request->id);
        $allbrands = Brand::all();
        $types = Type::where('brand_id', $brands->id)->where('Storage', 1)->get();


        return view('work-stations' ,compact('brands', 'types', 'allbrands'));
    }

    public function server(Request $request)
    {
        
        $items = Item::findOrFail($request->id);        
        //dd($items);
        return view('server' ,compact('items'));
    }

    public function workstation(Request $request)
    {

        $items = Item::findOrFail($request->id);
        //dd($items);
        return view('server' ,compact('items'));
    }

    public function page(Request $request)
    {

        $page = Page::findOrFail($request->id);
        $allbrands = Brand::all();
        //$types = Type::where('brand_id', $brands->id)->where('Work-Station', 1)->get();
        $cats = Category::all();


        return view('page' ,compact('page', 'types', 'allbrands','cats'));
    }

}

