var start = "";
var rptYrList = [];
var rptMthList = {};
var ip = "";
const form = document.forms['submit-to-google-sheet'];
const loginForm = document.forms['login_form'];
const scriptURL = 'https://script.google.com/macros/s/AKfycbz2hwjGo9O1Z7ucQyVJID0jWiRI69hCYK6DloZbxL6taEdseR5TYyyshFd06Dp4EDe7/exec?k=';

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      if (!form.checkValidity()) {
        event.stopPropagation()
      }else{

      $('#overlay').show();
      fetch(scriptURL+localStorage.getItem("k"), { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log(JSON.stringify(response));
        // alert('已記錄 Recorded');
        ;
        getData(localStorage.getItem("k"));
        // viewStar();
        // $('#starModal').modal('show');
        // retrieveData(true);
        // selectStar('Envose');
        // name = document.getElementById("finame").value;
      })
      .catch(error => {
        alert('錯誤 Error\n['+ error.message + ']');
        // off();
      })
      $('#input_record').modal('hide');
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    $('#overlay').show();
    $("#inputEmail").blur(); 
    $("#inputPassword").blur(); 
    $("#loginBtn").blur(); 
    login();
      // location.reload();
  });
/*
form.addEventListener('submit', e => {
    e.preventDefault()
      $('#overlay').show();
      fetch(scriptURL+localStorage.getItem("k"), { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log(JSON.stringify(response));
        // alert('已記錄 Recorded');
        ;
        getData(localStorage.getItem("k"));
        // viewStar();
        // $('#starModal').modal('show');
        // retrieveData(true);
        // selectStar('Envose');
        // name = document.getElementById("finame").value;
      })
      .catch(error => {
        alert('錯誤 Error\n['+ error.message + ']');
        // off();
      })
      $('#input_record').modal('hide');
  });
*/
const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach( function(l) {
  l.addEventListener('click', function() { 
    // avoid flickering on desktop 
    if (menuToggle.classList.contains('show')) { 
      bsCollapse.toggle(); 
    } 
  }); 
}); 

