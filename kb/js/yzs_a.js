$(function(){
	setTimeout(function(){
		$('#fp-nav ul li').eq(1).children().click();
		setTimeout(function(){
			$('#fp-nav ul li').eq(2).children().click();
			setTimeout(function(){
				$('#fp-nav ul li').eq(3).children().click();
				setTimeout(function(){
					$('#fp-nav ul li').eq(4).children().click();
					setTimeout(function(){
						$('#fp-nav ul li').eq(5).children().click();
							setTimeout(function(){
								window.location.href='https://lckandlzz.github.io/lck/op/index.html'
							},6000)
					},6000);
				},6000);
			},6000);
		},6000);
	},6000);
});
