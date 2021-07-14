function initViews() {
  header.innerHTML = '';
  content.innerHTML = '';
  footer.innerHTML = '';
}

function setHeaderTitle(ele, text) {
  var title = createCustomElement(ele, 'title');
  title.innerHTML = text;

  header.innerHTML = '';
  header.appendChild(title);
}

function createSelectSysLangView() {
  initViews();

  // header
  setHeaderTitle('h3', 'Select System Language<br><br>選擇系統語言');

  // content
  var div = createCustomElement('div', 'view_content_center');
  var div2 = createCustomElement('div', 'view_col5');

  var btn_en = createCustomElement('button', 'btn_std_primary');
  btn_en.innerHTML = 'English';
  btn_en.onclick = function () { setSysLangOpt('en');createLoginView(); };
  div2.appendChild(btn_en);

  var btn_zh = createCustomElement('button', 'btn_std_primary');
  btn_zh.innerHTML = '中文';
  btn_zh.onclick = function () { setSysLangOpt('zh');createLoginView(); };
  div2.appendChild(btn_zh);
  
  div.appendChild(div2);
  content.appendChild(div);

  // footer

}

function createLoginView() {
  initViews();

  // header
  setHeaderTitle('h2', getSysTranslate('login'));

  // content
  var div = createCustomElement('div', 'view_content_center');
  var input = document.createElement('input');
  input.type = 'password';
  input.classList.add(...['form-control', 'col-5', 'text-center', 'align-self-center', 'mt-5']);
  input.id='key';
  input.placeholder = getSysTranslate('password');
  input.style.marginBottom = '0.5rem';
  input.onkeypress = function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      // to-do
      login();
    }
  }
  div.appendChild(input);
  content.appendChild(div);

  // footer
  var div = createCustomElement('div', 'view_content_center');
  var btn = createCustomElement('button', 'btn_free_primary');
  btn.innerHTML = getSysTranslate('submit');
  btn.onclick = function() { login(); };
  div.appendChild(btn);
  footer.appendChild(div);

}

function createAddEntry(div) {

  var entry = createCustomElement('div', 'view_entry');
  var input = document.createElement('input');
  input.classList.add(...['form-control', 'col', 'text-center', 'align-self-center', 'mb-1']);
  input.id='member_'+numOfMemEntry;
  numOfMemEntry++;
  input.placeholder = getSysTranslate('member') + ' ' + numOfMemEntry;
  entry.appendChild(input);
  div.appendChild(entry);

  if (numOfMemEntry >= 3) {
    $('#addbtn').attr('disabled','disabled');
  }
}

