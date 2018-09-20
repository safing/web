// sidebar logic
$(document).ready(function() {
  $(".ui.sidebar").sidebar({
    dimPage          : true,
    transition       : 'overlay',
    mobileTransition : 'uncover'
  })
  $('body').on('touchend', '.sidebar-toggle', function(){
    $(".ui.sidebar").sidebar("toggle");
  })
  $('body').on('click', '.sidebar-toggle', function(){
    $(".ui.sidebar").sidebar("toggle");
  })
})
