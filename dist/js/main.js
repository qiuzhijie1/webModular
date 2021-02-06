$(function () {

	// 返回顶部 头部阴影
	$('.go_top').click(function () {
		$('html, body').stop(true, true).animate({
			scrollTop: 0
		}, 500);
	});
	var windowT = $(window).scrollTop();

	if ($(".nav").length > 0) {
		var navTop = $(".nav").offset().top;
	}

	if (windowT > 0) {
		$('.header').addClass('fixed');
		$("body").css("padding-top", "170px");
	} else {
		$("body").css("padding-top", "0");
		$('.header').removeClass('fixed');
	}
	if ((windowT + 170) >= navTop) {
		$('.nav').addClass('fixed');
		$("main").css("padding-top", "60px");
	} else {
		$('.nav').removeClass('fixed');
		$("main").css("padding-top", "0");

	}
	if (windowT > 100) {
		$('.go_top').fadeIn(300);
	}
	$(window).on('scroll', function () {
		windowT = $(window).scrollTop();
		console.log(windowT)
		if (windowT > 0) {
			$('.header').addClass('fixed');
			$("body").css("padding-top", "170px");
		} else {
			$('.header').removeClass('fixed');
			$("body").css("padding-top", "0");
		}
		if ((windowT + 170) >= navTop) {
			$('.nav').addClass('fixed');
			$("main").css("padding-top", "60px");
		} else {
			$('.nav').removeClass('fixed');
			$("main").css("padding-top", "0");

		}
		if (windowT > 100) {
			$('.go_top').fadeIn(300);
		} else {
			$('.go_top').fadeOut(300);
		}
	})



	// 浏览器升级提示
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	reIE.test(userAgent);
	var fIEVersion = parseFloat(RegExp["$1"]);
	if (fIEVersion <= 9) {
		$('html, body').css({
			'height': '100%',
			'overflow': 'hidden'
		});
		$("#browser_mask").css('display', 'block');
		$("#browser_hint").css('display', 'block');
	}




	/* 取消冒泡 IE兼容 */
	function fn(event) {
		var ev = window.event || event;
		if (ev && ev.stopPropagation) {
			ev.stopPropagation();
		} else {
			ev.cancelBubble = true;
		}
	}





	/* 头部手机菜单按钮 STRAT */
	$('.head_mobile_btn').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	})
	/* 头部手机菜单1 END */


	/* 头部下拉1 STRAT */
	new Swiper('.head_dropdown .swiper-container', {
		paginationClickable: true,
		observer: true,
		slidesPerView: 5,
		observeParents: true,
	})

	//手机下拉
	$(".head_dropdown .mobile_down .block").click(function () {
		if ($(this).hasClass('active')) {
			$(".head_dropdown .mobile_down .block").removeClass('active').find('.mobile_nav_down').stop(true, false).slideUp();

		} else {
			$(".head_dropdown .mobile_down .block").removeClass('active').find('.mobile_nav_down').stop(true, false).slideUp();
			$(this).addClass('active').find('.mobile_nav_down').slideDown();
		}
	})
	/* 头部下拉1 END */



	//视频弹窗
	$('.exit_video').click(function () {
		$(".video_popup").fadeOut(30);
		$('.video_popup .video').html('');
	})

	$('.video_play').click(function () {
		var video = $(this).data('url');
		if (video != undefined) {
			$(".video_popup").fadeIn();
			$('.video_popup .video').html('<video  id="video" src="' + video + '" controls="controls"></video>');
			$('.video_popup .video video').get(0).play();
			var elevideo = document.getElementById("video");
			elevideo.addEventListener('pause', function () { //暂停开始执行的函数
				$(".video_popup").fadeOut(30);
				$('.video_popup .video').html('');
			});
		}
	})


	$('.video_popup').click(function () {
		$(".video_popup").fadeOut(30);
		$('.video_popup .video').html('');
	})




	// fadeIn动画
	scrollTop('.animate_fadeLeft200', 'fadeInLeft200');
	scrollTop('.animate_fadeLeft150', 'fadeInLeft150');
	scrollTop('.animate_fadeLeft100', 'fadeInLeft100');
	scrollTop('.animate_fadeLeft80', 'fadeInLeft80');
	scrollTop('.animate_fadeLeft50', 'fadeInLeft50');
	scrollTop('.animate_fadeLeft30', 'fadeInLeft30');
	scrollTop('.animate_fadeLeft20', 'fadeInLeft20');
	scrollTop('.animate_fadeLeft10', 'fadeInLeft10');

	scrollTop('.animate_fadeRight200', 'fadeInRight200');
	scrollTop('.animate_fadeRight150', 'fadeInRight150');
	scrollTop('.animate_fadeRight100', 'fadeInRight100');
	scrollTop('.animate_fadeRight80', 'fadeInRight80');
	scrollTop('.animate_fadeRight50', 'fadeInRight50');
	scrollTop('.animate_fadeRight30', 'fadeInRight30');
	scrollTop('.animate_fadeRight20', 'fadeInRight20');
	scrollTop('.animate_fadeRight10', 'fadeInRight10');

	scrollTop('.animate_fadeUp200', 'fadeInUp200');
	scrollTop('.animate_fadeUp150', 'fadeInUp150');
	scrollTop('.animate_fadeUp100', 'fadeInUp100');
	scrollTop('.animate_fadeUp80', 'fadeInUp80');
	scrollTop('.animate_fadeUp50', 'fadeInUp50');
	scrollTop('.animate_fadeUp30', 'fadeInUp30');
	scrollTop('.animate_fadeUp20', 'fadeInUp20');
	scrollTop('.animate_fadeUp10', 'fadeInUp10');

	scrollTop('.animate_fadeDown200', 'fadeInDown200');
	scrollTop('.animate_fadeDown150', 'fadeInDown150');
	scrollTop('.animate_fadeDown100', 'fadeInDown100');
	scrollTop('.animate_fadeDown80', 'fadeInDown80');
	scrollTop('.animate_fadeDown50', 'fadeInDown50');
	scrollTop('.animate_fadeDown30', 'fadeInDown30');
	scrollTop('.animate_fadeDown20', 'fadeInDown20');
	scrollTop('.animate_fadeDown10', 'fadeInDown10');

	scrollTop('.animate_fadeIn', 'fadeIn');

});

