function createTableView() {
  initViews();

  // header
  setHeaderTitle('h2',usr);

  //content
  var rows = [];

  //create table
  var div_c = createCustomElement('div', 'col_12');

  var table = createCustomElement('table', 'table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var th0 = document.createElement('th');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  var th3 = document.createElement('th');
  // var th4 = document.createElement('th');

  th0.setAttribute('scope', 'col');
  th1.setAttribute('scope', 'col');
  th2.setAttribute('scope', 'col');
  th3.setAttribute('scope', 'col');
  // th4.setAttribute('scope', 'col');

  th0.innerHTML = '#';
  th1.innerHTML = getSysTranslate('record');
  th2.innerHTML = getSysTranslate('name');
  th3.innerHTML = getSysTranslate('contact');
  // th4.innerHTML = getSysTranslate('topic');

  thead.appendChild(th0);
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  // thead.appendChild(th4);

  table.appendChild(thead);
  table.appendChild(tbody);

  div_c.appendChild(table);
  content.appendChild(div_c);

  for (let i = dates.length-1; i >= 0; i--) {
    /*
    var row = [];
    row.push(dates.length-i+1);
    row.push(dates[i]);
    row.push(names[i]);
    row.push(phones[i]);
    rows.push(row);
    */

    var tr = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    // var td4 = document.createElement('td');

    td0.innerHTML = i+1;
    td1.innerHTML = dates[i];
    td2.innerHTML = names[i];
    td3.innerHTML = phones[i];
    // td4.innerHTML = topics[i];

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tr.appendChild(td4);
    tbody.appendChild(tr);
  }


  // footer
  var div3 = createCustomElement('div', 'view_content_center');

  var btn_exit = createCustomElement('button', 'btn_free_danger');
  btn_exit.classList.add('mt-5');
  btn_exit.innerHTML = getSysTranslate('exit');
  btn_exit.setAttribute('data-toggle', 'modal');
  btn_exit.setAttribute('data-target', '#alertModal');
  var callback = function () {
    logout();
  }
  btn_exit.onclick = function() { initModalAlert('btn-danger', getSysTranslate('exit'), getSysTranslate('alert_exit'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_exit);

  footer.appendChild(div3);
  
}

function createGLoginView() {
  initViews();

  setHeaderTitle('h2', getSysTranslate('  '));

  // var div_c = createCustomElement('div','d-grid gap-2 col-6 mx-auto');
  // content.appendChild(div_c);

  // var btn_glogin = createCustomElement('button', 'btn btn-primary');
  // btn_glogin.innerHTML = getSysTranslate('Login with Google');
  // div_c.appendChild(btn_glogin);
  var div = createCustomElement('div', 'view_content_center');
  div.id='signin';
  var div2 = createCustomElement('form', 'form-signin');

  
  // <img class="mb-4" src="https://envose.github.io/ruby-gemstone.png" alt="" width="72" height="72">


  var div3 = createCustomElement('div', 'text-center mb-12');

  var img = document.createElement('img');
  img.classList.add('mb-4');
  img.src = 'https://envose.github.io/ruby-gemstone.png';
  img.width = '72';
  img.height = '72';
  div3.appendChild(img);
  div2.appendChild(div3);

  // var msg = getSysTranslate('Please Login');
  // msg += team.join(', ');
  // // <h1 class="h3 mb-3 font-weight-normal">Shepherds</h1>
  // var h1 = createCustomElement('h5', 'h3 mb-3 font-weight-normal');
  // h1.innerHTML = '錫安的星辰';
  // div3.appendChild(h1);

  var btn_glogin = createCustomElement('btn', 'btn_std_primary');
  btn_glogin.innerHTML = getSysTranslate(' Login with Google');
  btn_glogin.onclick = function() { oauth2SignIn(); };
  div2.appendChild(btn_glogin);

  // var btn_record = createCustomElement('btn', 'btn_std_info');
  // btn_record.innerHTML = getSysTranslate('record');
  // btn_record.onclick = function() { recordView(); };
  // div2.appendChild(btn_record);

  div.appendChild(div2);
  content.appendChild(div);

  // alert('abc');
}

function dashboard() {
  initViews();
  provideSysLangOpt(true);
  provideQuizLangOpt(false);
  if (localStorage.getItem('ppl')) {
    ppl = JSON.parse(localStorage.getItem('ppl'));
  }

  // header
  // setHeaderTitle('h1', ppl.length);
  var title = createCustomElement('h1', 'title');
  title.classList.add('display-1');
  title.innerHTML = ppl.length;
  header.appendChild(title);

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
    dismiss();
  }
  btn_dismiss.onclick = function() { initModalAlert('btn-danger', getSysTranslate('dismiss'), getSysTranslate('alert_dismiss'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_dismiss);

  footer.appendChild(div3);
}

function initViews() {
  header.innerHTML = '';
  content.innerHTML = '';
  footer.innerHTML = '';
  document.getElementById('mcq_view').style.background = '';
  document.getElementById('mcq_view').style.display = 'none';

  header.style.background = '';
  document.getElementById('topbar').style.background = '';
}

function setHeaderTitle(ele, text) {
  header.innerHTML = '';

  var title = createCustomElement(ele, 'title');
  title.innerHTML = text;
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
  provideSysLangOpt(true);
  provideQuizLangOpt(false);

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
  provideSysLangOpt(true);
  provideQuizLangOpt(false);
  numOfMemEntry = 0;

  // header
  setHeaderTitle('h2', getSysTranslate('form_team'));

  // content
  var div2 = createCustomElement('div', 'col_12');

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

  var div1 = createCustomElement('div', 'col_12');
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
    logout();
  }
  btn_exit.onclick = function() { initModalAlert('btn-danger', getSysTranslate('exit'), getSysTranslate('alert_exit'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_exit);

  footer.appendChild(div3);
}

function createMCView() {
  initViews();
  provideSysLangOpt(false);
  provideQuizLangOpt(false);
  storeQuizLangOpt();

  // header
  // setHeaderTitle('h2', getSysTranslate('Question 1'));
  header.style.background = mcqBGColor;
  document.getElementById('topbar').style.background = mcqBGColor;

  // content
  document.getElementById('mcq_view').style.background = mcqBGColor;
  document.getElementById('mcq_view').style.display = 'block';

  var mc_ol = document.getElementById('mc_ol');
  mc_ol.innerHTML = '';

  var mc_inner = document.getElementById('mc_inner');
  mc_inner.innerHTML = '';

  for (let i = 0; i < numOfQ; i++) {
    // <li data-target="#mc_carousel" data-slide-to="0" class="active"></li>
    var li = document.createElement('li');
    li.setAttribute('data-target', '#mc_carousel');
    li.setAttribute('data-slide-to', i.toString());

          // <div class="carousel-item active">
          //   <img class="d-block w-100" src="assets/mo_4.png" alt="First slide">
          //   <div class="carousel-caption">
          //     <h5 style="color: black">Whose birthday is Dec 25, X'mas?</h5>
          //   </div>
          // </div>
    var div_c1 = document.createElement('div');
    div_c1.classList.add(...['carousel-item']);

    var img = document.createElement('img');
    img.classList.add(...['d-block', 'w-100']);
    img.src = 'assets/q' + (i+1).toString() + '.png';
    div_c1.appendChild(img);

    var div_c2 = document.createElement('div');
    div_c2.classList.add('carousel-caption');
    var h5 = document.createElement('h5');
    h5.style.color = mcqColor;
    h5.innerHTML = getQuizContent('q'+ (i+1).toString());
    div_c2.appendChild(h5);
    div_c1.appendChild(div_c2);

    if (i == currentQ) {
      li.classList.add('active');
      div_c1.classList.add('active');
    }

    mc_ol.appendChild(li);
    mc_inner.appendChild(div_c1);
  }

  // footer
  // var div_col12 = createCustomElement('div', 'col_12');
  var div_center = createCustomElement('div', 'view_content_center');
  // var entry = createCustomElement('div', 'view_entry');
  div_center.classList.add(...['mx-5']);

  // btn A
  var btn_1 = createCustomElement('button', 'btn_free_primary');
  // btn_1.classList.add(['mr-3']);
  btn_1.classList.add(...['mb-1', 'btn-block', 'fadein_1s']);
  btn_1.innerHTML = getQuizContent('q1c1');
  btn_1.value = getQuizContent('q1c1');
  btn_1.id = 'btn_1';
  btn_1.onclick = function () { mcqNext(btn_1.value) };
  // entry.appendChild(btn_1);
  div_center.appendChild(btn_1);

  // btn B
  var btn_2 = createCustomElement('button', 'btn_free_primary');
  btn_2.classList.add(...['mb-1', 'btn-block', 'fadein_1s']);
  btn_2.innerHTML = getQuizContent('q1c2');
  btn_2.value = getQuizContent('q1c2');
  btn_2.id = 'btn_2';
  // btn_cp.onclick = function () { copyToClipboard(rows) };
  btn_2.onclick = function () { mcqNext(btn_2.value) };
  // entry.appendChild(btn_2);
  div_center.appendChild(btn_2);

  // div_center.appendChild(entry);
  // div_col12.appendChild(div_center);
  // footer.appendChild(div_col12);


  // var div_col12_2 = createCustomElement('div', 'col_12');
  // var div_center_2 = createCustomElement('div', 'view_content_center');
  // var entry2 = createCustomElement('div', 'view_entry');

  // btn C
  var btn_3 = createCustomElement('button', 'btn_free_primary');
  // btn_3.classList.add(['mr-3']);
  btn_3.classList.add(...['mb-1', 'btn-block', 'fadein_1s']);
  btn_3.innerHTML = getQuizContent('q1c3');
  btn_3.value = getQuizContent('q1c3');
  btn_3.id = 'btn_3';
  btn_3.onclick = function () { mcqNext(btn_3.value) };
  // entry2.appendChild(btn_3);
  div_center.appendChild(btn_3);

  // btn D
  var btn_4 = createCustomElement('button', 'btn_free_primary');
  btn_4.classList.add(...['mb-1', 'btn-block', 'fadein_1s']);
  btn_4.innerHTML = getQuizContent('q1c4');
  btn_4.value = getQuizContent('q1c4');
  btn_4.id = 'btn_4';
  // btn_cp.onclick = function () { copyToClipboard(rows) };
  btn_4.onclick = function () { mcqNext(btn_4.value) };
  // entry2.appendChild(btn_4);
  div_center.appendChild(btn_4);

  // div_center.appendChild(entry2);
  // div_col12_2.appendChild(div_center_2);
  // footer.appendChild(div_col12_2);
  footer.appendChild(div_center);

  // default q1
  mcqSlide();
}

function createResultView() {
  initViews();
  provideSysLangOpt(false);
  provideQuizLangOpt(false);

  console.log(incorrect);

  // header
  setHeaderTitle('h2', getQuizTranslate('thx'));


  var div_center = createCustomElement('div', 'view_content_center');
  div_center.classList.add(...['mx-5']);

  for (let i = 0; i < incorrect.length; i++) {
    var btn = createCustomElement('button', 'btn_free_success');
    btn.classList.add(...['my-2', 'btn-block', 'fadein_1s']);
    btn.innerHTML = incorrect[i].q;
    btn.value = incorrect[i].q;
    btn.onclick = function () { resultBtnClicked(this); };
    div_center.appendChild(btn);
  }
  content.appendChild(div_center);

}

function createSurveyView() {
  initViews();
  provideSysLangOpt(false);
  provideQuizLangOpt(false);

  console.log(incorrect);

  var mTitle = document.querySelector('#modalTitle');
  var cBtn = document.querySelector('#confirmBtn');

  mTitle.innerHTML = '';
  cBtn.innerHTML = '';

  mTitle.appendChild(document.createTextNode(getQuizTranslate('thx')));
  cBtn.appendChild(document.createTextNode(getQuizTranslate('complete')));

  var result = document.getElementById('result');

  result.innerHTML = '';

  // for (let i = 0; i < incorrect.length; i++) {
  //   var qid = 'q' + incorrect[i].q;
  //   var q = getQuizContent(qid);
  //   var corr = getQuizContent(qid + 'c1');

  //   var h5 = document.createElement('h5');
  //   h5.classList.add('fadein_1s');
  //   h5.innerHTML = '<b>' + q + '</b>';

  //   h5.innerHTML += '<p class="text-success">' + getQuizTranslate('ans') + corr + '</p>';
  //   result.appendChild(h5);

  // }

  document.querySelector('#liname').innerHTML = '';
  document.querySelector('#licontact').innerHTML = '';

  document.querySelector('#finame').placeholder = getQuizTranslate('name');
  document.querySelector('#liname').appendChild(document.createTextNode(getQuizTranslate('name')));
  document.querySelector('#ficontact').placeholder = getQuizTranslate('contact');
  document.querySelector('#licontact').appendChild(document.createTextNode(getQuizTranslate('contact')));

  $('#myModal').modal({backdrop: 'static', keyboard: false});
}

function entryView() {
  initViews();
  provideSysLangOpt(false);
  provideQuizLangOpt(true);
  storeQuizLangOpt();

  initQuiz();

  // header
  setHeaderTitle('h3', getQuizTranslate('quiz_title'));

  // content
  var div2 = createCustomElement('div', 'col_12');
  var b_div = createCustomElement('div', 'view_content_center');
  // var entry1 = createCustomElement('div', 'view_entry');
  // entry1.classList.add('mx-2');
  // entry1.innerHTML = getQuizTranslate('quiz_desc');
  // b_div.appendChild(entry1);
  var div_inn = document.createElement('div');
  div_inn.classList.add('col-10');
  var btn1 = createCustomElement('button', 'btn_std_info');
  btn1.innerHTML = getQuizContent('q1');
  btn1.onclick = function() { selectTopic(0);};
  div_inn.append(btn1);
  var btn2 = createCustomElement('button', 'btn_std_info');
  btn2.innerHTML = getQuizContent('q2');
  btn2.onclick = function() { selectTopic(1);};
  div_inn.append(btn2);
  var btn3 = createCustomElement('button', 'btn_std_info');
  btn3.innerHTML = getQuizContent('q3');
  btn3.onclick = function() { selectTopic(2);};
  div_inn.append(btn3);
  var btn4 = createCustomElement('button', 'btn_std_info');
  btn4.innerHTML = getQuizContent('q4');
  btn4.onclick = function() { selectTopic(3);};
  div_inn.append(btn4);
  var btn5 = createCustomElement('button', 'btn_std_info');
  btn5.innerHTML = getQuizContent('q5');
  btn5.onclick = function() { selectTopic(4);};
  div_inn.append(btn5);
  b_div.appendChild(div_inn);
  div2.appendChild(b_div);
  content.appendChild(div2);

  //footer
  var div = createCustomElement('div', 'col_12');
  var div_1 = document.createElement('div');
  div_1.classList.add(...['d-flex', 'flex-column', 'justify-content-between', 'mt-5', 'mx-5']);

  var btn_back = createCustomElement('button', 'btn_free_light');
  btn_back.innerHTML = getQuizTranslate('back');
  btn_back.setAttribute('data-toggle', 'modal');
  btn_back.setAttribute('data-target', '#alertModal');
  btn_back.onclick = function() { popupGuard(); };
  div_1.appendChild(btn_back);

  /*
  var btn_s = createCustomElement('button', 'btn_free_primary');
  btn_s.classList.add('mt-lg-5');
  btn_s.innerHTML = getQuizTranslate('start');
  btn_s.onclick = function () { createMCView(); };
  div_1.appendChild(btn_s);
  */

  div.appendChild(div_1);
  footer.appendChild(div);

}

function recordView() {
  initViews();
  provideSysLangOpt(false);
  provideQuizLangOpt(false);

  // header
  setHeaderTitle('h2', getSysTranslate('record'));

  //content
  var rows = [];

  //create table
  var div_c = createCustomElement('div', 'col_12');

  var table = createCustomElement('table', 'table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var th0 = document.createElement('th');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  var th3 = document.createElement('th');

  th0.setAttribute('scope', 'col');
  th1.setAttribute('scope', 'col');
  th2.setAttribute('scope', 'col');
  th3.setAttribute('scope', 'col');

  th0.innerHTML = '#';
  th1.innerHTML = getSysTranslate('name');
  th2.innerHTML = getSysTranslate('contact');
  th3.innerHTML = getSysTranslate('ans');

  thead.appendChild(th0);
  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);

  table.appendChild(thead);
  table.appendChild(tbody);

  div_c.appendChild(table);
  content.appendChild(div_c);
  console.log(ppl);

  for (let i = 0; i < ppl.length; i++) {
    var row = [];
    row.push(i+1);
    row.push(ppl[i].name);
    row.push(ppl[i].contact);
    row.push(ppl[i].a1);
    rows.push(row);

    var tr = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td0.innerHTML = i+1;
    td1.innerHTML = ppl[i].name;
    td2.innerHTML = ppl[i].contact;
    td3.innerHTML = ppl[i].a1;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }


  // footer
  var div_col12 = createCustomElement('div', 'col_12');
  var div_center = createCustomElement('div', 'view_content_center');
  var entry = createCustomElement('div', 'view_entry');

  var btn_back = createCustomElement('button', 'btn_free_light');
  btn_back.classList.add(...['mr-md-5', 'mr-3']);
  btn_back.innerHTML = getSysTranslate('back');  btn_back.onclick = function() { dashboard(); };
  entry.appendChild(btn_back);

  // download
  var btn_dl = createCustomElement('button', 'btn_free_primary');
  btn_dl.classList.add('mr-3');
  btn_dl.innerHTML = getSysTranslate('download');
  btn_dl.onclick = function () { downloadRecord(rows) };
  entry.appendChild(btn_dl);

  // copy to clipboard
  var btn_cp = createCustomElement('button', 'btn_free_primary');
  btn_cp.innerHTML = getSysTranslate('copy');
  btn_cp.id = 'btn_cp';
  tooltipable(btn_cp, getSysTranslate('success_copy'));
  btn_cp.onclick = function () { copyToClipboard(rows) };
  entry.appendChild(btn_cp);

  div_center.appendChild(entry);
  div_col12.appendChild(div_center);
  footer.appendChild(div_col12);
}

function dashboard() {
  initViews();
  provideSysLangOpt(true);
  provideQuizLangOpt(false);
  if (localStorage.getItem('ppl')) {
    ppl = JSON.parse(localStorage.getItem('ppl'));
  }

  // header
  // setHeaderTitle('h1', ppl.length);
  var title = createCustomElement('h1', 'title');
  title.classList.add('display-1');
  title.innerHTML = ppl.length;
  header.appendChild(title);

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
    dismiss();
  }
  btn_dismiss.onclick = function() { initModalAlert('btn-danger', getSysTranslate('dismiss'), getSysTranslate('alert_dismiss'), getSysTranslate('continue'), callback, getSysTranslate('back')); };
  div3.appendChild(btn_dismiss);

  footer.appendChild(div3);
}
