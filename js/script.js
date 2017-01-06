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
  var timeString = hour + ':' + mins + ':' + secs + ' ' + ampm;
  var dateString = day + ' ' + month + ' ' + date + ', ' + year;
  document.getElementById('time').innerHTML = timeString;
  document.getElementById('date').innerHTML = dateString;
  var t = setTimeout(startTime, 500);
}


var scratch = document.getElementById('scratchpad');
scratch.addEventListener('keyup', function() {
    var content = scratch.innerHTML.trim();
    localStorage.setItem('scratchpad', content);
});
var content = localStorage.getItem('scratchpad');
if(content == '' || content == null) {
    content = 'Write some notes here...';
}
scratch.innerHTML = content;


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

  $('.nav-tabs li a').on('click', function(){
    $('.nav-content active').removeClass('active');
    $(this).addClass('active');
  });

  $(document).on('click', '#new', function() {
      var course_name = prompt("Please enter course name", "eg: Math 135");
      course_name_s = course_name;
      course_name = course_name.replace(/\s+/g, '');
      $('.nav-tabs').children().last().remove();
      $('.nav-tabs').append('<li role="presentation"><a href="#' + course_name + '" aria-controls="' + course_name + '" role="tab" data-toggle="tab">' + course_name_s + '</a></li>');
      $('.nav-tabs').append('<li role="presentation"><a href="#new" id="new" aria-controls="new" role="tab" data-toggle="tab" onclick="newCourse()">new</a></li>');
      $('.tab-content').append('<div role="tabpanel" class="tab-pane" id="' + course_name + '"><p>'+ course_name_s + '</p></div>');
    });
});


  startTime();
  loadStuff();
