/*
Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function CountingMinutes(str) { 
  
  function ClockTime(ampm, hour, minute) {
    if (ampm === 'am') { 
      this.am = true;
      this.pm = false;
    } else {
      this.am = false;
      this.pm = true;
    }
    
    this.hour = hour;
    this.minute = minute;
  }

  ClockTime.prototype.eventTime = function () {
    if (this.am) {
        return this.hour * 60 + this.minute;
    } else {
        return 12*60 + this.hour * 60 + this.minute;
    }
  };
  
  ClockTime.prototype.timeTillEOD = function () {
    return 24 * 60 - this.eventTime();
  };

  var times = str.split('-');
  var time1_ampm = times[0].substring(times[0].length - 2);
  var time1_hour = parseInt(times[0].split(':')[0], 10);
  var time1_min = parseInt(times[0].split(':')[1], 10);

  var time2_ampm = times[1].substring(times[1].length - 2);
  var time2_hour = parseInt(times[1].split(':')[0], 10);
  var time2_min = parseInt(times[1].split(':')[1], 10);

  var time1 = new ClockTime(time1_ampm, time1_hour, time1_min);
  var time2 = new ClockTime(time2_ampm, time2_hour, time2_min);
  
  if (time1.am && time2.pm) {
    return time2.eventTime() - time1.eventTime();
  } else if (time1.pm && time2.am) {
    return time1.timeTillEOD() + time2.eventTime();
  } else if (time1.am && time2.am) {
    if (time1.eventTime() < time2.eventTime()) {
      return time2.eventTime() - time1.eventTime();
    } else {
      return time1.timeTillEOD() + time2.eventTime();
    }
  } else if (time1.pm && time2.pm) {
    if (time1.eventTime() < time2.eventTime()) {
      return time2.eventTime() - time1.eventTime();
    } else {
      return time1.timeTillEOD() + time2.eventTime();
    }
  }
  
            
}
   
// this call is needed to test your function
// keep this when you submit your code
CountingMinutes(str)        

