function selectedLang(langOpt) {
  setLangOpt(langOpt);
  createStartPage();
}

// to-do
function login() {
  createTeamView();
}

function msgAlert(msg) {
  alert(getSysTranslate('warning') + getSysTranslate(msg));
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
    dashboard();
  }else{
    msgAlert('alert_noMembers');
  }
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
  btn_c.classList.add(...['btn', 'btn-secondary']);
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
  rows.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "my_data.csv".
}