/* 添加动画 */
function scrollTop(el, classN, callback) {
	var $el = $(el);
	var callbackFlag = 0;
	var winW = $(window).width();
	var space = 40;
	if (winW <= 768) {
		space = 20;
	}
	$el.each(function (i, elE) {
		var elH = Math.ceil($(elE).offset().top) + space;
		var winH = $(window).height();
		var winScr = $(window).scrollTop();

		if (elH < winH + winScr) {
			$(elE).addClass(classN);
			if (callback && callbackFlag == 0) {
				callback();
				callbackFlag++;
			}
		}
		$(window).scroll(function () {
			elH = Math.ceil($(elE).offset().top) + space;
			winScr = $(window).scrollTop();
			if (elH < winH + winScr) {
				$(elE).addClass(classN);
				if (callback && callbackFlag == 0) {
					callback();
					callbackFlag++;
				}
			}
			/* elE.addEventListener("webkitAnimationEnd", function () {
				$(elE).removeClass(function (index, css) {
					return (css.match(/(^|\s)animate_\S+/g) || []).join('');
				});
			}) */
		})
	})
}



// 切换当前状态
function switcherActive(el, container) {
	container.each(function (i, v) {
		$(v).removeClass('active');
	})
	el.addClass('active');
}





/* 选项卡 */
// function tabControl(el, container, eventType) {
// 	el.each(function (i, v) {
// 		$(v).on(eventType, function () {
// 			el.each(function (i, v) {
// 				$(v).removeClass('active');
// 			})
// 			container.each(function (i, v) {
// 				$(v).removeClass('active');
// 			})
// 			el.eq(i).addClass('active');
// 			container.eq(i).addClass('active');
// 		})
// 	})
// }





/* 弹窗 */
// function popup(el, container) {
// 	el.each(function (i, v) {
// 		$(v).on('click', function (event) {
// 			var ev = window.event || event;
// 			if (ev && ev.stopPropagation) {
// 				ev.stopPropagation();
// 			} else {
// 				ev.cancelBubble = true;
// 			}
// 			container.fadeIn(300, function () {
// 				container.addClass('active');
// 			})
// 		})
// 	})
// 	container.find('.close').each(function (i, el) {
// 		$(el).on('click', function () {
// 			container.fadeIn(150);
// 			container.removeClass('active');
// 		})
// 	})
// 	container.on('click', function () {
// 		container.fadeIn(150);
// 		container.removeClass('active');
// 	})
// 	container.find('.center').on('click', function (event) {
// 		var ev = window.event || event;
// 		if (ev && ev.stopPropagation) {
// 			ev.stopPropagation();
// 		} else {
// 			ev.cancelBubble = true;
// 		}
// 	})
// }




//rem 手机
(function (designWidth, maxWidth) {
	var doc = document,
		win = window,
		docEl = doc.documentElement,
		remStyle = document.createElement("style"),
		tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 750;
		width > maxWidth && (width = maxWidth);
		width < 320 && (width = 320);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();

	win.addEventListener("resize", function () {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function (e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function (e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})(750, 750);




//头部下拉
function headDown(el) {
	var windowT = $(window).scrollTop();
	var windowW = $(window).width();
	if (el.hasClass('active')) {

		$(document).off('mousewheel');
		$('html,body').css('overflow', '');
		el.removeClass('active');
		$(".head_dropdown1").fadeOut();
		if (windowW > 768) {
			if (windowT == 0) {
				$('.header').removeClass('active');
			}
		}

	} else {
		$(document).on('mousewheel', function (event, delta) {
			return { passive: false };
		});
		$('.header').addClass('active');
		el.addClass('active');
		$('html,body').css('overflow', 'hidden');
		$(".head_dropdown1").fadeIn();

	}

}
