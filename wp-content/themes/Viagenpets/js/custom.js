(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        
        $('.navbar-toggle').click(function() {
            if($(this).hasClass('click-effect')) {   
                $(this).removeClass('click-effect');
            }
            else{
                $(this).addClass('click-effect');
            }
        });
		
		if ($(window).width() < 991) {
			$('#menu-new-main-menu').navAccordion({
				expandButtonText: '<i class="fa fa-plus"></i>',  //Text inside of buttons can be HTML
				collapseButtonText: '<i class="fa fa-minus"></i>'
			}, 
		function(){
				console.log('Callback')
            });
        }
		
		// Home Slider
		
		$(".home-banner-section").owlCarousel({
            items: 1,
			loop:true,
            nav:false,
            autoplay:false,
        });
		
    });
    
    jQuery(window).load(function(){
        
    });
    
}(jQuery));