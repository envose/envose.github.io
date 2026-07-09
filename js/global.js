// const
const GUARD_QUOTA = 2;
const GUARD_DURATION = 1000 * 60 * 60 * 3;
const form = document.forms['submit-to-google-sheet'];
const app_name = '錫安的星辰';

const alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {backdrop: 'static', keyboard: false});
const inputModal = new bootstrap.Modal(document.getElementById('inputModal'), {backdrop: 'static', keyboard: false});
const chartModal = new bootstrap.Modal(document.getElementById('chartModal'), {backdrop: 'static', keyboard: false});

// views
var header = document.getElementById('container_header');
var content = document.getElementById('container_content');
var footer = document.getElementById('container_footer');

var starNum = 0;
var starName = '';
var starList = {};

var taskForm = {'tid' : ''};

var chartForm = {
	'data' : [12, 19, 3, 5, 2, 3],
	'labels' : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
};

  var chartLabelList = {
    'dt01': '祈禱',
    'dt02': 'My Page',
    'dt03': '傳道',
    'dt04': '線上宣教',
    'mt01': 'LMS',
    'mt02': '預備日'
  }


var cheerUpMsg = [
  '做得真棒！',
  '做得好，辛苦了！',
  '為了做……很累吧？毅力好強大啊！',
  '真棒！您做得很好！',
  '加油！一切都會好的',
  '我會一直為你加油的。加油！',
  '親愛的，加油！',
  'Animo！(西班牙語-加油！）',
  '一起加油吧！',
  '二地域的姊妹，加油！',
  '加油，Animo！',
  '加油！父親母親會賜下許多祝福',
  '你做到了，真棒！',
  '所有上班族，加油！',
  '思慕着天國常常喜樂，一起加油吧！'
];