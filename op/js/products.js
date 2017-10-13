$(function() {
	//Global
	$(".Global").click(function(){
		$(".language").stop().slideToggle(500);
	})
	
	//三张产品图
	$(".main-pic1").on("mouseenter", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1.1 + ")");
	}).on("mouseleave", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1 + ")");
	});
	$(".main-pic2").on("mouseenter", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1.1 + ")");
	}).on("mouseleave", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1 + ")");
	});
	$(".main-pic3").on("mouseenter", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1.1 + ")");
	}).on("mouseleave", function() {
		var $this = $(this).children().children(1).prev();
		$($this).css("transform", "scale(" + 1 + ")");
	});

	//各系列图
	$(".xl-minbox").on("mouseenter", function() {
		var $this = $(this);
		$($this).stop().animate({ top: -2 });
	}).on("mouseleave", function() {
		var $this = $(this);
		$($this).stop().animate({ top: 0 });
	})

	//二维码
	$(".foot-logo2").on("mouseenter", function() {
		$(".wx-ewm").show();
	}).on("mouseleave", function() {
		$(".wx-ewm").hide();
	});
	$(".foot-logo3").on("mouseenter", function() {
		$(".zfb-ewm").show();
	}).on("mouseleave", function() {
		$(".zfb-ewm").hide();
	});
	//自适应二维码
	$(".foot-1-logo2").on("mouseenter", function() {
		$(".wx-1-ewm").show();
	}).on("mouseleave", function() {
		$(".wx-1-ewm").hide();
	});
	$(".foot-1-logo3").on("mouseenter", function() {
		$(".zfb-1-ewm").show();
	}).on("mouseleave", function() {
		$(".zfb-1-ewm").hide();
	});

	//返回顶部hover
	$(".back-top").on("mouseenter", function() {
		$(this).css({
			"background": "#47B488",
			"color": "#fff"
		});
		$(".back-top1").show();
	}).on("mouseleave", function() {
		$(this).css({
			"background": "#EDEDED",
			"color": "#7B7B7B"
		});
		$(".back-top1").hide();
	});
	$(".back-yj").on("mouseenter", function() {
		$(this).css({
			"background": "#47B488",
			"color": "#fff"
		});
		$(".back-yj1").show();
	}).on("mouseleave", function() {
		$(this).css({
			"background": "#EDEDED",
			"color": "#EB4F38"
		});
		$(".back-yj1").hide();
	})

	//返回顶部
	function scroll() {
		if(window.pageYOffset != null) {
			return {
				left: window.pageXOffset,
				top: window.pageYOffset
			}
		} else if(document.compatMode == "CSS1Compat") {
			return {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			}
		}
		return {
			left: document.body.scrollLeft,
			top: document.body.scrollTop
		}
	}
	$(window).on("scroll", function() {
		if(scroll().top > 150) {
			$(".back").show();
		} else {
			$(".back").hide();
		}
		leader = scroll().top;
	});
	var leader = 0,
		target = 0,
		timer = null;
	$(".back-top").click(function() {
		target = 0;
		timer = setInterval(function() {
			leader = leader + (target - leader) / 10;

			window.scrollTo(0, leader);
			if(leader == target) {
				clearInterval(timer);
			}
		}, 30);
	});
	
	//自适应部分
	$(".lb-1").click(function(){
		$(this).hide(500);
		$(".x-1").show(500);
		$(".head-top-l-ul").show(500);
	});
	$(".x-1").click(function(){
		$(this).hide(500);
		$(".lb-1").show(500);
		$(".head-top-l-ul").hide(500);
	});
	$(".head-top-r-1 i").click(function(){
		$("#information").toggle(500);
		
	})
	$(window).on("scroll",function(){
		var dq = $(".main-1-ul").offset().top;
		if(scroll().top>dq){
			$(".main-1-ul").css({
				"position":"fixed",
				"top":0,
			});
		}
	});
	$(window).on("scroll",function(){
		var dq = $(".main-1-box").offset().top;
		if(scroll().top<dq){
			$(".main-1-ul").css("position","relative");
		}
		var R = $("#r1").offset().top-100,
			A = $("#a1").offset().top-100,
			F = $("#f1").offset().top-100,
			N = $("#n1").offset().top-100,
			T = $(".ts-1").offset().top-100;
		if(scroll().top>=R){
			$("#R").addClass("mr").siblings().removeClass("mr");
		}else{
			$("#R").removeClass("mr");
		}
		if(scroll().top>A){
			$("#A").addClass("mr").siblings().removeClass("mr");
		}
		if(scroll().top>F){
			$("#F").addClass("mr").siblings().removeClass("mr");
		}
		if(scroll().top>N){
			$("#N").addClass("mr").siblings().removeClass("mr");
		}
		if(scroll().top>T){
			$("#N").removeClass("mr");
		}
	});
	$(".main-1-ul li").click(function(){
		$(this).addClass("mr").siblings().removeClass("mr");
	});
	var r=0,a=0,f=0,n=0;
	$("#R").click(function(){
		clearInterval(timer);
		r = $("#r1").offset().top-50;
		timer = setInterval(function() {
			leader = leader + (r - leader) / 10;

			window.scrollTo(0, leader);
			if(leader == r) {
				clearInterval(timer);
			}
		}, 10);
	})
	$("#A").click(function(){
		clearInterval(timer);
		a = $("#a1").offset().top-50;
		timer = setInterval(function() {
			leader = leader + (a - leader) / 10;

			window.scrollTo(0, leader);
			if(leader == a) {
				clearInterval(timer);
			}
		}, 10);
	})
	$("#F").click(function(){
		clearInterval(timer);
		f = $("#f1").offset().top-50;
		timer = setInterval(function() {
			leader = leader + (f - leader) / 10;

			window.scrollTo(0, leader);
			if(leader == f) {
				clearInterval(timer);
			}
		}, 10);
	})
	$("#N").click(function(){
		clearInterval(timer);
		n = $("#n1").offset().top-50;
		timer = setInterval(function() {
			leader = leader + (n - leader) / 10;

			window.scrollTo(0, leader);
			if(leader == n) {
				clearInterval(timer);
			}
		}, 10);
	})
})