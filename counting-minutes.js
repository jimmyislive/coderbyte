/*
Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function CountingMinutes(str) { 
  
	function Clocktime(ampm, hour, minute) {  
		if (ampm === "am") {
		this.am = true;
		this.pm = false;
		} else {
		this.pm = true;
		this.am = false;
		}
		this.minute = minute;  
		this.hour = hour;      

	Clocktime.prototype.timeFromBOD = function() {    //Clocktime object method (note the exception made for noon & midnight hours)
		if (this.am) {
		    if (this.hour === 12) {
		        return this.minute;
		    }
		  else {return this.hour * 60 + this.minute;
		 }
		}
		if (this.pm) {
		  if (this.hour === 12) {
                return this.hour * 60 + this.minute;
			}
		  else {return 12 * 60 + this.hour * 60 + this.minute;
		 }
	    }
	}

	Clocktime.prototype.timeTillEOD = function() {    //Clocktime object method (note the exception made for noon & midnight hours)
		if (this.am) {
		    if (this.hour === 12) {
		        return 24 * 60 - (this.minute);
		    }
		  else {return 24 * 60 - (this.hour * 60 + this.minute);
		  }
		}
		if (this.pm) {
			if (this.hour === 12) {
                return 24 * 60 - (this.hour * 60 + this.minute);
			}
		  else {return 12 * 60 - (this.hour * 60 + this.minute);
		  }
		}
	}

	var times = str.split("-");
	var time1ampm = times[0].substring(times[0].length-2);
	var time2ampm = times[1].substring(times[1].length-2);
	var time1minute = parseInt(times[0].slice(0, times[0].length-2).split(":")[1], 10);  
	var time2minute = parseInt(times[1].slice(0, times[1].length-2).split(":")[1], 10);
	var time1hour = parseInt(times[0].slice(0, times[0].length-2).split(":")[0], 10);  //here, parseInt doesn't change the radix but does convert the string # to a number value
	var time2hour = parseInt(times[1].slice(0, times[1].length-2).split(":")[0], 10);
	var time1 = new Clocktime(time1ampm, time1hour, time1minute);      //object instances
	var time2 = new Clocktime(time2ampm, time2hour, time2minute);

	if (time1.am && time2.am) {
		if (time1.timeFromBOD() < time2.timeFromBOD()) {
			return time2.timeFromBOD() - time1.timeFromBOD();
		} else {
			return time1.timeTillEOD() + time2.timeFromBOD();
		}
	}
	if (time1.am && time2.pm) {
		return time2.timeFromBOD() - time1.timeFromBOD();
	} else if (time1.pm && time2.am) {
		return time1.timeTillEOD() + time2.timeFromBOD();
	}
	if (time1.pm && time2.pm) {
		if (time1.timeFromBOD() < time2.timeFromBOD()) {
			return time2.timeFromBOD() - time1.timeFromBOD();
		} else {
			return time1.timeTillEOD() + time2.timeFromBOD();
		}
	}
}
   
// this call is needed to test your function
// keep this when you submit your code
CountingMinutes(str)        

