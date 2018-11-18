var LP = LP || {};

LP.config = {
	interval: 8000,
	duration: 350, // duration starts with decimal point
	images: [
		
		{
			src: '../dist/landing/i/hpe-servers/carousel/DL380g9.jpg',
			description: 'HPE has an impressive history for their innovative use of new technology, consistently raising the bar on server design to squeeze more into a smaller box. IT Creations carries a full line of HPE ProLiant Servers to meet your business and performance needs. IT Creations has the components on hand to upgrade or custom configure your system and deliver the next day, if you order before 11am PST. Ask about our 5-Year Standard Warranty.'
		},
		{
			src: '../dist/landing/i/hpe-servers/carousel/ML350g8.jpg',
			description: 'HPE has an impressive history for their innovative use of new technology, consistently raising the bar on server design to squeeze more into a smaller box. IT Creations carries a full line of HPE ProLiant Servers to meet your business and performance needs. IT Creations has the components on hand to upgrade or custom configure your system and deliver the next day, if you order before 11am PST. Ask about our 5-Year Standard Warranty.'
		},
		{
			src: '../dist/landing/i/hpe-servers/carousel/c7000-1.jpg',
			description: 'HPE has an impressive history for their innovative use of new technology, consistently raising the bar on server design to squeeze more into a smaller box. IT Creations carries a full line of HPE ProLiant Servers to meet your business and performance needs. IT Creations has the components on hand to upgrade or custom configure your system and deliver the next day, if you order before 11am PST. Ask about our 5-Year Standard Warranty.'
		},
		{
			src: '../dist/landing/i/hpe-servers/carousel/ws460c.jpg',
			description: 'HPE has an impressive history for their innovative use of new technology, consistently raising the bar on server design to squeeze more into a smaller box. IT Creations carries a full line of HPE ProLiant Servers to meet your business and performance needs. IT Creations has the components on hand to upgrade or custom configure your system and deliver the next day, if you order before 11am PST. Ask about our 5-Year Standard Warranty.'
		}
	]
};

$.getScript("../dist/js/match-height.js", function(){
});
function preloadImg(src) {
    var img = new Image();
    img.src = src;
}

jQuery(document).ready(function($){
	$('.file-link1').on('mouseover touchstart', function(){
		if ($src = $(this).data('src')) {
			var $target = $(this).closest('div').parent().find('img');
			$target.attr('src', $src);
			if ($title = $(this).data('title')) {
				$target.attr('title', $title);
			}
			if ($alt = $(this).data('alt')) {
				$target.attr('alt', $alt);
			}
		}
	});

	$('.file-link1').each(function(){
		if ($src = $(this).data('src')) {
			preloadImg($src);		
		}
	});
});