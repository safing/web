window.onload = function () {
    SetUpIframeData()
};

function SetUpIframeData() {
    $('.preview-panel-left').each(function(){
        iframe = $(this).find( ".iframe" );
        data = $(this).find( ".data" );
        iframeContents = iframe.contents()
        innerHtml = iframeContents.find('html');
        innerBody = iframeContents.find('body');
        innerHead = iframeContents.find('head');
        innerHead.append('<link rel="stylesheet" href="../safingTailwind-1.10.css">');
        innerBody.append(data)
    });
    setTimeout(function(){ 
        SetUpIframeHeight()
    }, 500);
}

function SetUpIframeHeight() {
    $('.preview-panel-left').each(function(){
        iframe = $(this).find( ".iframe" );
        iframeContents = iframe.contents()
        innerHtml = iframeContents.find('html');
        iframe.height((innerHtml.height()) + 'px')
    });
}