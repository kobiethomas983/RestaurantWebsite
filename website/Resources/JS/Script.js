$(document).ready(function() {

    /*direction is used to find out whether the user is scrolling up or down on the website*/
    $('.js--section-features').waypoint(function(direction){
                                             
        if(direction == "down"){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky');
            
        }
            
    }, {
  offset: '60px;'
});
   
   
    /*scroll buttons */
    $('.js--scroll-to-plans').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);                         
                                   
                            
    });
    
     $('.js--scroll-to-start').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);                         
                                   
                            
    });
    
    /*navigation scroll */
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
    /*animation on scrolls*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    } , {
        offset: '60%'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    } , {
        offset: '60%'
    });
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    } , {
        offset: '60%'
    });
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    } , {
        offset: '60%'
    });
    
    
    /*mobile navigation*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--Main-nav');
        var icon = $('.js--nav-icon i'); /*we put the 'i' there because that is the element we want to make changes to */
        nav.slideToggle(200); /*this is for when you click on the button to open the nav "200" is placed in milliseconds which is really just 2 seconds */
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round'); /*this is for the x icon */
            icon.removeClass('ion-navicon-round');/*and move the navicon icon */
        }else {
              icon.addClass('ion-navicon-round');
              icon.removeClass('ion-close-round');
        }
    })
    
});