// sidebar logic
$(document).ready(function() {
  $(".ui.sidebar").sidebar({
    dimPage          : true,
    transition       : 'overlay',
    mobileTransition : 'uncover'
  })
  $('body').on('click', '.sidebar-toggle', function(){
    $(".ui.sidebar").sidebar("toggle");
  })
})

// email obfuscation
function debfus(s) {
  var n = 0
  var r = ""
  for( var i = 0; i < s.length; i++)
  {
    n = s.charCodeAt( i )
    if( n >= 8364 )
    {
      n = 128
    }
    r += String.fromCharCode( n - 1 )
  }
  return r
}
document.addEventListener('DOMContentLoaded', function () {
  var elements = document.getElementsByClassName("contact-email")
  var email = debfus('{{ site.emailobfuscated }}')
  for (var i=0, len=elements.length; i<len; i++) {
    elements[i].innerHTML = email
  }
})
