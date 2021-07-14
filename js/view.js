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

  var btn_en = createCustomElement('button', 'btn_std_primary');
  btn_en.innerHTML = 'English';
  btn_en.onclick = function () { setSysLangOpt('en');createLoginView(); };
  div.appendChild(btn_en);

  var btn_zh = createCustomElement('button', 'btn_std_primary');
  btn_zh.innerHTML = '中文';
  btn_zh.onclick = function () { setSysLangOpt('zh');createLoginView(); };
  div.appendChild(btn_zh);
  
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

  // header
  setHeaderTitle('h2', getSysTranslate('form_team'));

  // footer
  var div = createCustomElement('div', 'view_content_center');

  var entry = createCustomElement('div', 'view_entry');
  var addbtn = createCustomElement('button', 'btn_free_info');
  addbtn.id = 'addbtn';
  addbtn.classList.add(...['btn', 'btn-info', 'mr-3']);
  addbtn.innerHTML = getSysTranslate('add');
  addbtn.onclick = function () { createAddEntry(c_div); };
  entry.appendChild(addbtn);

  var btn = createCustomElement('button', 'btn_free_primary');
  btn.innerHTML = getSysTranslate('confirm');
  btn.onclick = function() { submitTeam(); };
  entry.appendChild(btn);
  div.appendChild(entry);
  footer.appendChild(div);

  // content
  var c_div = createCustomElement('div', 'view_content_center');
  createAddEntry(c_div);

  content.appendChild(c_div);
}

function dashboard() {
  initViews();

  // header
  var msg = getSysTranslate('team');
  msg += team.join(', ');
  setHeaderTitle('h5', msg);

  // content
  var div = createCustomElement('div', 'view_content_center');

  var btn_en = createCustomElement('button', 'btn_std_primary');
  btn_en.innerHTML = 'English';
  btn_en.onclick = function () { setSysLangOpt('en');createLoginView(); };
  div.appendChild(btn_en);

  var btn_zh = createCustomElement('button', 'btn_std_primary');
  btn_zh.innerHTML = '中文';
  btn_zh.onclick = function () { setSysLangOpt('zh');createLoginView(); };
  div.appendChild(btn_zh);
  
  content.appendChild(div);
  
  // var div = createCustomElement('div', 'view_content_center');
  // var btn_entry = createCustomElement('btn', 'btn_std_primary');
  // btn_entry.innerHTML = getSysTranslate('entry');
  // div.appendChild(btn_entry);
  // var btn_record = createCustomElement('btn', 'btn_std_info');
  // btn_record.innerHTML = getSysTranslate('record');
  // div.appendChild(btn_record);
  // content.appendChild(div);
  // var btn_complete = createCustomElement('button', 'btn_std_danger');
  // btn_complete.classList.add('mt-5');
  // btn_complete.innerHTML = getSysTranslate('complete');
  // //btn.onclick = function() { login(); };
  // div.appendChild(btn_complete);

  // footer
}