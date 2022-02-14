$(document).ready(function() {
    var tabs = $('ul.tabs');
    tabs.each(function(i) {
        var tab = $(this).find('> li > a');
        tab.click(function(e) {
            var contentLocation = $(this).attr('href');
            if(contentLocation.charAt(0)=="#") {
                e.preventDefault();
                tab.removeClass('active');
                $(this).addClass('active');
                $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
            }
        });
    });
});