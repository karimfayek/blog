@extends('layouts.master')
@section('content')
<h3> All Types</h3>

<table class="table table-responsive">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">modify</th>

    </tr>    
  </thead>

  <tbody>
  	@foreach($works as $work)
    <tr>
      <td>{{$work->title}}</td>
      <td>{!! $work->descreption !!} </td>
      <td>
        <button class="btn btn-info" data-toggle="modal" data-target="#edit" data-mytitle='{{$work->title}}'data-mydesc='{!!$work->descreption!!}' data-workid={{$work->id}} id= 'work_id'> Edit</button>
        <button class="btn btn-danger" data-toggle="modal" data-target="#delete" data-workid={{$work->id}} id= 'work_id'> Delete</button>
      </td>
    </tr>
    @endforeach
  </tbody>

</table>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#workModal">
  Add New Type
</button>

<!-- Modal -->
<div class="modal fade" id="workModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('work.store')}} method="post">
          {{csrf_field()}}
      <div class="modal-body">
          <div class="form-group">
              <label for="Brand">Brand</label>
              <select name ="brand_id" class="form-control">
                  <option value=""></option>
                  @foreach ($brands as $brand)                    
                      <option value="{{$brand->id}}"> {{$brand->title}} </option>
                  @endforeach
              </select>
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
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit work</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form action={{route('work.update', 'test')}} method="post">
      
      	{{method_field('patch')}}
      	{{csrf_field()}}
      	
      <div class="modal-body " id="get-data">
      	<input type="hidden" name="work_id" id = 'work_id'value="">
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
<div class="modal modal-danger fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete work</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action={{route('work.destroy', 'test')}} method="post">
        
          {{method_field('delete')}}
          {{csrf_field()}}
          
        <div class="modal-body">
          <input type="hidden" name="work_id" id = 'work_id'value="">
            
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