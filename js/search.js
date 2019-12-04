//variables for the button search
nameOfLibrary = "";
counter = 0;

//clears the input from the search fields
function clearInput(){
  document.getElementById("txtName").value = "";
}


//gets database json file

$(document).ready(function() {

  function hideScreens() {
    $(".content").hide();
  }

  $(".nav-link").on("click", function(){
    hideScreens();
    var target = $(this).attr("href");
    $(target).show();
  });

//searchs through json file
  $("#btnSearch").on("click", function(){
    window.nameOfLibrary = $("#txtName").val();
    printOutQuery(nameOfLibrary);
  });

});
