                                                     //forExample

function myFunction() {
  var text = "";
  for (var i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  document.write(text);
}
myFunction();


                                                    //whileExample


function myFunction() {
  var text = "";
  var i = 0;
  while (i < 5) {
    text += "<br>The number is " + i;
    i++;
  }
  document.write(text);
}
myFunction();


                                                    //doWhileExample



function myFunction() {
  var text = ""
  var i = 0;
  do {
    text += "<br>The number is " + i;
    i++;
  }
  while (i < 5);
  document.write(text);
}
myFunction();


                                                     //foreach


var numbers = [1,2,3,4,5];
numbers.forEach(fu);
function fu(value,index) {
	console.log(value * 2);
}
                                                     //arrayMap

var numbers = [1,2,3,4,5];
numbers.map(fu);
function myFunction(value,index) {
	console.log(value * 2);
}
