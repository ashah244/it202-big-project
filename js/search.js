//variables for the button search
nameOfLibrary = "";
counter = 0;

//clears the input from the search fields
function clearInput(){
  document.getElementById("txtName").value = "";
}


//gets database json file
endpoint = "https://data.cityofchicago.org/resource/x8fc-8rcq.json";

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
    //variable for holding the query
    var query = endpoint + "?";

    //checks if the day entered was not empty than add to the query
    if(nameOfLibrary !== ""){
      query = query + "name_=" + nameOfLibrary;
      counter = counter + 1;
    }

    if(counter === 1){
      counter = counter - 1;
      $.get(query, function(response){
        $.each(response, function(i,v){
          $("#screen2Search").append("<br>" + "Name: " + v.name_ + "<br>" + "Hourse of Operation: " +  v.hours_of_operation + "<br>" + "Address: "+ v.address + "<br>" + "Phone Number: " + v.phone + "<br>");
          //$("#screen2Search").show();
        });
      });
      clearInput();
    }
  });

});
