// Get the container element
var btnContainer = document.getElementById("nav");

// Get all buttons with class="page-scroll" inside the container
var btns = btnContainer.getElementsByClassName("page-scroll");

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var currentA = document.getElementsByClassName("current");
//     currentA[0].className = currentA[0].className.replace(" current", " ");
//     this.className += " current";
//   });
// }
// Loop through the buttons and add current class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var currentA = document.getElementsByClassName("current");

    // If there's no current class
    if (currentA.length > 0) { 
      currentA[0].className = currentA[0].className.replace(" current", "");
    }

    // Add the current class to the current/clicked button
    this.className += " current";
  });
}

$(document).ready(function () {
$(function(){
  var currentA = location.pathname;
  $('#nav ul li a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(currentA) !== -1){
          $this.addClass('current');
      }
  })
})
});

$(document).ready(function () {

(function() {
  var currentA = window.location.pathname;
  $('#nav ul li a').each(function() {
      var $this = $(this); 

      // we check comparison between current page and attribute redirection.
      if ($this.attr('href') === currentA) {
          $this.addClass('current');
      }
  });
})();


// $(function() {
//   var CurrentUrl= document.URL;
//   var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();

//   $( ".top-menu li a" ).each(function() {
//         var ThisUrl = $(this).attr('href');
//           var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
//           if(ThisUrlEnd == CurrentUrlEnd)
//           $(this).addClass('current')
//       });
  });