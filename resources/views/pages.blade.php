@extends('layouts.master')
@section('content')
<h3> All Pages</h3>

<table class="table table-responsive">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">modify</th>

    </tr>    
  </thead>

  <tbody>
  	@foreach($pages as $page)
    <tr>
      <td>{{$page->title}}</td>
      <td>{!! $page->descreption !!} </td>
      <td>
        <button class="btn btn-info" data-toggle="modal" data-target="#editpage" data-mytitle='{{$page->title}}'data-mydesc='{!!$page->descreption!!}' data-pageid={{$page->id}} id= 'page_id'> Edit</button>
        <button class="btn btn-danger" data-toggle="modal" data-target="#deletepage" data-pageid={{$page->id}} id= 'page_id'> Delete</button>
      </td>
    </tr>
    @endforeach
  </tbody>

</table>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pageModal">
  Add New Page
</button>

<!-- Page Modal -->
<div class="modal fade" id="pageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('page.store')}} method="post">
          {{csrf_field()}}
          <div class="modal-body">
            <div class="form-group">
                <label for="Cat">Cat</label>
                <select name ="categories_id" class="form-control">
                    <option value=""></option>
                    @foreach ($categories as $cat)                    
                        <option value="{{$cat->id}}"> {{$cat->title}} </option>
                    @endforeach
                </select>
                <label for="Brand">Brand</label>
                <select name ="brand_id" class="form-control">
                  <option value=""></option>
                  @foreach ($brands as $brand)                    
                      <option value="{{$brand->id}}"> {{$brand->title}} </option>
                  @endforeach
              </select>
            </div>
        
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" name="title" class="form-control" id="title">
            </div>

            <div class="form-group">
              <label for="des">Content</label>
              <textarea  type="text" name="descreption" id="des" cols="90" rows="5"></textarea>
            </div>
            </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
       </form>

    </div>
  </div>
</div>

<!-- Edit Modal -->
<div class="modal fade" id="editpage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Page</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('page.update', 'test')}} method="post">
      
      	{{method_field('patch')}}
      	{{csrf_field()}}
      	
      <div class="modal-body " id="get-data">
      	<input type="hidden" name="page_id" id = 'page_id' value="">
      	<div class="form-group">
      		<label for="title">Title</label>
      		<input type="text" name="title" class="form-control" id="title">
      	</div>

      	<div class="form-group">
      		<label for="des">Content</label>
      		<textarea  type="text" name="descreption" id="des" cols="90" rows="5"></textarea>
      	</div>
      	</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
       </form>

    </div>
  </div>
</div>
<!-- end edit Modal -->

<!-- Delete Modal -->
<div class="modal modal-danger fade" id="deletepage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Page</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action={{route('page.destroy', 'test')}} method="post">
        
          {{method_field('delete')}}
          {{csrf_field()}}
          
        <div class="modal-body">
          <input type="hidden" name="page_id" id = 'page_id'value="">
            
          <div class="form-group">
            <label for="des">Are You sure</label>
            
          </div>
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">No Thanks</button>
          <button type="submit" class="btn btn-danger">Yes , delete</button>
        </div>
         </form>
  
      </div>
    </div>
  </div>
@endsection