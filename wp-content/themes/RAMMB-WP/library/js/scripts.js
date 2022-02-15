function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
var viewport = updateViewportDimensions();
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
var timeToWaitForLast = 100;
//Nav Nesting/Mobile Nav
  jQuery(document).ready(function($) {
    $('nav ul li a:not(:only-child)').click(function(e){
    $(this).parent().siblings().find('ul').slideUp(300);
    $(this).next('ul').stop(true, false, true).slideToggle(300);
      return false;
    });
    $('.nav-mobile').click(function(){
        $('.nav-1 .nav-list').slideToggle('slow');
        $(".line").toggleClass("active");
    });
    }); /* end Doc Ready scripts */

// Accordion Coding
jQuery(document).ready(function($) {
    var expandLink = $('.accordion-expand-all');
    var collapsLink = $('.accordion-collaps-all');
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
        } 
      else {
          panel.style.display = "block";
        }
    } 
    }
    expandLink.click(function(){
    $(".ui-accordion-content").show();
    }); 
    collapsLink.click(function(){
    $(".ui-accordion-content").hide();});
    var acc = document.getElementsByClassName("navItem");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    this.classList.toggle("active");
    var nest = this.nextElementSibling;
    if (nest.style.display === "block") {
        nest.style.display = "none";
    } else {
        nest.style.display = "block";
    }}}




     $('.your-list .boxicon').on('click', function() {
    $(this).closest('li').find('.spotlight').addClass('show-spotlight');
});

$('.your-list .spotlight button').on('click', function() {
    $(this).closest('.spotlight').removeClass('show-spotlight');
});


    });


$('p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
});



jQuery(document).ready(function($) {
  $('.table-box table').addClass('filter-table order-table');
  $('.table-box table').tablesorter(); 
  $('#keywords').tablesorter(); 
});
jQuery(document).ready(function($) {
  $('.table-box table').addClass('filter-table order-table');
  $('.table-box table').tablesorter(); 
  $('#keywords2').tablesorter(); 
});

// Revers Accordion Coding
jQuery(document).ready(function($) {
    var expandLink = $('.raccordion-expand-all');
    var collapsLink = $('.raccordion-collaps-all');
    var acc = document.getElementsByClassName("raccordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    this.classList.toggle("hide");
    var panel = this.nextElementSibling;
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } 
    else {
        panel.style.display = "none";
    }
    } 
    }
    expandLink.click(function(){
    $(".ui-raccordion-content").show();
    }); 
    collapsLink.click(function(){
    $(".ui-raccordion-content").hide();});
    var acc = document.getElementsByClassName("navItem");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    this.classList.toggle("hide");
    var nest = this.nextElementSibling;
    if (nest.style.display === "none") {
        nest.style.display = "block";
    } else {
        nest.style.display = "none";
    }}}
    
  


//Pop Up for Page Builder
$(".open_popup").click(function () {
  $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
  });
  $(".popup_close").click(function () {
  $(".popup_body").removeClass("popup_body_show");
  });
  $(".popup_back").click(function () {
  $(".popup_body").removeClass("popup_body_show");
  });
 });
//JS table filter
(function(document) {
  'use strict';
  var LightTableFilter = (function(Arr) {
  var _input;
  function _onInputEvent(e) {
  _input = e.target;
  var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
  Arr.forEach.call(tables, function(table) {
  Arr.forEach.call(table.tBodies, function(tbody) {
  Arr.forEach.call(tbody.rows, _filter);
  });
  });}
  function _filter(row) {
  var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
  row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
  } return {
  init: function() {
  var inputs = document.getElementsByClassName('light-table-filter');
  Arr.forEach.call(inputs, function(input) {
  input.oninput = _onInputEvent;
  });
  }
  };
  })(Array.prototype);
  document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
  LightTableFilter.init();
  }});
  })(document);

//Filter Table
jQuery(document).ready(function($) {
  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' items');
  $("#search-text").keyup(function () {
  var searchTerm = $("#search-text").val();
  var listItem = $('#list').children('li');
  var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array){
  return (elem.textContent || elem.innerText || '').toLowerCase()
  .indexOf((match[3] || "").toLowerCase()) >= 0;
  }}); 
  $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
  $(this).addClass('hiding out').removeClass('in');
  setTimeout(function() {
  $('.out').addClass('hidden');
  }, 300); });
  $("#list li:containsi('" + searchSplit + "')").each(function(e) {
  $(this).removeClass('hidden out').addClass('in');
  setTimeout(function() {
  $('.in').removeClass('hiding');
  }, 1); });
  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' items');
  if(jobCount == '0') {
  $('#list').addClass('empty');
  }
  else {
  $('#list').removeClass('empty');
  }});}); 

