function selectedLang(langOpt) {
  setLangOpt(langOpt);
  createStartPage();
}

function provideSysLangOpt(isAvailable) {
  var btn = document.getElementById('btn_lang_sys');
  if (isAvailable) {
    btn.style.visibility = 'visible';
  }else{
    btn.style.visibility = 'hidden';
  }
}

function provideQuizLangOpt(isAvailable) {
  var btn = document.getElementById('btn_lang_quiz');
  if (isAvailable) {
    btn.style.visibility = 'visible';
  }else{
    btn.style.visibility = 'hidden';
  }
}

function msgAlert(msg) {
  alert(getSysTranslate('warning') + getSysTranslate(msg));
}

function msgToast(msg) {
  document.getElementById('toast_body').innerHTML = msg;
  $('#toast').toast('show');
}

function storeSysLangOpt() {
  if (localStorage.getItem('key')) {
    localStorage.setItem('lang_sys', sysLangOpt);
  }
  updateSysLangBtn();
}

function storeQuizLangOpt() {
  if (localStorage.getItem('key')) {
    localStorage.setItem('lang_quiz', quizLangOpt);
  }
  updateQuizLangBtn();
}

function storeteam() {
  if (localStorage.getItem('key')) {
    localStorage.setItem('team', team);
  }
}

function getStartDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  startDate = today;

  if (localStorage.getItem('key')) {
    localStorage.setItem('startDate', startDate);
  }
}

function updateSysLangBtn() {

  var text = '';
  switch (sysLangOpt) {
    case 0:
      text = '中';
      break;
    case 1:
      text = 'Eng';
      break;
    default:
  }

  document.getElementById('btn_lang_sys').innerHTML = text;
}

function updateQuizLangBtn() {

  var text = '';
  switch (quizLangOpt) {
    case 0:
      text = '中';
      break;
    case 1:
      text = 'Eng';
      break;
    default:
  }

  document.getElementById('btn_lang_quiz').innerHTML = text;
}

// to-do
function login() {
  var key = document.getElementById('key');
  if (key.value != '123') {
    msgAlert(getSysTranslate('alert_login'));
  }else{
    localStorage.setItem('key', key.value);
    createTeamView();
  }
  
}

function logout() {
  localStorage.clear();
  window.location.assign(window.location.href.split('?')[0]);
}

function submitTeam() {
  team = [];
  ppl = [];
  for (let i = 0; i < numOfMemEntry; i++) {
    var mem = document.getElementById('member_'+i);
    if (mem.value.length > 0) {
      team.push(mem.value);
    }
  }
  if (team.length > 0) {
    storeteam();
    getStartDate();
    dashboard();
  }else{
    msgAlert('alert_noMembers');
  }
}

function dismiss() {
  localStorage.removeItem('team');
  localStorage.removeItem('startDate');
  location.reload();
}

function initModalAlert(classification, title, body, btn, callback, btn_close) {
  var m_title = document.getElementById('alertModalLabel');
  var m_body = document.getElementById('alertModalBody');
  var m_footer = document.getElementById('alertModalFooter');

  m_title.innerHTML = '';
  m_title.innerHTML = title;

  m_body.innerHTML = '';
  m_body.innerHTML = body;

  m_footer.innerHTML = '';
  var btn_c = document.createElement('button');
  btn_c.classList.add(...['btn', 'btn-light']);
  btn_c.setAttribute('data-dismiss', 'modal');
  btn_c.innerHTML = btn_close;
  m_footer.appendChild(btn_c);

  var btn_ = document.createElement('button');
  btn_.classList.add(...['btn', classification]);
  btn_.innerHTML = btn;
  btn_.onclick = callback;
  m_footer.appendChild(btn_);
}

function popupGuard() {
  localStorage.setItem('guard', guardAttempt);

  var m_title = document.getElementById('alertModalLabel');
  var m_body = document.getElementById('alertModalBody');
  var m_footer = document.getElementById('alertModalFooter');

  m_title.innerHTML = '';
  m_title.innerHTML = getQuizTranslate('guard');

  m_body.innerHTML = '';
  var input = document.createElement('input');
  input.type = 'password';
  input.classList.add(...['form-control', 'col-12', 'text-center', 'align-self-center']);
  input.id='guard';
  input.placeholder = getSysTranslate('guard');
  input.onkeypress = function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      if (input.value != 'animo') {
        guardProcedure()
      }else{
        guardAttempt = 0;
        localStorage.removeItem('guard');
        localStorage.removeItem('lang_quiz');
        location.reload();
      }
    }
  }
  m_body.appendChild(input);

  m_footer.innerHTML = '';

}

function guardProcedure() {
  if (guardAttempt < GUARD_QUOTA) {
    guardAttempt++;
    localStorage.setItem('guard', guardAttempt);
    msgAlert(getQuizTranslate('alert_login'));
  }else{
    logout();
  }
}

function createRecord(name, number, note='') {

  if (name.length > 0) {
    var r = {
    'name': name,
    'number': number,
    'note': note,
    }
    ppl.push(r);
  }
}

function dummyPPL() {
  ppl = [];
  createRecord('ann', '123');
  createRecord('ben', '123');
  createRecord('candy', '123');
  createRecord('david', '123');
  createRecord('ann odah haou dhaoh doah odoi', '123');
  createRecord('ben', '123');
  createRecord('candy', '123');
  createRecord('david', '123');
  createRecord('ann', '123');
  createRecord('ben', '123');
  createRecord('candy', '123');
  createRecord('david', '123');

}

function copyToClipboard(rows) {

  let copy = '';
  let fheader = [startDate, team.join(', ')].join('\n');
  copy += fheader + '\n\n';

  rows.forEach(function(rowArray) {
    let row = rowArray.join(': ');
    copy += row + '\n';
  });

  var $temp = $("<textarea id='temp'>").text(copy);
  $("body").append($temp)
  $("#temp").select();
  var result = document.execCommand("copy");
  $("#temp").remove();
  // return result?"Copied to clipboard":"Clipboard failed...";

  // msgToast(getSysTranslate('success_copy'));
  popTooltip('btn_cp');
}

function tooltipable(ele, msg) {
  ele.setAttribute('title', msg);
  ele.setAttribute('data-placement', 'bottom');
  ele.setAttribute('data-trigger', 'manual');
}

function popTooltip (eid) {
  var id = '#'+eid;
  $(id).tooltip('show');
    setTimeout(function(){
        $(id).tooltip('hide');
    }, 500);
}

function downloadRecord(rows) {
  let csvContent = 'data:text/csv;charset=utf-8,';
  
  let fheader = [startDate, team.join('+')].join('_');
  csvContent += fheader + '\r\n\n';

  rows.forEach(function(rowArray) {
    let row = rowArray.join(',');
    csvContent += row + '\r\n';
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', fheader+'.csv');
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named 'my_data.csv'.
}








