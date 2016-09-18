function startTime() {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var now = new Date();
  var hour = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();
  var ampm = hour >= 12 ? 'PM' : 'AM';
  var date = now.getDate();
  var day  = dayNames[now.getDay()];
  var month = monthNames[now.getMonth()];
  var year = now.getFullYear();
  hour = hour % 12;
  hour = hour ? hour : 12;
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;
  var timeString = hour + ':' + mins + ' ' + ampm;
  var dateString = day + ' ' + month + ' ' + date + ', ' + year;
  document.getElementById('time').innerHTML = timeString;
  document.getElementById('date').innerHTML = dateString;
  var t = setTimeout(startTime, 500);
}


function loadStuff() {
  Mousetrap.bind('g', function() {
    window.open("http://www.google.ca","_self")
  });
  Mousetrap.bind('/', function() {
    window.open("http://www.github.com","_self")
  });
  Mousetrap.bind('y', function() {
    window.open("http://www.youtube.com","_self")
  });
  Mousetrap.bind('f', function() {
    window.open("http://www.facebook.com","_self")
  });
  Mousetrap.bind('h', function() {
    window.open("http://www.hotmail.com","_self")
  });
}



$( document ).ready(function() {
  $.ajax({
    url: 'https://api.uwaterloo.ca/v2/weather/current.json?key=2aaaac9cccd4c11b35804ecac922e59e',
    type: 'GET',
    success: function(response){
      $('#temp').text(response.data.temperature_current_c);
      $('#tempHigh').text(response.data.temperature_24hr_max_c);
      $('#tempLow').text(response.data.temperature_24hr_min_c);
    }
  });
});


  startTime();
  loadStuff();