// MODALS 
var Modal = (function() {
  var trigger = $qsa('.modal__trigger');
  var modals = $qsa('.modal');
  var modalsbg = $qsa('.modal__bg');
  var content = $qsa('.modal__content');
  var closers = $qsa('.modal__close'); 
  var w = window;
  var isOpen = false;
  var contentDelay = 400; 
  var len = trigger.length;
  function $qsa(el) {
    return document.querySelectorAll(el);
  }
  var getId = function(event) {
    event.preventDefault();
    var self = this;
    var modalId = self.dataset.modal;
    var len = modalId.length;
    var modalIdTrimmed = modalId.substring(1, len);
    var modal = document.getElementById(modalIdTrimmed);
    makeDiv(self, modal);
  };
  var makeDiv = function(self, modal) {
  var fakediv = document.getElementById('modal__temp');
    if (fakediv === null) {
    var div = document.createElement('div');
    div.id = 'modal__temp';
    self.appendChild(div);
    moveTrig(self, modal, div);
    }
  };
  var moveTrig = function(trig, modal, div) {
    var trigProps = trig.getBoundingClientRect();
    var m = modal;
    var mProps = m.querySelector('.modal__content').getBoundingClientRect();
    var transX, transY, scaleX, scaleY;
    var xc = w.innerWidth / 2;
    var yc = w.innerHeight / 2;
    trig.classList.add('modal__trigger--active');
    scaleX = mProps.width / trigProps.width;
    scaleY = mProps.height / trigProps.height;
    scaleX = scaleX.toFixed(3); 
    scaleY = scaleY.toFixed(3);
    transX = Math.round(xc - trigProps.left - trigProps.width / 2);
    transY = Math.round(yc - trigProps.top - trigProps.height / 2);
    if (m.classList.contains('modal--align-top')) {
      transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
    }
    window.setTimeout(function() {
      window.requestAnimationFrame(function() {
        open(m, div);
      });
    }, contentDelay);

  };
  var open = function(m, div) {
    if (!isOpen) {
      var content = m.querySelector('.modal__content');
      m.classList.add('modal--active');
      content.classList.add('modal__content--active');
      content.addEventListener('transitionend', hideDiv, false);
      isOpen = true;
    }
    function hideDiv() {
      div.style.opacity = '0';
      content.removeEventListener('transitionend', hideDiv, false);
    }
  };
  var close = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var target = event.target;
    var div = document.getElementById('modal__temp');
    if (isOpen && target.classList.contains('modal__bg') || target.classList.contains('modal__close')) {
      div.style.opacity = '1';
      div.removeAttribute('style');
      for (var i = 0; i < len; i++) {
        modals[i].classList.remove('modal--active');
        content[i].classList.remove('modal__content--active');
        trigger[i].style.transform = 'none';
        trigger[i].style.webkitTransform = 'none';
        trigger[i].classList.remove('modal__trigger--active');
      }
      div.addEventListener('transitionend', removeDiv, false);
      isOpen = false;
    }
    function removeDiv() {
      setTimeout(function() {
        window.requestAnimationFrame(function() {
          div.remove();
        });
      }, contentDelay - 50);
    }
  };

  var bindActions = function() {
    for (var i = 0; i < len; i++) {
      trigger[i].addEventListener('click', getId, false);
      closers[i].addEventListener('click', close, false);
      modalsbg[i].addEventListener('click', close, false);
    }
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

  }());
  Modal.init();
jQuery(document).ready(function($) {
// MODAL number 2
$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});
  $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  $(".close-modal, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
  $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });

// Tabbed Content    
  
  var $wrapper = $('.tab-wrapper'),
      $allTabs = $wrapper.find('.tab-content > div'),
      $tabMenu = $wrapper.find('.tab-menu li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  $allTabs.not(':first-of-type').hide();  
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });

});//end ready




 jQuery(document).ready(function($){
// $( ".img-wrapper" ).hover(
//   function() {
//     $(this).find(".img-overlay").animate({opacity: 1}, 600);
//   }, function() {
//     $(this).find(".img-overlay").animate({opacity: 0}, 600);
//   }
//   );
//   var $overlay = $('<div id="overlay"></div>');
//   var $image = $("<img>");
//   var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
//   var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
//   var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
//   $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
//   $("#gallery").append($overlay);
//   $overlay.hide();
//   $(".img-overlay").click(function(event) {
//   event.preventDefault();
//   var imageLocation = $(this).prev().attr("href");
//   $image.attr("src", imageLocation);
//   $overlay.fadeIn("slow");
//   });
//   $overlay.click(function() {
//   $(this).fadeOut("slow");
//   });
//   $nextButton.click(function(event) {
//   $("#overlay img").hide();
//   var $currentImgSrc = $("#overlay img").attr("src");
//   var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
//   var $nextImg = $($currentImg.closest(".image").next().find("img"));
//   var $images = $("#image-gallery img");
//   if ($nextImg.length > 0) { 
//     $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
//   } else {
//     $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
//   }
//   event.stopPropagation();
//   });
//   $prevButton.click(function(event) {
//   $("#overlay img").hide();
//   var $currentImgSrc = $("#overlay img").attr("src");
//   var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
//   var $nextImg = $($currentImg.closest(".image").prev().find("img"));
//   $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
//   event.stopPropagation();
//   });
//   $exitButton.click(function() {
//   $("#overlay").fadeOut("slow");
//   });


// Hide Show Sidebar Navigation   
    $('.navHide').click(function() {
    $("#sidebarNav").toggleClass("sidebarNav closed");
    $("#sidebarContent").toggleClass("sidebarContent full d-9of12");
    });
  

  // Hide Show Hmoe Search Tool  
    $('.searchClose').click(function() {
    $(".homeSearchBox").toggleClass("closed");
        $(".homeSearchBox").removeClass("open");
    $(".searchBoxOpen").toggleClass("close");
        $(".searchBoxOpen").removeClass("open");
    });
    $('.searchBoxOpen').click(function() {
    $(".homeSearchBox").toggleClass("open");
        $(".homeSearchBox").removeClass("closed");
    $(".searchBoxOpen").toggleClass("open");
        $(".searchBoxOpen").removeClass("close");
    });

  

  

});



