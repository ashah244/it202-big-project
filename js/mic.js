$(document).ready(function() {

  function hideScreens() {
    $(".content").hide();
  }
  //
  // $(".nav-link").on("click", function(){
  //   hideScreens();
  //   var target = $(this).attr("href");
  //   $(target).show();
  // });

  window.mdc.autoInit();
  // mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  const drawer = document.querySelector('.mdc-drawer').MDCDrawer;
  // console.log(drawer);

  // open drawer on nav icon
  document.getElementsByClassName("mdc-top-app-bar__navigation-icon")[0].addEventListener("click", function(){
    drawer.open = true;
  });


  // close drawer on selection
  //       let navs = document.getElementsByClassName("mdc-list-item");

  //       for (let i = 0; i < navs.length; i++) {
  //         navs[i].addEventListener("click", function() {
  //           drawer.open = false;
  //         })
  //       };

    $("nav.mdc-list a.mdc-list-item").on("click", function(e) {
       hideScreens();
       let file = $(this).attr("href");
       $(file).show();
       drawer.open = false;
    });

    const player = document.getElementById('player');

    const handleSuccess = function(stream) {
      if (window.URL) {
        player.srcObject = stream;
      } else {
        player.src = stream;
      }
    };

    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(handleSuccess);


});
