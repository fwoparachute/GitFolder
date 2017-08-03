//ready collection
$(document).ready(function(){
	/* Initialize IU.JS*/
	
	console.log('iu')
	if (typeof isEditor != 'undefined' && isEditor == true){
		return;
	}
	console.log('start : transition code');
                  
	//Initialize transition
	$('.IUTransition').each(function(){
        var eventType = $(this).attr('transitionevent');
                            
        if (eventType=='mouseOn'){
            $(this).mouseenter(transitionAnimationOn);
            $(this).mouseleave(transitionAnimationOff);
        }
        else {
            $(this).bind(eventType, transitionAnimation);
        }
        var firstObj = $(this).children().filter('.IUItem')[0];
        $(firstObj).css('display', 'block');
        var secondObj = $(this).children().filter('.IUItem')[1];
        $(secondObj).css('display', 'none');
	});
                  
    //Initialize IUMenu
	$('.mobile-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
	
	$('.IUMenuBar > ul > li.has-sub, .IUMenuBar > ul > li > ul > li.has-sub').hover(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}
		else{
			$(this).addClass('open');
		}
		
		var menu = $(this).children('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
	
	$('.IUMenuBar a[href]').each(function() {
		var url = window.location.pathname;
        var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));
		if(urlRegExp.test(this.href)){
	      $(this).parent().addClass('active');
	  	}
		else{
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
			}
		}
	  });
	  
	 
      /* Initialize index */
      
              
              
              /* IUCarousel initialize */
              
              initCarousel('Carousel1')  
    
    
      /* Initialize background */
      
    
    
      /* Initialize class */
      
    
    

                  
	/* Initialize IUFrame.js */
	resizePageContentHeight();
	resizeCollection();
	reframeCenter();
	resizePageLinkSet();
	
	/* Initialize iu.js*/
	relocateScrollAnimation();
            
    console.log("ready : iuinit.js");
});
