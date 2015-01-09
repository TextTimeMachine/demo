  $(document).ready(function() {
    (function() {
        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
    $('#main-nav').sidr();
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'easing': 'easeInOutCirc',
        'css3': false,
        'scrollingSpeed': 900,
        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'easingcss3': 'ease',
        'navigation': true,
        'anchors': ['Home', 'Features', 'Download', 'Contact'],
        'navigationPosition': 'left'
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());

    // CONTACT FORM

 
 
$('#submit').click(function(){
 
$.post("contact.php", $("#contact-form").serialize(),  function(response) {
$('#success').fadeIn().html(response);
$('#success').delay(2000).fadeOut();
});
return false;
 
});
 



  });
  jQuery(window).load(function() {
    jQuery('#preloader').fadeOut();
  });
