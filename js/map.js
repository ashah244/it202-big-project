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

  //variable for holding the query
  endpoint = "https://data.cityofchicago.org/resource/8pix-ypme.json";
  var query = endpoint + "?";

  // The location of Chicago
  var chicago = {lat: 41.8781, lng: -87.6298};
  // The map, centered at Chicago
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: chicago});


  //stores the each element from the query and marks it on the map based on longitude and latitude
  $.get(query, function(response){
    $.each(response, function(i,v){
      var info = "<br>" + "Which Stop: " + v.stop_name + "<br>" + "Which Direction: " +  v.direction_id + "<br>" + "Station Name: " + v.station_name;

      var getLatitude = parseFloat(v.location.latitude)
      var getLongitude = parseFloat(v.location.longitude)
      //create an info window
      var infoWindow = new google.maps.InfoWindow({
        content: info
      });

      //create new marker
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(getLatitude, getLongitude),
        map: map
      });

      marker.addListener('click',function(){
        infoWindow.open(map, marker);
      });

    });
  });
});
