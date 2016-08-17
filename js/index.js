/*xiaomi.html*/

$(function() {

	//shoppingCart购物车
	(function() {
		$('#shopCart').find('a').hover(function() {
			$('#shopCart').find('.cart-menu').css('display', 'block');
		},function() {
			$('#shopCart').find('.cart-menu').css('display', 'none');
		})
	})();

	//header-nav头部导航
	(function() {

		var aLi = $('.header-nav').find('.nav-item');
		var num = aLi.length;

		$('.header-nav').find('.nav-item').each(function(index) {	
			if ( index < num-2 ) {
				$(this).hover(function() {

					$('#header-nav-con').stop().slideDown();

					$('#header-nav-con').find('.navCon').css('display', 'none');
					$('#header-nav-con').find('.navCon').eq(index).css('display', 'block');						

				},function() {

					$('#header-nav-con').stop().slideUp();
				})
			}				
		});	

		$('#header-nav-con').hover(function() {

			$(this).stop().css('display', 'block');

		}, function() {

			$(this).slideUp();

		});		
	})();	

	//search搜索
	(function() {

		$('.search-input').focus(function() {
			$(this).css('border-color','#ff6700');
			$('.search-btn').css('border','1px solid #ff6700');	
	
		})

		$('.search-input').blur(function() {

			if ( $('.search-input').val() ) {

				$(this).css('border-color','#ff6700');
				$('.search-btn').css('border','1px solid #ff6700');	

				$('.search-hot-words ').css('display', 'none');

			} else {

				$('.search-hot-words ').css('display', 'block');

				$('.search-input').css('border-color','#e0e0e0');
				$('.search-btn').css('border','none');
			}
		})

		$('.search-input').click(function(e) {

			e.stopPropagation();
			$('.search-list ').css('display', 'block');
		})

	})();

	//side-nav侧边导航
	(function() {

		var oDiv = $('.side-nav');
		var aLi = oDiv.find('.nav-li');

		aLi.each(function(index) {

			$(this).hover(function() {
				$(this).addClass('active');
				$(this).find('.side-nav-con').css('display', 'block');

			}, function() {

				$(this).removeClass('active');
				$(this).find('.side-nav-con').css('display', 'none');				

			})
		})
	})();

	//tab-banner图片轮播
	(function() {
		var oDiv = $('.tab-banner');
		var aPic = oDiv.find('.banner-pic');
		var oPrev = oDiv.find('.prev').eq(0);
		var oNext = oDiv.find('.next').eq(0);
		var oCir = oDiv.find('.circle-list');
		var aCir = oDiv.find('.circle');
		var num = 0;		
		var timer = null;	

		aCir.eq(0).addClass('active');
		aPic.eq(0).css('z-index', '-1');
		aPic.eq(1).css('z-index', '-2');
		aPic.eq(2).css('z-index', '-3');
		aPic.eq(3).css('z-index', '-4');
		aPic.eq(4).css('z-index', '-5');

		auto();

		oPrev.click(function() {

			clearInterval(timer);
			num--;
			if ( num < 0) num = aPic.length-1;
			fnTab();
			auto();
		});

		oNext.click(function() {
			//alert(1);
			clearInterval(timer);
			num++;
			if ( num > aPic.length-1 ) num = 0;
			fnTab();
			auto();
		});

		aCir.each(function(index) {

			$(this).hover(function() {

				clearInterval(timer);
				$(this).eq(index).addClass('active');

			}, function() {

				$(this).eq(index).removeClass('active');
				auto();
			})

			$(this).click(function() {

				num = index;
				fnTab();
				auto();
			})
		});


		function auto() {

			clearInterval(timer);

			timer = setInterval(function() {

				num++;
				num %= aPic.length;
				fnTab();

			},4000)
		};

		function fnTab() {

			aPic.each(function(index) {

				aPic.stop().fadeOut(400);
				aCir.removeClass('active');	

			});

			aPic.eq(num).stop().fadeIn(400);
			aCir.eq(num).addClass('active');
		};

	})();

	//明星产品
	(function() {

		fnTab($('#hero'));
		fnTab($('#recommend'));

		function fnTab ( obj ) {

			var oDiv1 = obj.find('div').eq(0);
			var aBtn = oDiv1.find('span');			

			var oDiv2 = obj.find('div').eq(1);
			var oUl = oDiv2.find('ul').eq(0);
			var oLi = oDiv2.find('li').eq(0);

			var iL = oLi.outerWidth()*5;
			var num = 0;

			var timer = null;

			auto();

			aBtn.each(function(index) {

				$(this).click(function() {

					clearInterval(timer);
					num = index;
					//alert(num);
					play();
					auto();
				})			
			});

			function auto() {

				timer = setInterval(function() {

					num++;
					num %= 2;					
					play(num);
					
				},4000);
			};

			function play() {				

				if ( num == 1 ) {

					oUl.animate({'left': -iL });

					aBtn.eq(0).css('background-position', '-68px 0').hover(function() {
						$(this).css('background-position', '-136px 0');
					}, function() {
						$(this).css('background-position', '-68px 0')
					});

					aBtn.eq(1).css('background-position', '-34px 0').hover(function() {
						$(this).css('background-position', '-34px 0');
					});
					

				} else {

					oUl.animate({'left': 0 });

					aBtn.eq(0).css('background-position', '0 0').hover(function() {
						$(this).css('background-position', '0 0');
					});

					aBtn.eq(1).css('background-position', '-102px 0').hover(function() {
						$(this).css('background-position', '-170px 0');
					}, function() {
						$(this).css('background-position', '-102px 0')
					});		
				}
			};
		}
	})();

	//section 块级鼠标移入切换
	(function() {

		fnTab($('#section1'));
		fnTab($('#section2'));
		fnTab($('#section3'));

		function fnTab(oDiv) {

			var aSpan = oDiv.find('.text').find('span');
			var aCon = oDiv.find('.section-right');
			var aLi = aCon.find('.shadow');			

			aLi.each(function(index) {
				var oCom = aLi.eq(index).find('.comment');
				aLi.eq(index).hover(function() {
					oCom.slideDown('fast');
				}, function() {
					oCom.slideUp('fast');					
				})
			})

			aSpan.each(function(index) {
				$(this).hover(function() {

					aSpan.removeClass('active');
					aSpan.eq(index).addClass('active');

					aCon.css('display', 'none');
					aCon.eq(index).css('display', 'block');
				})
			})
			
		};
	})();

	//内容轮播
	(function() {

		fnTab($('#other1'));
		fnTab($('#other2'));
		fnTab($('#other3'));
		fnTab($('#other4'));

		function fnTab(obj) {
			var oPrev = obj.find('.prev');
			var oNext = obj.find('.next');
			var oUl = obj.find('.pic ul');
			var aLi = oUl.find('li');
			var aCir = obj.find('.circle strong');
			var num = 0;

			var iL = aLi.eq(0).outerWidth();

			//alert(iL);

			obj.hover(function() {

				oPrev.css('display', 'block');
				oNext.css('display', 'block');

			}, function() {			

				oPrev.css('display', 'none');
				oNext.css('display', 'none');

			})

			oPrev.click(function() {
				
				num--; 
				if ( num<0 ) num = 0;
				play();
			})

			oNext.click(function() {
				num++;
				if ( num>aLi.length-1 ) num = aLi.length-1;
				play();
			})
			//alert(aCir);
			aCir.each(function(index) {
				$(this).click(function() {
					//alert(1);
					num = index;
					play();
				})
			})

			function play() {
				oUl.css('left', -iL*num + "px");
				aCir.removeClass('active');
				aCir.eq(num).addClass('active');
			}



		}
	})();

});