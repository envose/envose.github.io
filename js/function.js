  var YOUR_CLIENT_ID = '207039464470-ds863khed849svfntdjertq4bpddpqva.apps.googleusercontent.com';
  var YOUR_REDIRECT_URI = 'https://envose.github.io';

  // Function to generate a random state value
  function generateCryptoRandomState() {
    const randomValues = new Uint32Array(2);
    window.crypto.getRandomValues(randomValues);

    // Encode as UTF-8
    const utf8Encoder = new TextEncoder();
    const utf8Array = utf8Encoder.encode(
      String.fromCharCode.apply(null, randomValues)
    );

    // Base64 encode the UTF-8 data
    return btoa(String.fromCharCode.apply(null, utf8Array))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  function oauth2SignIn() {
    // create random state value and store in local storage
    var state = generateCryptoRandomState();
    localStorage.setItem('state', state);

    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': YOUR_CLIENT_ID,
                  'redirect_uri': YOUR_REDIRECT_URI,
                  'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
                  'state': state,
                  'include_granted_scopes': 'true',
                  'response_type': 'token'};

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

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
  if (key.value != 'hk321') {
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
  localStorage.removeItem('ppl');
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
  input.placeholder = getQuizTranslate('guard');
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

function createRecord(name, contact, ans=[]) {

  if (localStorage.getItem('ppl')) {
    ppl = JSON.parse(localStorage.getItem('ppl'));
  }

  if (name.length > 0) {
    var r = {
    'name': name,
    'contact': contact,
    'a1': ans[0],
    'a2': ans[1],
    'a3': ans[2],
    'a4': ans[3],
    'a5': ans[4],
    }
    ppl.push(r);
    localStorage.setItem('ppl', JSON.stringify(ppl));
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

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function checkAnswer() {
  for (let i = 1; i <= 5; i++) {
    var cid = 'q' + i + 'c1';
    if (ans[i-1] == getQuizContent(cid)) {
      corrected++;
    }else{
      incorrect.push({'q': i, 'a':ans[i-1]});
    }
  }
}

function mcqSlide(input='init') {

  // if (input != 'init') {
  //   ans.push(input);
  // }

  if (currentQ < numOfQ) {
    $('#mc_carousel').carousel(currentQ);
    currentQ++;
    setHeaderTitle('h2', getQuizTranslate('question ')+currentQ);

    var seq = ['1', '2', '3', '4'];
    shuffle(seq);

    // update btns
      for (let i = 1; i <= 4; i++) {
        var bid = 'btn_' + i;
        var cid = 'q' + currentQ + 'c' + seq[(i-1)];
        var c = getQuizContent(cid);
        var btn = document.getElementById(bid);
        btn.value = c;
        btn.innerHTML = c;
      }
  }else{
    // all questions answered!
    checkAnswer();
    createResultView();
  }
}

function selectTopic(num) {
  currentQ = num;
  createMCView();
}



function mcqNext(input='init') {

  if (input != 'init') {
    ans.push(input);
  }

  var topic = 'q'+currentQ;
  initSlideFrame(topic);
  $('#slideModal').modal('show');
}

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}

function initQuiz() {
  ans = [];
  corrected = 0;
  currentQ = 0;
  incorrect = [];
}

function resultBtnClicked(btn) {
  btn.style.display = 'none';
  console.log(btn.value);
  initSlideFrame('mo');
  $('#slideModal').modal('show');
}

function hideEle(ele) {
  ele.style.display = 'none';
}

function showEle(ele) {
  ele.style.display = 'block';
}

form.addEventListener('submit', e => {
  e.preventDefault()
  //store
  var name = document.querySelector('#finame').value;
  var contact = document.querySelector('#ficontact').value;
  if (!name) {
    name = getSysTranslate('empty');
  }
  if (!contact) {
    contact = getSysTranslate('empty');
  }
  createRecord(name, contact, ans);
  alert(getQuizTranslate('thx'));
  //reset
  form.reset();
  $('#myModal').modal('hide');
  entryView();
});


$('.modal').on('hidden.bs.modal', function(){
  if ($(this).find('form')[0]) {
    $(this).find('form')[0].reset();
  }
});




