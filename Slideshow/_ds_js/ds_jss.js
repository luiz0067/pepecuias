	$(document).ready(function() {	
		$('.ds_container').css('width','1101px');
		$('.ds_main_image').css({'width':'800px','height':'350px'});
		$('.ds_image_thumb').css('width','300px');
		$('.ds_image_thumb UL LI').css({
			'width':'280px',
			'padding-left': '9px',
			'padding-right': '9px',
			'padding-top': '5px',
			'padding-bottom': '5px'
			});
		$('.ds_main_image .ds_desc').show(); 
		$('.ds_main_image .ds_block').animate({ opacity: 0.85 }, 1 ); 
		$('.ds_image_thumb ul li:first').addClass('active'); 
		$('.ds_image_thumb ul li').click(function(){ 
			var imgAlt = $(this).find('img').attr('alt'); 
			var imgTitle = $(this).find('a').attr('href'); 
			var imgDesc = $(this).find('.ds_block').html(); 
			var imgUrl=$(this).find('#ds_hide_url').html(); 
			var imgTarget=$(this).find('#ds_hide_target').html(); 
			var imgDescHeight = $('.ds_main_image').find('.ds_block').height();	
			if ($(this).is('.active')) {  
				return false; 
			} else {
				$('.ds_main_image .ds_block').animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
					$('.ds_main_image .ds_block').html(imgDesc).animate({ opacity: 0.85,	marginBottom: '0' }, 250 );
					$('.ds_main_image img').attr({ src: imgTitle , alt: imgAlt});
					if (imgUrl){
						$('.ds_main_image .ds_link').attr({href: imgUrl, target:imgTarget});
					}else{
						$('.ds_main_image .ds_link').removeAttr('href');
					}
				});
			}
			$('.ds_image_thumb ul li').removeClass('active'); 
			$(this).addClass('active');  
			return false;
		}) .hover(function(){
			$(this).addClass('hover');
			}, function() {
			$(this).removeClass('hover');
		});
		$('a.ds_collapse').click(function(){
			$('.ds_main_image .ds_block').slideToggle();
			$('a.ds_collapse').toggleClass('ds_show');
		});
	});