function sort_unique(arr) {
  if (arr.length === 0) return arr;
  arr = arr.sort(function (a, b) { return a*1 - b*1; });
  var ret = [arr[0]];
  for (var i = 1; i < arr.length; i++) { //Start loop at 1: arr[0] can never be a duplicate
    if (arr[i-1] !== arr[i]) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

const getDays = (y, m) => {
  return new Date(y, m, 0).getDate();
};

const get1stDayOfMth = (y, m) => {
  return new Date(y, new Date(y, m, 0).getMonth(), 1).getDay();
};

const getNumOfWeekDays = (y, m, w) => {
  var daysInMth = getDays(y, m);
  var numOfFullWeeks = Math.floor(daysInMth / 7);
  var rems = [];
  for (var i = 1; i <= (daysInMth-numOfFullWeeks*7); i++) {
    rems.push((get1stDayOfMth(y, m)+i-1)%7);
  }
  return numOfFullWeeks + (rems.includes(w) ? 1 : 0);
};

function getListOfMths () {
  const today = new Date();
  const sy = start.split("-")[0];
  const sm = start.split("-")[1];
  var d = new Date(sy, sm-1, 1);
  var mths = {};
  do {
    const dy = d.getFullYear();
    const dm = d.getMonth()+1;
    mths.hasOwnProperty(dy) ? mths[dy].push(dm) : mths[dy]=[dm];
    d = new Date(d.setMonth(dm));
  } while (d < today);
  rptYrList = Object.keys(mths).reverse();
  rptYrList.forEach(function(key) {
    rptMthList[key] = mths[key].reverse();
  });
}

function getFullScore (y, m, aspect) {
  var score = 0;
  switch (aspect) {
    case "w":
      score = getNumOfWeekDays(y, m, 2)+getNumOfWeekDays(y, m, 6)*3;
      break;
    case "sp":
    case "p":
    case "s":
    case "t":
      score = fullMarks[aspect];
      break;
  }
  return score;
}


function createRptLI(value, label, onclick) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.classList.add('dropdown-item');
  a.href = '#';
  a.value = value;
  a.innerHTML = label;
  a.onclick = onclick;
  li.appendChild(a);
  return li;
}



function createRptEntries(entry) {
  var t = document.querySelector('#rptBody');
  t.innerHTML = '';

  for (var i = 0; i < entry.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = i+1;
    tr.appendChild(td);
    for (var j = 0; j < entry[i].length; j++) {
      var td = document.createElement('td');
      td.innerHTML = entry[i][j];
      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
}

function selectAge(value, label) {
  var btn = document.getElementById('rptAgeBtnGp');
  btn.innerHTML = label;
  rptSelector.age = {'label': label, 'value': value};
  setRptUnitBtn();
  generateReport();
}

function selectUnit(value, label) {
  var btn = document.getElementById('rptUnitBtnGp');
  btn.innerHTML = label;
  rptSelector.unit = value;
  generateReport();
}

function selectYear(value, label) {
  var btn = document.getElementById('rptYearBtnGp');
  btn.innerHTML = label;
  rptSelector.year = value;
  setRptMonthBtn();
  generateReport();
}

function selectMonth(value, label) {
  var btn = document.getElementById('rptMonthBtnGp');
  btn.innerHTML = label;
  rptSelector.month = value;
  generateReport();
}

function setRptAgeBtn() {
  /*
  if (ageList.length == 1) {
    var btn = document.getElementById('rptAgeBtn');
    btn.innerHTML = ageList[0].label;
    btn.value = ageList[0].value;
    btn.classList.remove('d-none');
  }
  if (ageList.length > 1) {
    */
    var btn = document.getElementById('rptAgeBtnGp');
    btn.innerHTML = ageList[0].label;
    btn.classList.remove('d-none');
    var ul = document.getElementById('rptAgeBtnGpUL');
    ul.innerHTML = '';

    if (ageList.length == 1) {
      btn.classList.add('disabled');
    }else{
      btn.classList.remove('disabled');
    }
    for (let i = 0; i < ageList.length; i++) {
      var li = createRptLI(ageList[i].value, ageList[i].label, function () {selectAge(ageList[i].value, ageList[i].label)});
      ul.appendChild(li);
    }
    selectUnit(ageList[0].value, ageList[0].label);
  // }
  rptSelector.age = ageList[0];
  setRptUnitBtn();
}

function setRptUnitBtn() {
  var list = [];
  console.log("unitList: "+JSON.stringify(unitList));
  console.log("rptSelector: "+JSON.stringify(rptSelector));
  Array.from(unitList).forEach(unit => {
    console.log(unit.age+rptSelector.age.value);
    if (unit.age == rptSelector.age.value) {
      var json = {};
      json.value = unit.unit;
      json.label = unit.unit;
      list.push(json);
    }
  });
  /*
  if (list.length == 1) {
    var btn = document.getElementById('rptUnitBtn');
    btn.innerHTML = list[0].label;
    btn.value = list[0].value;
    btn.classList.remove('d-none');
  }
  if (list.length > 1) {
    */
    var btn = document.getElementById('rptUnitBtnGp');
    btn.innerHTML = list[0].label;
    btn.classList.remove('d-none');
    var ul = document.getElementById('rptUnitBtnGpUL');
    ul.innerHTML = '';
    if (list.length == 1) {
      btn.classList.add('disabled');
    }else{
      btn.classList.remove('disabled');
    }
    for (let i = 0; i < list.length; i++) {
      var li = createRptLI(list[i].value, list[i].label, function () {selectUnit(list[i].value, list[i].value)});
      ul.appendChild(li);
    }
    selectUnit(list[0].value, list[0].value);
  // }
  console.log("list: "+JSON.stringify(list));
  rptSelector.unit = list[0].value;
}

function setRptYearBtn() {
  /*
  if (rptYrList.length == 1) {
    var btn = document.getElementById('rptYearBtn');
    btn.innerHTML = rptYrList[0];
    btn.value = rptYrList[0];
    btn.classList.remove('d-none');
  }
  if (rptYrList.length > 1) {
    */
    var btn = document.getElementById('rptYearBtnGp');
    btn.innerHTML = rptYrList[0];
    btn.classList.remove('d-none');
    var ul = document.getElementById('rptYearBtnGpUL');
    ul.innerHTML = '';
    if (rptYrList.length == 1) {
      btn.classList.add('disabled');
    }else{
      btn.classList.remove('disabled');
    }
    for (let i = 0; i < rptYrList.length; i++) {
      var li = createRptLI(rptYrList[i], rptYrList[i], function () {selectYear(rptYrList[i], rptYrList[i])});
      ul.appendChild(li);
    }
    selectYear(rptYrList[0], rptYrList[0]);
  // }
  rptSelector.year = rptYrList[0];
  setRptMonthBtn();
}


function setRptMonthBtn() {
  var list = rptMthList[rptSelector.year];
  var btn1 = document.getElementById('rptMonthBtn');
  var btn2 = document.getElementById('rptMonthBtnGp');
  
  if (list.length == 1) {
    btn2.classList.add('disabled');
  }else{
    btn2.classList.remove('disabled');
  }
  /*
  if (list.length > 1) {
    */
    btn1.classList.add('d-none');
    btn2.innerHTML = list[0];
    btn2.classList.remove('d-none');
    var ul = document.getElementById('rptMonthBtnGpUL');
    ul.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
      var li = createRptLI(list[i], monthLabel[list[i]], function () {selectMonth(list[i], monthLabel[list[i]])});
      ul.appendChild(li);
    }
    selectMonth(list[0], monthLabel[list[0]]);
  // }
  rptSelector.month = list[0];
}

function generateReport() {

  var u = rptSelector.age.value+"_"+rptSelector.unit;
  var e = rptSelector.year+"-"+rptSelector.month;

  var json = {};
  rptMissingList = [];
  var extra = [];
  var members = [];
  var entries = [];

  for (var i = 0; i < nameList.length; i++) {
    if (u.includes(nameList[i].unit)){
      members = nameList[i].members;
    }
  }
  var total = 0;
  Array.from(records).forEach(r => {
    if (u.includes(r.unit) && e.includes(r.entry)) {
      if (!members.includes(r.name)) {
        extra.push(r.name);
      }
      var entry = [];
      entry.push(r.name);
      var w = (r.score_w/getFullScore(rptSelector.year, rptSelector.month, "w"))*100;
      var sp = (r.score_sp/getFullScore(rptSelector.year, rptSelector.month, "sp"))*100;
      var p = (r.score_p/getFullScore(rptSelector.year, rptSelector.month, "p"))*100;
      var s = (r.score_s/getFullScore(rptSelector.year, rptSelector.month, "s"))*100;
      var t = r.score_t;
      w = (w > 100 ? 100 : w);
      sp = (sp > 100 ? 100 : sp);
      p = (p > 100 ? 100 : p);
      s = (s > 100 ? 100 : s);
      t = (t > 100 ? 100 : t);
      var score = Math.floor(w+sp+p+s+t);
      total += score;
      entry.push(r.score_w+' <small class="text-secondary">/ '+getFullScore(rptSelector.year, rptSelector.month, "w")+'</small>');
      entry.push(r.score_sp+' <small class="text-secondary">/ '+getFullScore(rptSelector.year, rptSelector.month, "sp")+'</small>');
      entry.push(r.score_p+' <small class="text-secondary">/ '+getFullScore(rptSelector.year, rptSelector.month, "p")+'</small>');
      entry.push(r.score_s+' <small class="text-secondary">/ '+getFullScore(rptSelector.year, rptSelector.month, "s")+'</small>');
      entry.push(r.score_t+' %');
      entry.push('<strong>'+score+'</strong>');
      json[r.name]=entry;
    }
  });
  for (var j = 0; j < members.length; j++) {
    if (json.hasOwnProperty(members[j])) {
      entries.push(json[members[j]]);
    }else{
      rptMissingList.push(members[j]);
      var entry = [];
      entry.push(members[j]);
      entry.push("---");
      entry.push("---");
      entry.push("---");
      entry.push("---");
      entry.push("---");
      entry.push("---");
      entries.push(entry);
    }
  }
  for (var k = 0; k < extra.length; k++) {
    entries.push(json[extra[k]]);
  }
  createRptEntries(entries);
  if (rptMissingList.length) {
    var rptBtn = document.getElementById('reportBtn');
    rptBtn.classList.remove('d-none');
  }
  var span = document.getElementById('score');
  span.innerHTML = Math.floor(total/entries.length);

}

function openReport() {
  clearContent();
  resetRptSelector();
  getListOfMths();
  getUnitLists(nameList);

  console.log('openReport');
  console.log(JSON.stringify(rptYrList));
  console.log(JSON.stringify(rptMthList));
  console.log(ageList);
  console.log(unitList);

  var rptContainer = document.getElementById('reportContainer');
  rptContainer.classList.remove('d-none');
  // var rptBtn = document.getElementById('reportBtn');
  // rptBtn.classList.remove('d-none');

  setRptAgeBtn();
  setRptYearBtn();
}

function openAnalysis() {
  console.log('openAnalysis');
  clearContent();
}

function resetRptSelector() {
  const rpt = document.querySelectorAll('.rptSelector')

  // Loop over them and prevent submission
  Array.from(rpt).forEach(f => {
    f.classList.add('d-none');
  })
}

function resetForm() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(f => {
    f.classList.remove('was-validated')
  })
}

function clearContent() {

  $('#red_alert').hide();
  $('#overlay').hide();
  $('#signin').hide();
  $('#sys').show();
  
  /*
  var c = document.querySelector('#content');
  c.innerHTML = '';
  var ct = document.querySelector('#reportContainer');
  ct.classList.add('d-none');
  var rptBtn = document.getElementById('reportBtn');
  rptBtn.classList.add('d-none');
  if (menuToggle.classList.contains('show')) { 
    bsCollapse.toggle(); 
  } 
  */
}

function getAge(str) {
  let g = str.split('_')[0];
  var gp = "";
  switch (g) {
    case "AM":
      gp = "壯年";
      break;
    case "AF":
      gp = "婦女";
      break;
    case "YM":
      gp = "男青年";
      break;
    case "YF":
      gp = "女青年";
      break;
    default:
      gp = "none";
      break;
  }
  return gp;
}


function getUnitLists(arr) {
  age_arr = [];
  ageList = [];
  unitList = [];
  for (let i = 0; i < arr.length; i++) {
    let json = {};
    json.value = arr[i].unit;
    let age = arr[i].unit.split('_')[0];
    json.age = age;
    if (!age_arr.includes(age)) age_arr.push(age);
    json.unit = arr[i].unit.split('_')[1];
    json.label = getAge(age) + ' ' + json.unit;
    unitList.push(json);
  }
  for (let i = 0; i < age_arr.length; i++) {
    let json = {};
    json.value = age_arr[i];
    json.label = getAge(age_arr[i]);
    ageList.push(json);
  }
}

function prefill() {
  console.log("prefill: "+JSON.stringify(rptSelector));
  var u = document.getElementById('input_unit');
  var u_display = document.getElementById('input_unit_display');
  u.value = rptSelector.age.value+'_'+rptSelector.unit;
  u_display.value = rptSelector.age.label+' '+rptSelector.unit;

  var name = document.querySelector('#input_name');
  name.innerHTML = '';
  var o = document.createElement('option');
  o.setAttribute("selected", "");
  o.setAttribute("disabled", "");
  o.setAttribute("value", "");
  o.innerHTML = "請選擇...";
  name.appendChild(o);

  Array.from(rptMissingList).forEach(n => {
    var option = document.createElement('option');
    option.innerHTML = n;
    name.appendChild(option);
  });

  var mo = document.querySelector('#input_month');
  mo.value = rptSelector.year+'-'+rptSelector.month;

  $('#input_name').focus();
}

$('#input_record').on('hidden.bs.modal', function(){
  resetForm();
});

$('#input_record').on('show.bs.modal', function(){
  prefill();
});

console.log("# of w-day: "+ getFullScore(2023, 4, "w"));

$.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(data) {
  ip = data.ip;
  console.log("IP: "+ip);
});

