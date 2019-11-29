// <============== JQuery ==============> //
$(document).ready(function() {

    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 200) {
            $('#home-nav-scroll').removeClass('bg-transparent');
            $('#home-nav-scroll').addClass('scrolled-nav');
        } else {
            $('#home-nav-scroll').removeClass('scrolled-nav');
        }
    });

});
// <============== END OF JQuery ==============> //