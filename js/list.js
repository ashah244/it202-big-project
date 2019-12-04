//connects the queries based on the input fields after the button is clicked and then prints
//out the data
function printOutQuery(nameOfLibrary){
  //variable for holding the query
  var query = endpoint + "?";
  var switchScreens = "#screen3List";

  //counter to check if user wanted more than one filter
  var counter = 0;

  //readies the jquery
  $(document).ready(function() {

    //checks if the day entered was not empty than add to the query
    if(nameOfLibrary !== ""){
      query = query + "name_=" + nameOfLibrary;
      counter = counter + 1;
    }

    //prints out the query and appends to the list html, by default if user enters no filters
    //it prints out the entire datbase
    $.get(query, function(response){
      $(switchScreens).html("");
      $.each(response, function(i,v){
        $(".content").hide();
        $(switchScreens).append("<br>" + "Name: " + v.name_ + "<br>" + "Hourse of Operation: " +  v.hours_of_operation + "<br>" + "Address: "+ v.address + "<br>" + "Phone Number: " + v.phone + "<br>");
        $(switchScreens).show();
        clearInput();
      });
    });

  });
}
