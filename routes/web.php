<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('test', 'NewsController@test');
Auth::routes();
Route::get('/home', 'HomeController@home');
Route::resource('category', 'CategoryController');
Route::resource('page', 'PageController');
Route::resource('blades', 'BladeController');
Route::resource('brand', 'BrandController');
Route::resource('desktop', 'DesktopController');
Route::resource('mobile', 'MobileController');
Route::resource('monitor', 'MonitorController');
Route::resource('network', 'NetworkingController');
Route::resource('notebook', 'NotebookController');
Route::resource('printer', 'PrinterController');
Route::resource('rack', 'RackController');
Route::resource('item', 'ItemController');
Route::resource('towers', 'TowerController');
Route::resource('storage', 'StorageController');
Route::resource('thin', 'ThinController');
Route::resource('work', 'WorkstationsController');
Route::resource('type', 'TypeController');
Route::resource('subtype', 'SubTypeController');


Route::get('/', 'ItemController@root');
Route::get('servers/{id}', 'ItemController@servers');
Route::get('workstations/{id}', 'ItemController@workstations');
Route::get('storages/{id}', 'ItemController@storages');
Route::get('servers/server/{id}', 'ItemController@server');
Route::get('workstations/workstation/{id}', 'ItemController@workstation');
