var header = document.getElementById('container_header');
var content = document.getElementById('container_content');
var footer = document.getElementById('container_footer');

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

  var btn_en = createCustomElement('button', 'btn_lang');
  btn_en.innerHTML = 'English';
  btn_en.onclick = function () { setSysLangOpt('en');createLoginView(); };
  div.appendChild(btn_en);

  var btn_zh = createCustomElement('button', 'btn_lang');
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
  var btn = createCustomElement('button', 'btn_primary');
  btn.innerHTML = getSysTranslate('submit');
  btn.onclick = function() { login(); };
  div.appendChild(btn);
  footer.appendChild(div);

}

var numOfEntry = 0;
function createAddEntry(div) {
  if (numOfEntry >= 3) {
    alert(getSysTranslate('alert_exceed_mem'));
    return;
  }

  var entry = createCustomElement('div', 'view_entry');
  var input = document.createElement('input');
  input.classList.add(...['form-control', 'col', 'text-center', 'align-self-center', 'mb-1']);
  input.id='member_'+numOfEntry;
  numOfEntry++;
  input.placeholder = getSysTranslate('name');
  entry.appendChild(input);
  div.appendChild(entry);
}

function createTeamView() {
  initViews();

  // header
  setHeaderTitle('h2', getSysTranslate('form_team'));

  // content
  var c_div = createCustomElement('div', 'view_content_center');
  createAddEntry(c_div);
  
  content.appendChild(c_div);

  // footer
  var div = createCustomElement('div', 'view_content_center');

  var entry = createCustomElement('div', 'view_entry');
  var btn = createCustomElement('button', 'btn_info');
  btn.classList.add(...['btn', 'btn-info', 'mr-3']);
  btn.innerHTML = getSysTranslate('add');
  btn.onclick = function () { createAddEntry(c_div); };
  entry.appendChild(btn);

  var btn = createCustomElement('button', 'btn_primary');
  btn.innerHTML = getSysTranslate('confirm');
  // btn.onclick = function() { login(); };
  entry.appendChild(btn);
  div.appendChild(entry);
  footer.appendChild(div);

}
