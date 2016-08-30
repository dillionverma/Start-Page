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
  var timeString = hour + ':' + mins;
  var dateString = day + ' ' + month + ' ' + date + ', ' + year;
  document.getElementById('time').innerHTML = timeString;
  document.getElementById('date').innerHTML = dateString;
  var t = setTimeout(startTime, 500);
}





startTime();
