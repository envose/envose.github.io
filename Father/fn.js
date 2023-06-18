
// run on page load
var demo = false;

const pool = demo ? pool_demo : pool_prod;
const dur = demo ? 0.3 : 2; // mins
const indur = demo ? "00:18" : "02:00";
const max = demo ? 5 : 100;
var count = max;

var used = [];


var rulesContent = document.querySelector('#rulesContent');
rulesContent.innerHTML = rules;

var minutes1 = 60 * dur;
display = document.querySelector('#time');
bar = document.querySelector('#progressBar');
var timer = minutes1, minutes, seconds;
display.innerHTML = indur;
nextBtn = document.querySelector('#nextBtn');
startTimerBtn = document.querySelector('#startTimerBtn');
stopTimerBtn = document.querySelector('#stopTimerBtn');
resetTimerBtn = document.querySelector('#resetTimerBtn');
//counting = document.querySelector('#counting');
//counting.innerHTML = max;
hideBtn(nextBtn);
hideBtn(stopTimerBtn);
hideBtn(resetTimerBtn);
display.style.opacity = 0;

var interval = null;

var playAudio = document.getElementById('playAudio');
var pauseAudio = document.getElementById('pauseAudio');
var audio = document.getElementById('audio');
 
var onPlay = function() {
    audio.play(); // audio will load and then play
};
 
playAudio.addEventListener('click', onPlay, false);

var onPause = function() {
    audio.pause();
    audio.currentTime = 0;
};
 
pauseAudio.addEventListener('click', onPause, false);

$('#rulesModal').modal('show');

function showContent(content) {
  var div = document.getElementById('content');
  div.innerHTML = content;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function next() {

  var num = getRandomInt(pool.length);
  while (used.includes(num)) {
    if (used.length < pool.length) {
      num = getRandomInt(pool.length);
    }else{
      num = "End";
      stopTimer();
    }
  }

  if (num != "End") {
    used.push(num);
  }

  showContent((num == "End") ? num : pool[num]);
  /*
  counting.innerHTML = count;
  count--;
  if (count<0) {
    stopTimer();
    showContent("<i>結束</i>");
  }
  */
}

function hideBtn(btn) {
  btn.style = "display: none";
}

function showBtn(btn) {
  btn.style = "display: block";
}

function timerFn() {
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);
  
  var totalSeconds = dur * 60;
  var remainingSeconds = minutes * 60 + seconds;
  
  bar.style.width = (remainingSeconds*100/totalSeconds) + "%";

  if (remainingSeconds < 11) {
    if (remainingSeconds == 10) {
      // display.style.opacity = 100;
      playAudio.click();
    }
    bar.classList.remove("bg-warning");
    bar.classList.add("bg-danger");
  }
  
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = minutes + ":" + seconds;
  if (--timer < 0) {
    //timer = duration;
    stopTimer();
  }
}

function stopTimer() {
  // display.style.opacity = 100;
  setTimeout(function (){ 
    pauseAudio.click();       
  }, 1000);
  clearInterval(interval);
  hideBtn(stopTimerBtn);
  hideBtn(startTimerBtn);
  hideBtn(nextBtn);
  showBtn(resetTimerBtn);
}

function startTimer() {
  display.style.opacity = 0;
  interval = setInterval(timerFn, 1000);
  hideBtn(startTimerBtn);
  hideBtn(resetTimerBtn);
  showBtn(stopTimerBtn);
  showBtn(nextBtn);
  nextBtn.click();
}

function resetTimer() {
  //used = [];
  bar.classList.remove("bg-danger");
  bar.classList.add("bg-warning");
  count = max;
  //counting.innerHTML = count;
  showContent("<i>預備</i>");
  var minutes1 = 60 * dur;
  timer = minutes1, minutes, seconds;
  var div = document.getElementById('time');
  display.style.opacity = 0;
  display.innerHTML = indur;
  bar.style.width = "100%";
  hideBtn(resetTimerBtn);
  showBtn(startTimerBtn);
}
