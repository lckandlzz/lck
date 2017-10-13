
// Functions for animated-items

function resizeItems(){
  $('.item-animated-view').removeAttr("style");
  $('.item-animated-content').removeAttr("style");
  $('.item-animated').removeClass('open');
  $('.animated-items').removeClass('active first-active');
};
function sizeItems() {
  var attr = $('.item-animated-view').attr('style');
  if(typeof attr == typeof undefined || attr == false){
    var viewWidth = $(".item-animated").width();
    $(".item-animated-view").css({'width': viewWidth});
    $(".item-animated-content").css({'width': viewWidth});
  }
}

//Function for header fixed
 
function headerFixed(){
  element = $('.product-menu')
  eTop = element.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() >= eTop) {
      $('body').addClass('header-fixed');
    } else {
      $('body').removeClass('header-fixed');
    }
  });
}

// Anchors' scroll
function anchorScroll(){
  var items  = $('.js-anchor').find('.js-anchor-items a'),
      offset = $('.js-anchor').outerHeight(true);

  items.on('click', function(e){
    e.preventDefault();
    var target    = $($(this).attr('href')),
        targetTop = target.offset().top;

    if (target.length) {
      $('html,body').animate({scrollTop: targetTop-offset}, 1000);
    }

  });
}

//Function for equal heights

function equalizeHeights(){
  $('.equalize').each(function(){

    var items = $(this).find('.box');
    items.removeAttr("style");

    var maxHeight = Math.max.apply(Math, items.map(function(){
         return $(this).outerHeight(true);
    }).get());

    items.css('height', maxHeight);
  });
}

// SCRIPTS STARTS

$(function () {

///////////// CUSTOM FORMS


  var inputs = $("input[type=checkbox],input[type=radio], select").custom_form({
    responsive_select: true
  });

///////// RADIO ITEM PAY FOR IE8

  if( $('.payment-group').lenght ){
    $('.payment-group .radio-item input').on('change', function(e){

      if( $(this).is(':checked') ){

        var group  = $(this).parents('.payment-group'),
            parent = $(this).parents('.radio-item');

        group.find('.radio-item').removeClass('is-active');
        parent.addClass('is-active');
      }
    });
  }

// TOGGLE VIEW

  $('.js-toggle').on('click',function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next('.js-content').toggleClass("show");
    return false;
  });

// TOGGLE VIEW CLOSE

  $('.js-toggle-close').on('click',function() {
    if ($(this).hasClass("lang-link")) {
      if ($(this).hasClass("active")) {
        $(".languages-panel").hide();
      }else{
        $(".languages-panel").show();
      }
    }
    var element = $(this);
    $('.js-toggle-close').not(element).removeClass('active');
    $('.js-toggle-close').not(element).next('.js-content').removeClass("show");
    $(this).toggleClass("active");
    $(this).next('.js-content').toggleClass("show");
    return false;
  });

// SUBMENU

  $('.js-toggle-submenu').on('click',function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().siblings('.sub-menu').toggleClass("show");
    return false;
  });

// JS COLLAPSE
  $('.js-collapse .js-collapse-open').on('click', function(e){
    e.preventDefault();
    var parent  = $(this).parents('.js-collapse');
    parent.toggleClass('is-active');
  });

// ANIMATED ITEMS

  $('.js-animated-item').on('click', function(e){
    sizeItems();
    e.preventDefault();
    $(this).parents(".item-animated").toggleClass('open')
           .siblings().removeClass('open');

    if( $('.item-animated:first-child').hasClass('open') ){
      $('.animated-items').addClass('first-active').removeClass('active');

    } else if( $('.animated-items .open').length > 0 ){
      $('.animated-items').addClass('active').removeClass('first-active');
    } else {
      $('.animated-items').removeClass('active first-active');
    }

  });

// MENU TABS


if( $('.js-tabs').length > 0 ){
    $('.js-tabs-nav a').on('click', function(e){
      e.preventDefault();

      var parent  = $(this).parents('.js-tabs'),
          navElement = $(this).parents('li'),
          tab     = parent.find('.js-tab-content .js-tab'),
          index   = navElement.index();

      navElement.addClass("is-active").siblings('li').removeClass("is-active");
      tab.eq(index).addClass("is-active").siblings().removeClass("is-active");

    });
}

// PRICE PLAN SPECS

