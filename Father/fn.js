
var demo = true;

const pool = demo ? pool_demo : pool_prod;
const dur = demo ? 0.3 : 2; // mins
const indur = demo ? "00:18" : "02:00";
const max = demo ? 5 : 20;
var count = max;

var used = [];

const audio = new Audio();
audio.autoplay =true;

var isAudioStarted = false;


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
counting = document.querySelector('#counting');
counting.innerHTML = max;
hideBtn(nextBtn);
hideBtn(stopTimerBtn);
hideBtn(resetTimerBtn);


var interval = null;

$('#rulesModal').modal('show');

function playBeep() {
  audio.src = 'timer_10s.mp3';
  audio.play();
}

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
  counting.innerHTML = count;
  count--;
  if (count<0) {
    stopTimer();
    showContent("<i>結束</i>");
  }
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
    if (!isAudioStarted) {
      playBeep();
      isAudioStarted = true;
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
  clearInterval(interval);
  hideBtn(stopTimerBtn);
  hideBtn(startTimerBtn);
  hideBtn(nextBtn);
  showBtn(resetTimerBtn);
}

function startTimer() {
  isAudioStarted = false;
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
  counting.innerHTML = count;
  showContent("<i>預備</i>");
  var minutes1 = 60 * dur;
  timer = minutes1, minutes, seconds;
  var div = document.getElementById('time');
  display.innerHTML = indur;
  bar.style.width = "100%";
  hideBtn(resetTimerBtn);
  showBtn(startTimerBtn);
}
