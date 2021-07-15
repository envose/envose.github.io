function selectedLang(langOpt) {
  setLangOpt(langOpt);
  createStartPage();
}

function provideSysLangOpt(isAvailable) {
  var btn = document.getElementById('btn_lang');
  if (isAvailable) {
    btn.style.visibility = 'visible';
  }else{
    btn.style.visibility = 'hidden';
  }
}

function msgAlert(msg) {
  alert(getSysTranslate('warning') + getSysTranslate(msg));
}

function storeLangOpt() {
  if (localStorage.getItem('key')) {
    localStorage.setItem('lang_sys', sysLangOpt);
  }
  updateLangBtn();
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

function updateLangBtn() {
  var btn = document.getElementById('btn_lang');
  switch (sysLangOpt) {
    case 0:
      btn.innerHTML = '中';
      break;
    case 1:
      btn.innerHTML = 'Eng';
      break;
    default:
  }
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

function downloadRecord(rows) {
  let csvContent = "data:text/csv;charset=utf-8,";
  
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








