(function($) { "use strict";

	// SLIDESHOW
	
				if (jQuery(".tp-banner").length) {
					jQuery('.tp-banner').revolution({
						delay:5000,
						startwidth:1170,
						startheight:580,
						hideThumbs:200,
						fullWidth:"off",
						fullScreen:"off",
						navigationType:"bullet",
					});
				}
	
	// ANIMATION
	
				jQuery(".animation").each( function() {
					var $this = jQuery(this);
					var animation = $this.attr("data-animate");
					$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
						if (isInView) {
							$this.css("visibility","visible");
							$this.addClass(animation);
							if(animation.indexOf("fade") === -1) {
								$this.css("opacity", "1");
							}
						}
					});
				});
	
	// TESTIMONIALS

				jQuery(".bxslider-slide > ul").bxSlider({easing: "linear",tickerHover: true,slideWidth: 1170,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});
				
				// ACCORDION
				jQuery(".accordion-shortcode .accordion-row:first > .accordion-title").addClass("active");
				jQuery(".accordion-shortcode .accordion-row > .accordion-title").on("click", function(e){ 
				if(jQuery(this).parent().has("ul")) { e.preventDefault(); } 
				if(!jQuery(this).hasClass("active")) { 
				// hide any open menus and remove all other classes 
				jQuery(".accordion-shortcode .accordion-row > .accordion-title").removeClass("active"); jQuery(".accordion-shortcode .accordion-row > .accordion-content").removeClass("opened"); 
				jQuery(".accordion-shortcode .accordion-row > .accordion-content").slideUp(500); 
				// open our new menu and add the active class 
				jQuery(this).addClass("active"); jQuery(".accordion-shortcode .accordion-row > .accordion-content").addClass("opened"); jQuery(this).next(".accordion-content").slideDown(500); } 
			    else if(jQuery(this).hasClass("active")) { jQuery(this).removeClass("active"); 
			    jQuery(".accordion-shortcode .accordion-row > .accordion-content").removeClass("opened"); 
			    jQuery(this).next(".accordion-content").slideUp(500); } 
			    
			    }); 

    // PROGRESS BAR

    		$(".progressbar-percent").each(function(){
    			var thisbar = $(this);
    			var percent = thisbar.attr("data-percent");
    			thisbar.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
    				if (isInView) {
    					thisbar.animate({ "width" : percent + "%"}, percent*20);
                        thisbar.parents('.progressbar').find('.progressbar-title span').animate({ "right" : (95-percent) + "%"}, percent*20);
    				}
    			});
    		});

    // TWEETER	

		    $('.tweets').tweecool({
			// Your twitter username
			username : 'jqueryscript',
			 
			// Number of tweets to show
			limit : 2, 
			 
			// Show profile image
			profile_image : false, 
			 
			// Show tweet time
			show_time : true, 
			 
			// Show media
			show_media : false,
			 
			//values: small, large, thumb, medium 
			show_media_size: 'thumb' 
			});

	// GO UP
	     jQuery(window).scroll(function () {
			if(jQuery(this).scrollTop() > 100 ) {
				jQuery(".go-up").css("right","20px");
			}else {
				jQuery(".go-up").css("right","-60px");
			}
			});
		jQuery(".go-up").click(function(){
			jQuery("html,body").animate({scrollTop:0},500);
			return false;
		});
        
    //dropdown-menu
        jQuery('.dropdown').hover(
            function(){
                var dropdown = jQuery(this);
                var dropdown_menu = dropdown.find('.dropdown-menu');
                dropdown_menu.fadeIn('slow');
            },
            function(){
                var dropdown = jQuery(this);
                var dropdown_menu = dropdown.find('.dropdown-menu');
                dropdown_menu.stop( true, true ).fadeOut("slow");
            }
        );
	
})(jQuery);