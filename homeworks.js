console.log("Hello World !!!");
						//output 5,10,15
function numberInc(num) {
		 var n1 = num;
		 var res = num+=num;
		 console.log(n1,res,num+n1);
}
numberInc(5);
						//averageSumm

function averageSumm(x,y,z,h,l) {
	var summ = x+y+z+h+l;
	var res = summ/5;
	return res;
}
console.log(averageSumm(12,43,7,54,7));

						//week days

var day;
switch(new Date().getDay()){
	case 0:
	day="Today is: Sunday";
	break;
	case 1:
	day="Today is: Monday";
	break;
	case 2:
	day="Today is: Tuesday";
	break;
	case 3:
	day="Today is: Wednesday";
	break;
	case 4:
	day="Today is: Thursday";
	break;
	case 5:
	day="Today is: Friday";
	break;
	case 6:
	day="Today is: Saturday";
}	
console.log(day);



						//chek pm or am (Dates)

var hour = new Date();
var  result;
switch (hour.getHours()){
case hour.getHours(12-23):
result = "pm";
break;
default:
result = "am"
}
console.log(result);


						//get time

function getSecMinHr() {
	var h;
	var m =  new Date().getMinutes();
	var s =  new Date().getSeconds();
	var ampm;
	
		if (h = new Date().getHours(0-11)) {
			ampm = "PM";
		}
		else{
			ampm = "AM"
		}


	console.log("Current time is:",h,ampm+":",m+":",s);
}
getSecMinHr();

						//sort numbers

function sort(x,y,z){
 	if(x<y&&x<z&&z<y){
 		console.log(x,z,y)
 	}
	else if(y<x&&y<z&&x<z){
	 	console.log(y,x,z)
	}
	else if(y<x&&y<z&&x>z){
	 	console.log(y,z,x)
	}
	else if(z<x&&z<y&&x<y){
		console.log(z,x,y)
	}
	else if(z<x&&z<y&&x>y){
		console.log(z,y,x)
	} 
	else{
		console.log(x,y,z)
	}
}
sort(7,5,3);

						//reverse numbers

function reverse(numbers) {
var str = numbers.toString();
var array = str.split("");
var rev = array.reverse();
var res =  rev.join("")
return res;
}
console.log(reverse(12345));

						//toUpperCase

function toUpCase(str) {
	var empS="";
	for (var i = 0; i < str.length; i++) {
			empS += str[i].toUpperCase();
		}	
				console.log(empS);		
}
toUpCase("string");


						//Calendar.day.

function cal(x) {
	var d = new Date().getDate();
	for (var i = 1; i <= x; i++) {
		if (i==d) {
			console.log(i+"+");
		}
		else
			console.log(i);
	}
}
cal(30);

						//daysInMonth

function daysInMonth(month, year) {
  return  new Date(year, month, 0).getDate();
}
console.log(daysInMonth(6, 2019));
console.log(daysInMonth(7, 2019));
console.log(daysInMonth(8, 2019)); 


