$(function(){
	setTimeout(function(){
		 var h = $(document).height()-$(window).height();
		var step=0.5;
		setInterval(function(){
			$(document).scrollTop(step);
			step=step+0.5;
			if(step>=h){
				setTimeout(function(){
					window.location.href='mall.html'
				},2000)
			}
		},1);
	},3000);
});