@extends('layouts.master')
@section('content')
<h3> All Brands</h3>

<table class="table table-responsive">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">modify</th>

    </tr>    
  </thead>

  <tbody>
  	@foreach($brands as $brand)
    <tr>
      <td>{{$brand->title}}</td>
      <td>{!! $brand->descreption !!} </td>
      <td>
        <button class="btn btn-info" data-toggle="modal" data-target="#editbrand" data-mytitle='{{$brand->title}}'data-mydesc='{!!$brand->descreption!!}' data-brandid={{$brand->id}} id= 'brand_id'> Edit</button>
        <button class="btn btn-danger" data-toggle="modal" data-target="#deletebrand" data-brandid={{$brand->id}} id= 'brand_id'> Delete</button>
      </td>
    </tr>
    @endforeach
  </tbody>

</table>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#brandModal">
  Add New brand
</button>

<!-- Modal -->
<div class="modal fade" id="brandModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('brand.store')}} method="post">
          {{csrf_field()}}
      <div class="modal-body">
      	
      	<div class="form-group">
      		<label for="title">Title</label>
      		<input type="text" name="title" class="form-control" id="title">
        </div>
        
        <div class="form-group">
      		<label for="slug">Slug</label>
      		<input type="text" name="slug" class="form-control" id="slug">
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
<div class="modal fade" id="editbrand" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit brand </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('brand.update', 'test')}} method="post">
      
      	{{method_field('patch')}}
      	{{csrf_field()}}
      	
      <div class="modal-body " id="get-data">
      	<input type="hidden" name="brand_id" id = 'brand_id'value="">
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
<div class="modal modal-danger fade" id="deletebrand" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Brand</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action={{route('brand.destroy', 'test')}} method="post">
        
          {{method_field('delete')}}
          {{csrf_field()}}
          
        <div class="modal-body">
          <input type="hidden" name="brand_id" id = 'brand_id'value="">
            
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

@section('scripts')

<!-- Scripts for Brand -->
$('#editbrand').on('show.bs.modal', function (e) {

  var button = $(e.relatedTarget)
  var title = button.data('mytitle')
  var des = button.data('mydesc')
  var brand_id = button.data('brandid')
  
  var modal = $(this)
  
  modal.find('.modal-body #title').val(title);
  modal.find('.modal-body #des').val(des);
  modal.find('.modal-body #brand_id').val(brand_id);
  tinyMCE.activeEditor.setContent(des);
  
  })
  
  $('#deletebrand').on('show.bs.modal', function (e) {
  
  var button = $(e.relatedTarget)
  var brand_id = button.data('brandid')
  var modal = $(this)
  modal.find('.modal-body #brand_id').val(brand_id);
  
  })
@endsection