// sidebar logic
$(document).ready(function() {
  $(".ui.sidebar").sidebar({
    dimPage          : true,
    transition       : 'overlay',
    mobileTransition : 'uncover'
  })
  $('body').on('touchend', '.sidebar-toggle', function(event){
    event.preventDefault()
    $(".ui.sidebar").sidebar("toggle");
  })
  $('body').on('click', '.sidebar-toggle', function(event){
    event.preventDefault()
    $(".ui.sidebar").sidebar("toggle");
  })

  $('.popup-trigger').popup();
})

function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1];
  }
  return params;
}
