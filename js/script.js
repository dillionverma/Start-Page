$( document ).ready(function() {
  startTime();
  loadStuff();

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
});



//$(document).on('click', '#new_course', function() {
  //// var courses = db.get('courses');
  //var course_name = prompt("Please enter course name", "eg Math 135");
  //course_name_s = course_name;
  //course_name = course_name.replace(/\s+/g, '');
  //$('.nav-tabs').children().last().remove();
  //$('.nav-tabs').append('<li role="presentation"><a href="#' + course_name + '" aria-controls="' + course_name + '" role="tab" data-toggle="tab">' + course_name_s + '</a></li>');
  //$('.nav-tabs').append('<li role="presentation"><a href="#new_course" id="new_course" aria-controls="new" role="tab" data-toggle="tab">new</a></li>');
  //var links = '<ul><li><a href="#new_link" id="new_link">new</a></li></ul>';
  //$('.tab-content').append('<div role="tabpanel" class="tab-pane" id="' + course_name + '">' + links + '</div>');
//});

//$(document).on('click', '#new_link', function() {
  //// var courses = db.get('courses');
  //var link_url = prompt("Please enter link url", "eg https://learn.uwaterloo.ca");
  //var link_name = prompt("Please enter link name", "eg learn");
  //$(this).parent().parent().prepend('<li><a href="' + link_url + '">' + link_name +'</a></li>');
//});


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

  //var test = { 'math135': { 'learn': 'https://learn.com'}, 'math236': { 'quest': 'https://quest.com' }}

  //db.set('courses', test);
  //var courses = db.get('courses');

  //for (var key in courses) {
    //if (courses.hasOwnProperty(key)) {
      //$('.nav-tabs').append('<li role="presentation"><a href="#' + key + '" aria-controls="' + key + '" role="tab" data-toggle="tab">' + key + '</a></li>');
      //$('.tab-content').append('<div role="tabpanel" class="tab-pane" id="' + key + '"><p>'+ key +'</p></div>');
      //// console.log(key + " -> " + JSON.stringify(courses[key]));
    //}
  //}
  //$('.nav-tabs').append('<li role="presentation"><a href="#new_course" id="new_course" aria-controls="new" role="tab" data-toggle="tab">new</a></li>');

}

var db = {
  set: function(key, value) {
    if (!key || !value) {return;}
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  get: function(key) {
    var value = localStorage.getItem(key);
    if (!value) {return localStorage}
    if (value[0] === "{" || value[0] === "[") {
      value = JSON.parse(value);
    }
    return value;
  },
  destroy: function() {
    localStorage.clear();
  }
}