var encrypted = CryptoJS.AES.encrypt("Message", "Secret");
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret");
console.log("encrypted: " + encrypted);
console.log("decrypted: " + decrypted.toString(CryptoJS.enc.Utf8));

function parseRecords(arr) {
  var res = [];
  Array.from(arr).forEach(record => {
    var entry = {};
    entry.timestamp = record[0];
    entry.unit = record[1];
    entry.unit_display = record[2];
    entry.name = record[3];
    entry.entry = record[4];
    entry.score_w = record[5];
    entry.score_sp = record[6];
    entry.score_p = record[7];
    entry.score_s = record[8];
    entry.score_t = record[9];
    entry.remarks = record[10];
    res.push(entry);
  });
  return res;
}

function parseData(data) {
  start = data.startDate;
  fullMarks.sp=data.sp;
  fullMarks.p=data.p;
  fullMarks.s=data.s;
  fullMarks.t=data.t;
  user = data.user;
  write = data.write;
  nameList = data.unitList;
  records = parseRecords(data.records);
}

function getData(k) {
  $.getJSON(scriptURL+k, function(data) {
    
    
    if (data != null) {
      $('#overlay').hide();
      console.log('go() res: '+ JSON.stringify(data));
      if (data.result=="success") {

        var o = document.querySelector('#overlay');
        o.classList.remove('d-none');

        console.log(JSON.stringify(data));
        localStorage.setItem('k', k);
        parseData(data);
        sysPage();
        openReport();
        return;
      }else{
        console.log(JSON.stringify(data));
        redAlert(data.error_msg?data.error_msg:"Unknown Error");
      }
    }else{
      redAlert("Failed to access server");
    }
    localStorage.clear();
    loginPage();
  });
}

function login() {
  var e = document.querySelector('#inputEmail').value;
  var p = document.querySelector('#inputPassword').value;
  if (e.length < 1 || p.length < 1) {
    // redAlert("不能留空");
    loginPage();
    return;
  }
  var encrypted = btoa(e+p);
  getData(encrypted);
}

function logout() {
  localStorage.clear();
  location.reload();
}

function redAlert(msg) {
  var e = document.querySelector('#red_alert_msg');
  e.innerHTML = msg;
  $('#red_alert').show();
}

function loginPage() {
  var l = document.querySelector('#signin');
  l.classList.remove('d-none');
  $('#default_overlay').hide();
  $('#overlay').hide();
  $('#signin').show();
  $('#sys').hide();

  loginForm.reset();
  $("#inputEmail").focus(); 
}

function sysPage() {
  var s = document.querySelector('#sys');
  s.classList.remove('d-none');
  $('#default_overlay').hide();
  $('#red_alert').hide();
  $('#overlay').hide();
  $('#signin').hide();
  $('#sys').show();
}

$(document).ready(function() {
  var k = localStorage.getItem("k");
  if (k) {
    getData(k);
  }else{
    loginPage();
  }
  
});
