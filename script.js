var totalSeconds = 0;
var maxTime = 3 * 60 * 60; 

function addTime() {
//   var hours = parseInt(document.getElementById("hours").value) || 0; 
  var minutes = parseInt(document.getElementById("minutes").value) || 0; 
  var seconds = parseInt(document.getElementById("seconds").value) || 0; 

  totalSeconds +=  minutes * 60 + seconds;

  var totalHours = Math.floor(totalSeconds / 3600);
  var remainingSeconds = totalSeconds % 3600;
  var remainingMinutes = Math.floor(remainingSeconds / 60);
  remainingSeconds = remainingSeconds % 60;

  document.getElementById("result-hours").innerText = "Hours: " + totalHours;
  document.getElementById("result-minutes").innerText =
    "Minutes: " + remainingMinutes;
  document.getElementById("result-seconds").innerText =
    "Seconds: " + remainingSeconds;


//   document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";

  if (totalSeconds >= maxTime) {
    document.getElementById("status-color").innerText = "Done";
    document.getElementById("status-color").classList.remove("red");
    document.getElementById("status-color").classList.add("green");

    document.getElementById("result-hours").style.color = "green";
    document.getElementById("result-minutes").style.color = "green";
    document.getElementById("result-seconds").style.color = "green";
    document.getElementById("remaining-time").style.color = "green";

    document.getElementById("remaining-time").innerText =
      "Remaining Time: 0 minutes";
  } else {
    var remainingTime = maxTime - totalSeconds;
    var remainingMinutes = Math.floor(remainingTime / 60);
    var remainingSeconds = remainingTime % 60;

    document.getElementById("status-color").innerText = "Not Completed";
    document.getElementById("status-color").classList.remove("green");
    document.getElementById("status-color").classList.add("red");

    document.getElementById("result-hours").style.color = "red";
    document.getElementById("result-minutes").style.color = "red";
    document.getElementById("result-seconds").style.color = "red";
    document.getElementById("remaining-time").style.color = "red";

    document.getElementById("remaining-time").innerText =
      "Remaining Time: " +
      remainingMinutes +
      " minutes and " +
      remainingSeconds +
      " seconds";
  }
}

function resetTimer() {
  totalSeconds = 0; 

  document.getElementById("result-hours").innerText = "Hours: 0";
  document.getElementById("result-minutes").innerText = "Minutes: 0";
  document.getElementById("result-seconds").innerText = "Seconds: 0";
  document.getElementById("status-color").innerText = "Red";
  document.getElementById("status-color").classList.remove("green");
  document.getElementById("status-color").classList.add("red");

  document.getElementById("result-hours").style.color = "red";
  document.getElementById("result-minutes").style.color = "red";
  document.getElementById("result-seconds").style.color = "red";
  document.getElementById("remaining-time").style.color = "red";


  document.getElementById("remaining-time").innerText =
    "Remaining Time: 180 minutes";


  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
}