function createTeamView() {
  initViews();
  numOfMemEntry = 0;

  // header
  setHeaderTitle('h2', getSysTranslate('form_team'));

  // content
  var div2 = document.createElement('div');
  div2.classList.add('col-12');

  var b_div = createCustomElement('div', 'view_content_center');
  var entry = createCustomElement('div', 'view_entry');
  var addbtn = createCustomElement('button', 'btn_free_info');
  addbtn.id = 'addbtn';
  addbtn.classList.add(...['btn', 'btn-info', 'mr-3']);
  addbtn.innerHTML = getSysTranslate('add');
  addbtn.onclick = function () { createAddEntry(c_div); };
  entry.appendChild(addbtn);
  b_div.appendChild(entry);

  var btn = createCustomElement('button', 'btn_free_primary');
  btn.innerHTML = getSysTranslate('confirm');
  btn.onclick = function() { submitTeam(); };
  entry.appendChild(btn);
  b_div.appendChild(entry);

  div2.appendChild(b_div);

  var div1 = document.createElement('div');
  div1.classList.add('col-12');
  var c_div = createCustomElement('div', 'view_content_center');
  createAddEntry(c_div);
  div1.appendChild(c_div);

  content.appendChild(div1);
  content.appendChild(div2);

  // footer
  var div3 = createCustomElement('div', 'view_content_center');

  var btn_exit = createCustomElement('button', 'btn_free_danger');
  btn_exit.classList.add('mt-5');
  btn_exit.innerHTML = getSysTranslate('exit');
  btn_exit.setAttribute('data-toggle', 'modal');
  btn_exit.setAttribute('data-target', '#alertModal');
  var callback = function () {
    createLoginView();
    $('#alertModal').modal('hide');
  }
  btn_exit.onclick = function() { initModalAlert('btn-danger', getSysTranslate('exit'), getSysTranslate('alert_exit'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_exit);

  footer.appendChild(div3);
}

function entryView() {
  initViews();

  // footer
  var div = createCustomElement('div', 'view_content_center');
  div.classList.add(...['mt-5', 'pt-5']);
  var btn_back = createCustomElement('button', 'btn_free_light');
  btn_back.innerHTML = getSysTranslate('back');
  btn_back.classList.add(...['mt-5', 'pt-5']);
  btn_back.onclick = function() { dashboard(); };
  div.appendChild(btn_back);
  footer.appendChild(div);

}

function recordView() {
  initViews();

  // header
  setHeaderTitle('h2', getSysTranslate('record'));

  //content
  var rows = [];

  //create table
  var div_c = document.createElement('div');
  div_c.classList.add('col-12');

  var table = createCustomElement('table', 'table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var th0 = document.createElement('th');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  // var th3 = document.createElement('th');

  th0.setAttribute('scope', 'col');
  th1.setAttribute('scope', 'col');
  th2.setAttribute('scope', 'col');
  // th3.setAttribute('scope', 'col');

  th0.innerHTML = '#';
  th1.innerHTML = getSysTranslate('name');
  th2.innerHTML = getSysTranslate('number');
  // th3.innerHTML = getSysTranslate('note');

  thead.appendChild(th0);
  thead.appendChild(th1);
  thead.appendChild(th2);
  // thead.appendChild(th3);

  table.appendChild(thead);
  table.appendChild(tbody);

  div_c.appendChild(table);
  content.appendChild(div_c);

  for (let i = 0; i < ppl.length; i++) {
    var row = [];
    row.push(ppl[i].name);
    row.push(ppl[i].number);
    rows.push(row);

    var tr = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    // var td3 = document.createElement('td');

    td0.innerHTML = i+1;
    td1.innerHTML = ppl[i].name;
    td2.innerHTML = ppl[i].number;
    // td3.innerHTML = ppl[i].note;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    // tr.appendChild(td3);
    tbody.appendChild(tr);
  }


  // footer
  // download
  var div_col12 = document.createElement(div);
  var div_center = createCustomElement('div', 'view_content_center');
  div_col12.classList.add('col-12');
  var btn = createCustomElement('button', 'btn_free_primary');
  btn.innerHTML = getSysTranslate('download');
  btn.onclick = function () { downloadRecord(rows) };
  div_center.appendChild(btn);
  div_col12.appendChild(div_center);
  footer.appendChild(div_col12);

  var div = createCustomElement('div', 'view_content_center');
  var btn_back = createCustomElement('button', 'btn_free_light');
  btn_back.innerHTML = getSysTranslate('back');
  btn_back.classList.add(...['mt-5']);
  btn_back.onclick = function() { dashboard(); };
  div.appendChild(btn_back);
  footer.appendChild(div);

}

function dashboard() {
  initViews();
  dummyPPL();

  // header
  setHeaderTitle('h1', ppl.length);

  // content
  var div = createCustomElement('div', 'view_content_center');
  var div2 = createCustomElement('div', 'view_col5');

  var msg = getSysTranslate('team');
  msg += team.join(', ');
  var h5 = createCustomElement('h5', 'title');
  h5.classList.add(...['mt-5', 'mb-3']);
  h5.innerHTML = msg;
  div.appendChild(h5);

  var btn_entry = createCustomElement('btn', 'btn_std_primary');
  btn_entry.innerHTML = getSysTranslate('entry');
  btn_entry.onclick = function() { entryView(); };
  div2.appendChild(btn_entry);

  var btn_record = createCustomElement('btn', 'btn_std_info');
  btn_record.innerHTML = getSysTranslate('record');
  btn_record.onclick = function() { recordView(); };
  div2.appendChild(btn_record);

  div.appendChild(div2);
  content.appendChild(div);

  // footer
  var div3 = createCustomElement('div', 'view_content_center');

  var btn_dismiss = createCustomElement('button', 'btn_free_danger');
  btn_dismiss.classList.add('mt-5');
  btn_dismiss.innerHTML = getSysTranslate('dismiss');
  btn_dismiss.setAttribute('data-toggle', 'modal');
  btn_dismiss.setAttribute('data-target', '#alertModal');
  var callback = function () {
    createTeamView();
    $('#alertModal').modal('hide');
  }
  btn_dismiss.onclick = function() { initModalAlert('btn-danger', getSysTranslate('dismiss'), getSysTranslate('alert_dismiss'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_dismiss);

  footer.appendChild(div3);
}