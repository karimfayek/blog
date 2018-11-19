@extends('header1')

@section('content')

<div class="wrapper">
	<div id="lp-main-carousel" class="clearfix">
		<div id="info">
			<h1 class="lp-title" style="font-weight:bold;">{{$brands->title}} PROLIANT SERVERS</h1>
			<p id="lp-description">{!!$brands->descreption!!}</p>	
		</div>
		{{-- <div id="lp-img-container"></div> --}}
	</div>
		<!-- #lp-main-carousel -->
	{{-- <div class="carousel-controls">
		<ol id="carousel-indicators"></ol>
	</div> --}}
</div>
    
      
	<!-- /.specifications wrapper -->

	<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

	<!-- #servers ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>
<div class="lp-tabs-menu-wrapper fixed-top">
		<div class="lp-tabs-menu-center">
			<ul class="lp-tabs-menu">
					@foreach ($types as $type)
				<li class="lp-tabs-menu-item"><a class="nav-link" href="#{{$type->title}}">{{$type->title}}</a></li>
				@endforeach
			</ul>
		</div>
	</div>


@foreach ($types as $type)
<div id="{{$type->title}}" class="lp-section section-white ">
	<!-- /#overview-menu -->
	<!-- hpe rack servers ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
	<!-- .overview wrapper -->
<div class="wrapper ">
       		<div class="lp-menu">
	
		</div>
	<h2 class="lp-main-title section-main-title">
			{{$type->title}}
	</h2>			
	<div class="copy align-left main-section">
		<div class="row">
			@foreach ($type->subtype as $t)
			<div class="col">
				<div class="s-rack col">
					<h2 class="column-title" data-mh="column-title-rack-servers">
							{{$t->title}}
					</h2>
					<h2 class="column-description" data-mh="column-description-rack-servers">
							{{$t->title}}
					</h2>
					<img class="column-img" src="../images/servers/entry-level-racks.png"  alt="Entry level HPE ProLiant server" title="Entry-level HPE ProLiant rack server">
					<h2 class="column-options-title">
						Available Options:
					</h2>
					<div class="column-options">
						<ul>
							@foreach ($t->item as $ent)
						<li><span><a class="file-link1 " href="server/{{ $ent->id}}" data-src="{{asset('uploads/'.$ent->image)}}" data-title="{{$ent->title}}" data-alt="{{$ent->title}}">{{$ent->title}}</a></span></li>	
							@endforeach						
							
						</ul>
					</div>
				</div>
				
			</div>
			@endforeach
		</div>
</div>
</div>
</div>
@endforeach

@endsection
