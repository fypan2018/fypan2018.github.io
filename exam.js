// Set the date we're counting down to
var countDownDate = new Date("Feb 11, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(countdown, 1000);
var isTurnOn=true;


//==========================================================

function shift(){
  isTurnOn=!isTurnOn;
} 

function countdown() {
  var now = new Date().getTime(); //unit: millisecond
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(isTurnOn==true)
    document.getElementById("demo").innerHTML =  "倒计时： "+hours + "时 " + minutes + "分 " + seconds + "秒 ";
  else
    document.getElementById("demo").innerHTML =  "";
  
    var x = document.body;
	if(distance <1000*10){
    isTurnOn=1
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


function getDataFromClipborad(){
  navigator.clipboard.readText()
    .then(text => {
      //console.log('Pasted content: ', text);
      document.getElementById('test').innerText=text
    })
    .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });

    
  }
  
  