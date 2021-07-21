// const
const GUARD_QUOTA = 2;
const GUARD_DURATION = 1000 * 60 * 60 * 3;

// views
var header = document.getElementById('container_header');
var content = document.getElementById('container_content');
var footer = document.getElementById('container_footer');

// team
var numOfMemEntry = 0;
var team = [];
var ppl = [];
var startDate = '';
var guardAttempt = 0;

// quiz
var numOfQ = 5;
var currentQ = 0;
var mcqBGColor = '#D5E9FF';
var mcqColor = 'black';
var mcq = [{},{}]
