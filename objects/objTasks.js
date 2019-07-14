                                                 //checkLetter
var obj = {
	1:"a",
	2:"b",
	3:"c"
}

function check(xy) {
for(var x in obj)
	if (obj[x]==xy) {
		console.log(true);
	}
}
check("c");


                                                //checkName

	var object = {
		name: "Vilen",
		srname: "Hakobyan",
		age:"25"
	}
	function check2(x) {
		for(var i in object)
			if (object[i]==x) {
				alert("objecty uni "+object.name+" parametry")
			}
	}
	f("Vilen");



                                                 //deleteObj

	var obj = {
		1: "Hello",
		2: "My",
		3: "Dear",
		4: "Freind"
	}
	function deleteObj() {
		for(var i in obj)
			if (i==3) {
				delete obj[i];
			}
	}
	deleteObj()
	console.log(obj);



                                           
                                                  //checkObjLength 1


var objects = {
	1: "Mek",
	2: "Erku",
	3: "Ereq",
	4: "Chors",
	5: "Hing"
}
function Objlength(x) {
	for(var i in objects){
		x++;
	}
	console.log("Objects length is "+x)
}
Objlength(0);


                                                  //checkObjLength 2



var objects = {
	1: "Mek",
	2: "Erku",
	3: "Ereq",
	4: "Chors",
	5: "Hing"
}

 var arr = Object.keys(objects);
 console.log(arr.length);

                                                  //objKeys

var objects = {
	1: "Mek",
	2: "Erku",
	3: "Ereq",
	4: "Chors",
	5: "Hing"
}

var objArr = Object.keys(objects);
console.log(parseInt(objArr[1])+parseInt(objArr[3]));
