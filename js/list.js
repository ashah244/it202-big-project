//connects the queries based on the input fields after the button is clicked and then prints
//out the data
function printOutQuery(nameOfDay, nameOfParks, nameofTitles){
  //variable for holding the query
  var query = endpoint + "?";
  var switchScreens = "#screen3List";

  //counter to check if user wanted more than one filter
  var counter = 0;

  //readies the jquery
  $(document).ready(function() {

    //checks if the day entered was not empty than add to the query
    if(nameOfDay !== ""){
      query = query + "day=" + nameOfDay;
      counter = counter + 1;
    }

    //checks if the parks entered was not empty and adds to the query
    if(nameOfParks !== ""){
      if(counter > 0){
        query = query + "&";
      }

      query = query + "park=" + nameOfParks;
      counter = counter + 1;
    }

    //checks if the movietile entered was not empty and adds to the query
    if(nameofTitles !== ""){
      if(counter > 0){
        query = query + "&";
      }
      query = query + "title=" + nameofTitles;
      counter = counter + 1;
    }

    //prints out the query and appends to the list html, by default if user enters no filters
    //it prints out the entire datbase
    $.get(query, function(response){
      $(switchScreens).html("");
      $.each(response, function(i,v){
        $(".content").hide();
        $(switchScreens).append("<br>" + "Which day: " + v.day + "<br>" + v.park + " " + v.park_phone + "<br>" + v.park_address + "<br>" + v.title + " " + v.date
      + " " + v.rating + "<br>" + "Closed Captions: " + v.cc + "<br>");
        $(switchScreens).show();
      });
    });

  });
}
