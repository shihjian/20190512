$(document).ready(function() {

/*0000視差滾動0000000*/
  $('.parallax-window01').parallax({imageSrc:'images/bg-1.jpg'});
  $('.parallax-window02').parallax({imageSrc:'images/bg02.jpg'});
  $('.parallax-window03').parallax({imageSrc:'images/bg-1.jpg'});

/*漢堡選單*/
 $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('.indexmenu').toggleClass('menu-show');
  });



var lastId,
    topMenu = $(".indexmenu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

// scroll時的smoove動畫

$('.aboutcontent').smoove({moveY:'60%'});
$('.workscontent').smoove({moveY:'70%'});
$('.folio').smoove({moveY:'70%'});
$('.contactleft').smoove({moveY:'50%'});



});