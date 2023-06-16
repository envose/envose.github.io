var pool = [
"錫安",
"父親",
"母親",
"安息日",
"逾越節",
"祈禱"
/*,
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"23",
"24",
"25",
"26",
"27",
"28",
"29",
"30",
"31",
"32",
"33",
"34",
"35",
"36",
"37",
"38",
"39",
"40",
"41",
"42",
"43",
"44",
"45",
"46",
"47",
"48",
"49",
"50",
"51",
"52",
"53",
"54",
"55",
"56",
"57",
"58",
"59",
"60",
"61",
"62",
"63",
"64",
"65",
"66",
"67",
"68",
"69",
"70",
"71",
"72",
"73",
"74",
"75",
"76",
"77",
"78",
"79",
"80",
"81",
"82",
"83",
"84",
"85",
"86",
"87",
"88",
"89",
"90",
"91",
"92",
"93",
"94",
"95",
"96",
"97",
"98",
"99",
*/
];

var used = [];

var dur = 0.1; // mins
var indur = "00:06";

function showContent(content) {
	var div = document.getElementById('content');
	div.innerHTML = content;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function next() {
console.log("used: "+used);

var num = getRandomInt(pool.length);
while (used.includes(num)) {
if (used.length < pool.length) {
num = getRandomInt(pool.length);
}else{
num = "End";
stopTimer()
}

}

if (num != "End") {
used.push(num);
}

console.log("num: "+num);
showContent((num == "End") ? num : pool[num]);
}

function hideBtn(btn) {
	btn.style = "display: none";
}

function showBtn(btn) {
	btn.style = "display: block";
}

function startTimer(duration, display, bar) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        var totalSeconds = dur * 60
        , remainingSeconds = minutes * 60 + seconds
        
        bar.style.width = (remainingSeconds*100/totalSeconds) + "%";
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            //timer = duration;
            clearInterval(interval);
        }
    }, 1000);
}

//window.onload = function () {
    var minutes1 = 60 * dur;
    display = document.querySelector('#time');
    bar = document.querySelector('#progressBar');
    var timer = minutes1, minutes, seconds;

    display.innerHTML = indur;
    nextBtn = document.querySelector('#nextBtn');
    startTimerBtn = document.querySelector('#startTimerBtn');
    stopTimerBtn = document.querySelector('#stopTimerBtn');
    resetTimerBtn = document.querySelector('#resetTimerBtn');

    hideBtn(nextBtn);
    hideBtn(stopTimerBtn);
    hideBtn(resetTimerBtn);

    function timerFn() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        var totalSeconds = dur * 60
        , remainingSeconds = minutes * 60 + seconds
        
        bar.style.width = (remainingSeconds*100/totalSeconds) + "%";
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            //timer = duration;
            stopTimer();
        }
    }

    var interval = null;

    function stopTimer() {
		clearInterval(interval);
		hideBtn(stopTimerBtn);
		hideBtn(startTimerBtn);
		hideBtn(nextBtn);
		showBtn(resetTimerBtn);
	}

	function startTimer() {
		interval = setInterval(timerFn, 1000);
		hideBtn(startTimerBtn);
		hideBtn(resetTimerBtn);
		showBtn(stopTimerBtn);
		showBtn(nextBtn);
		nextBtn.click();
	}

	function resetTimer() {
		used = [];
		showContent("");
		var minutes1 = 60 * dur;
		timer = minutes1, minutes, seconds;
		var div = document.getElementById('time');
		display.innerHTML = indur;
		bar.style.width = "100%";
		hideBtn(resetTimerBtn);
		showBtn(startTimerBtn);
	}

    
//};