if( $('.js-price-plan').length > 0 ){

    $('.js-price-plan .radio').on('click', function(e){

      var parent  = $(this).parents('.field'),
          navElement = $(this).parents('.gi'),
          tab     = parent.find('.prices-plan-specs-detail'),
          index   = navElement.index();

      tab.eq(index).addClass("is-active").siblings().removeClass("is-active");

    });
}


// RESPONSIVEIMAGES
  picturefill();

// FULL CAROUSEL
  $('.full-carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
    touchThreshold: 200,
    speed: 800,
    prevArrow: "<span class='icon icon-prev'>prev</span>",
    nextArrow: "<span class='icon icon-next'>next</span>"
  });

// FULL CAROUSEL

  if( $('.hero-tabs').length > 0 ){
    var heroTabs = $('.hero-tabs-image')
    heroTabs.slick({
      autoplay: true,
      autoplaySpeed: 8000,
      adaptiveHeight: true,
      speed: 800,
      prevArrow: "<span class='icon icon-prev'>prev</span>",
      nextArrow: "<span class='icon icon-next'>next</span>",
      asNavFor: ".hero-tabs-panel",
      onAfterChange: function() {
        var index = heroTabs.slickCurrentSlide();
        $('.hero-tabs .hero-tab').eq(index).addClass('active').siblings().removeClass('active');
        //console.log(index);
      }
    });

    var heroTabsPanel = $('.hero-tabs-panel')
    heroTabsPanel.slick({
      // autoplay: true,
      // autoplaySpeed: 8000,
      // adaptiveHeight: true,
      arrows: false,
      fade: true,
      onBeforeChange: function(event, slick, currentSlide, nextSlide) {
        heroTabs.slickGoTo(currentSlide);
      }
    });

    $('.hero-tabs .hero-tab').on('click', function(e){
      e.preventDefault();
      var index = $(this).index();
      heroTabs.slickGoTo(index);
      heroTabsPanel.slickGoTo(index);
    });

  }

// MENU FIXED PRODUCT DISPLAY

  if( $('.product-menu').length > 0 ){
    headerFixed();
  }

  if( $('.js-anchor').length ){
    anchorScroll();
  }

// // EQUALIZE HEIGHT
  if( $('.equalize').length > 0 ){
    $('.equalize img').each(function(index, el) {
      var img = new Image();
      img.src = $(el).attr('src');
      img.onload = function() {
        equalizeHeights();
      }
    });
  }

/////// NAVIGATION FILTERS
  if( $('.navigation-filters').length ){

    $('.navigation-filters .filter-name').on('click', function(){
      $(this).parent('.navigation-filters').toggleClass('is-open');
    });

    $('.navigation-filters li a').on('click', function(e){
      e.preventDefault();
      var parent  = $(this).parents('.navigation-filters'),
          item    = $(this).parent('li'),
          current = $(this).text();

      item.addClass('is-active').siblings('li').removeClass('is-active');
      parent.find('.filter-name .current').text(current);
      parent.removeClass('is-open');

    });
  }

});  // end function

$(window).resize(function() {
  resizeItems();

  if( $('.equalize').length > 0 ){
    equalizeHeights();
  }

  // INIT NAVICATION BY SCROLL
  initNaviScroll();
});

//SPECS PULL DOWN

$(document).ready(function() {
  var hidden = false;
  $('.specs .button, .faq button.button').click(function() {
    hidden = !hidden;
    $('.specs .is-hidden, .faq .is-hidden').slideToggle('normal', function() {
      $('.specs .button, .faq .button').toggleClass('top-icon', hidden);
    });
  });
});

// PRODUCT CART PULL DOWN

$(document).ready(function() {
  var hidden = false;
  $('.product-cart .dropdown').click(function() {
    hidden = !hidden;
    $('.product-cart .is-hidden').slideToggle('normal', function() {
      $('.product-cart .dropdown').toggleClass('top', hidden);
    });
  });

  // INIT NAVICATION BY SCROLL
  initNaviScroll();

	// if(platform()){
	// 	$('#old-version-link').html('<a href="http://www.oppo.com/">回到旧版</a>');
	// }else{
	// 	$('#old-version-link').html('<a href="http://m.oppo.com/">回到旧版</a>');
	// }

  // BIND SCROLL TOP EVENT
  $('body').on('click', '.scroll-top-btn', function(event) {
    event.preventDefault();
    $('html,body').animate({
      'scrollTop': 0
    }, 500);
  });
});

