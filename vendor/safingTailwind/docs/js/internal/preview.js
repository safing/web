$(".preview-panel-left").resizable({
    handleSelector: ".preview-panel-splitter",
    resizeHeight: false,
});

var i = 0, timeOut = 0;

$(".preview-container").hover(function () {
    iframe = $(this).parent().find( ".iframe" );
    timeOut = setInterval(function(){
        iframe.height((iframe.contents().find('html').height()) + 'px')
    }, 10);
}, function () {
    clearInterval(timeOut);
});