$(function(){
  $('#sidemenu a').on('click', function(e){
    e.preventDefault();

    if($(this).hasClass('open')) {
      // do nothing because the link is already open
    } else {
      var oldcontent = $('#sidemenu a.open').attr('href');
      var newcontent = $(this).attr('href');
      
      $(oldcontent).fadeOut('fast', function(){
        $(newcontent).fadeIn().removeClass('hidden');
        $(oldcontent).addClass('hidden');
      });
      
     
      $('#sidemenu a').removeClass('open');
      $(this).addClass('open');
    }
  });



// var content = document.getElementById("expand-content");
// var button = document.getElementById("show-more");

// button.onclick = function(){
//   if(content.className == "open" ){
//     content.className = "";
//     button.innerHtml = "Show Less";
//   }
//   else{
//     content.className = "open";
//     button.innerHtml = "Show Less";
//   }
// }



});


// Same Height
  function sameHeights(selector) {
      var selector = selector || '[data-key="sameHeights"]',
          query = document.querySelectorAll(selector),
          elements = query.length,
          max = 0;
      if (elements) {
          while (elements--) {
              var element = query[elements];
              if (element.clientHeight > max) {
                  max = element.clientHeight;
              }
          }
          elements = query.length;
          while (elements--) {
              var element = query[elements];
              element.style.height = max + 'px';
          }
      }
  }
  if ('addEventListener' in window) {
      window.addEventListener('resize', function(){
          sameHeights();
      });
      window.addEventListener('load', function(){
          sameHeights();
      });
  }



// Dashboard Live Search 
  jQuery(document).ready(function($){
    $("#filter").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".wikiNav ul li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Filter = "+count);
    });

  // DASH Live Search 

  $('.live-search-visit li').each(function(){
  $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  $('.live-search-box-visit').on('keyup', function(){
  var searchTerm = $(this).val().toLowerCase();
      $('.live-search-visit li').each(function(){
          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });

  $('.live-search-shy li').each(function(){
  $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  $('.live-search-box-shy').on('keyup', function(){
  var searchTerm = $(this).val().toLowerCase();
      $('.live-search-shy li').each(function(){
          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });

  $('.live-search-arch li').each(function(){
  $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  $('.live-search-box-arch').on('keyup', function(){
  var searchTerm = $(this).val().toLowerCase();
      $('.live-search-arch li').each(function(){
          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });


  });  


jQuery(document).ready(function($){
  //open popup
  $('.cd-popup-trigger0').on('click', function(event){
    event.preventDefault();
    $('.cd-popup0').addClass('is-visible');
  });
  
  //close popup
  $('.cd-popup0').on('click', function(event){
    if( $(event.target).is('.cd-popup-close0') || $(event.target).is('.cd-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.cd-popup0').removeClass('is-visible');
      }
    });

  //open popup
  $('.cd-popup-trigger1').on('click', function(event){
    event.preventDefault();
    $('.cd-popup1').addClass('is-visible');
  });
  
  //close popup
  $('.cd-popup1').on('click', function(event){
    if( $(event.target).is('.cd-popup-close1') || $(event.target).is('.cd-popup1') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  //close popup when clicking the esc keyboard button
 jQuery(document).ready(function($){
      if(event.which=='27'){
        $('.cd-popup1').removeClass('is-visible');
      }
    });
});



  jQuery(document).ready(function($){
  $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
  })




var btn = $('#totopbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




  });




if($('.contentExpander').height() > 100){ 
$('.contentExpander').css('height', '200px');
var node = document.querySelector(".contentExpander"),
ele = document.createElement("button");
ele.className = "contentExpanderBorder";
ele.innerHTML = "see more...";
ele.onclick = function(){
  $('.contentExpander').css('height', '100vh');
  $('.contentExpander').css('overflow-y', 'scroll');
  $('.contentExpanderBorder').css('display', 'none');
};  
node.parentNode.insertBefore(ele, node.nextSibling);  
}

