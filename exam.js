// Set the date we're counting down to
//var countDownDate = new Date("Jan 11, 2022 15:30:00").getTime();
var countDownDate = new Date("Jan 4, 2022 18:28:50").getTime();

// Update the count down every 1 second
var x = setInterval(countdown, 1000);

//==========================================================
function countdown() {
  var now = new Date().getTime(); //unit: millisecond
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  hours + "时 " + minutes + "分 " + seconds + "秒 ";
    var x = document.body;
	if(distance <1000*10){
	document.getElementById("demo").innerHTML = seconds + "秒 " + "请及时提交！！";	
	document.getElementById("demo").style.fontSize=20+'px';
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "red" : "yellow";
	}
	
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "考试结束";
	document.getElementById("demo").style.color="white";
	x.style.backgroundColor = "black";
  }
}