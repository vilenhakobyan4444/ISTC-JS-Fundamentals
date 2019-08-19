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



						//DateTask
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);



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


						//arraySortWhile

function sort(arr) {
	var i = 0;
	var j;
	while(i<arr.length){
			j=i+1;
			while(j<arr.length){
				if (arr[i]>arr[j]) {
					var m = arr[i];
					arr[i]=arr[j];
					arr[j]=m 
				}
			j++;
			}
			i++;	
	}
	console.log(arr)
}
sort([1,3,6,3,4,10,5]);

						//forSort

var arr = [1,5,1,7,3,2];
for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if (arr[i]>arr[j]) {
			var p = arr[i];
			arr[i]=arr[j];
			arr[j]=p 
		}
	}}
		console.log(arr);

						//maxArray

function max(x) {
	var max = x[0];
	for (var i = 0; i < x.length; i++) {
		if (x[i]>max) {
			max=x[i];
		}
	}
	console.log(max)
}
max([1,5,2,18,59,100,128]);

						
						//count of reapet string


function fu(str){
    var score = 1;
    for(var i = 0; i< str.length; i++){
        if(str[i] === str[i+1]){
            score++;
        } else{
            console.log(score + str[i]);
            score = 1;
        }
    }
}
fu("wwwaaagsdfsdss");

						//toUpperCase

function func(str){
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(i === 0){
            newStr = str[i].toUpperCase();
        } else if(str[i] === " "){
            j = newStr.length;
            newStr += (str.slice(j,i) + " " + str[i+1].toUpperCase());
        }
    }
    console.log(newStr + "ion");
     
}
func("the king is lion")
