//variables for the button search
nameOfLibrary = "";
counter = 0;

//clears the input from the search fields
function clearInput(){
  document.getElementById("txtName").value = "";
}


//gets database json file

$(document).ready(function() {

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
  function hideScreens() {
    $(".content").hide();
  }

  $("nav.mdc-list a.mdc-list-item").on("click", function(e) {
     hideScreens();
     let file = $(this).attr("href");
     $(file).show();
     drawer.open = false;



  });



  // $(".nav-link").on("click", function(){
  //   hideScreens();
  //   var target = $(this).attr("href");
  //   $(target).show();
  // });

//searchs through json file
  $("#btnSearch").on("click", function(){
    window.nameOfLibrary = $("#txtName").val();
    printOutQuery(nameOfLibrary);
  });

});
