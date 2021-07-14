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

  // var second = document.createElement('div');
  // second.classList.add('col-12');
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
  // c_div.classList.add('col-12');
  createAddEntry(c_div);
  div1.appendChild(c_div);

  content.appendChild(div1);
  content.appendChild(div2);
  // content.appendChild(c_div);

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

  // div3.appendChild(div4);
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

function dashboard() {
  initViews();

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
  // var div4 = createCustomElement('div', 'view_col5');

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

  // div3.appendChild(div4);
  footer.appendChild(div3);
}