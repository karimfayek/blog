@extends('header1')

@section('content')

<div class="row" style="padding-left: 300px; margin-top: 50px; margin-bottom:100px">

    <h1 style="margin-bottom:5px; font-weight:400 ;color: #fd6534; font-size:32px ">
        {{$page->title}}
    </h1>
    <hr>
    <br>

    {!! $page->descreption !!}
</div>


    @endsection