// INIT NAVICATION BY SCROLL
function initNaviScroll() {
  var ww = $(window).width();
  $(window).scroll(function() {
    // if (ww > 1200 && $(window).scrollTop() >= 300) {
    if ( $(window).scrollTop() >= 200 ) {
      $('.navi-scroll').show();
    } else {
      $('.navi-scroll').hide();
    }
  });
}

function platform() {
	var isMobile = navigator.userAgent.search(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/);
	if (!~isMobile) {
		return true;
	} else {
		return false;
	}
}


// NEW NAV

$(function(){
    // MOBILE MAIN MENU
  var NavMenuStatus = {
    openNavMenu: function(){
      $('.js-open-menu').addClass("isopen");
      //$('.js-close-menu').show().addClass("animate");
      $('.main-menu').show();
    },
    closeNavMenu: function(){
      //$('.js-close-menu').hide().removeClass("animate");
      $('.js-open-menu').removeClass("isopen");
      $('.main-menu').hide();
      $('.lang-link').removeClass('active');
      $('.languages').removeClass('show');
      $(".languages-panel").hide();
    },
    openNavUserMenu: function(){
      $('.js-open-user').addClass('isopen');
      $('.user-menu').addClass('isopen');
    },
    closeNavUserMenu: function(){
      $('.js-open-user').removeClass('isopen');
      $('.user-menu').removeClass('isopen');
    },
    openNavSubMenu: function(){
      $('.nav-sub-menu').addClass("isopen");
    },
    closeNavSubMenu: function(){
      $('.nav-sub-menu').removeClass("isopen");
    }
  };

  // NAV SUB MENU

  var navSubMenu = $("ul.menu li.is-active").find("ul.sub-menu");
  if (navSubMenu.length>0) {
    navSubMenu.clone().appendTo(".nav-sub-menu .relative");
    if($(window).width()<900) NavMenuStatus.openNavSubMenu();
    //$(".nav-sub-menu").addClass("need-open");
    if (!$(".hero").length>0) $(".main-header").addClass("main-header-bottom");
  };

  if ($(".hero").length>0) {
    $(".main-header").addClass("absolute");
  };

  $('.js-open-menu').on('click',function(e) {
    e.preventDefault();
    if (!$(this).hasClass("isopen")) {
      if ($('.js-open-user').hasClass('isopen')) NavMenuStatus.closeNavUserMenu();
      if ($('.nav-sub-menu').hasClass('isopen')) NavMenuStatus.closeNavSubMenu();
      NavMenuStatus.openNavMenu();
    }else{
      NavMenuStatus.closeNavMenu();
      if ($('.nav-sub-menu .relative').html() != '') NavMenuStatus.openNavSubMenu();
    }
    return false;
  });

  $('.js-open-user').on('click',function(e){
    e.preventDefault();
    if ($('.js-open-menu').hasClass('isopen')) {
      NavMenuStatus.closeNavMenu();
      if ($('.nav-sub-menu .relative').html() != '') NavMenuStatus.openNavSubMenu();
    }
    if ($(this).hasClass('isopen')) NavMenuStatus.closeNavUserMenu();
    else NavMenuStatus.openNavUserMenu();
    return false;
  });

  $('.gi-search a').on('click',function(){
    $('.nav-search').show();
    $('.nav-search-mask').show();
    return false;
  });

  $('.nav-search-close').on('click',function(){
    $('.nav-search').hide();
    $('.nav-search-mask').hide();
    return false;
  });

  $(window).scroll(function(){
    if($(window).scrollTop()>100) {
      NavMenuStatus.closeNavUserMenu();
    }
    if ($(window).scrollTop()>50) {
      $('.lang-link').removeClass('active');
      $('.languages').removeClass('show');
      $(".languages-panel").hide();
    };
  });

  $(window).resize(function(){
    if ($(window).width()>990) {
      $(".main-menu").show();
    }else{
      if ($('.js-open-menu').hasClass('isopen')) {
        NavMenuStatus.openNavMenu();
      }else{
        NavMenuStatus.closeNavMenu();
        NavMenuStatus.openNavSubMenu();
      }
    }
  });
});