const pop = array => {
  return array.pop();
};
var enTeachings = ['As God always gives love, giving love is more blessed than receiving love.',
'When we give glory to God, that glory will be ours in the end.',
'When we look at things beautifully without hatred in our hearts, we can achieve perfect love.',
'As Abraham received more blessings when he yielded for his nephew Lot, we, too, will receive more blessings when we yield for our brothers and sisters.',
'Arrogance is feeling disappointed when our expectations are not met.',
'Although others do not work, let us work faithfully without complaining. When we work with the mindset of an owner, we can work with joy and ease.',
'Arrogance arises from a heart full of complaint. When we always serve God with gratitude, arrogance and complaint disappear, and humility will dwell in our hearts.',
'When we compliment our brothers and sisters, compliments will return to us.',
'As the sea receives all the dirt and purifies it, we should have a broad and beautiful heart to embrace the faults of our brothers and sisters.',
'Whoever wants to be led by the Lamb should become a lamb smaller than the Lamb.',
'Sacrifice is needed in the process of becoming a greater vessel.',
'We should endure present sufferings for the Kingdom of Heaven will be ours.',
'Even God came to serve, not to be served. When we serve one another without wanting to be served, God will be pleased.'];

var zhTeachings = ['如同上帝常賜予我們愛一樣，付出愛將比得到愛更有福。',
'將榮耀歸於上帝，其榮耀終歸我自己。',
'美好的心靈沒有憎惡，必成就圓滿的愛。',
'如同亞伯拉罕將好的讓給侄兒羅得後，得到更大的祝福一樣， 我們把好的讓給兄弟，就會得到更大的祝福。',
'所謂高傲的心是指易感到遺憾的心。',
'不要抱怨別人不做事，只管對自己該做的事忠心。以主人的心作工，就不會感到累反而心情愉快。',
'不滿積多會產生驕傲，常以感謝的心侍奉上帝，就會消除不滿和驕傲， 具備謙卑的心。',
'多稱讚兄弟姐妹其稱讚就返回到我這裡。',
'像大海容納一切污垢又淨化一樣， 包容所有兄弟姐妹缺點的大海般寬廣的胸懷，是真正美好的心靈。',
'願得到羔羊引導的人，要成為比羔羊還小的羊。',
'犧牲是成為大器皿所必須的過程。',
'之所以要忍耐今天的痛苦，是因為天國在我這裡。',
'上帝來到這世上不是要受人的服侍，乃是要服侍人， 不甘願受人的服侍，相互服侍的心是上帝所喜悅的。'];

// var textColors = ["rgba(239, 103, 103, 1)", "rgba(239, 191, 103, 1)", "rgba(239, 239, 103, 1)", "rgba(170, 239, 103, 1)", "rgba(103, 239, 219, 1)", "rgba(103, 191, 239, 1)", "rgba(103, 116, 239, 1)", "rgba(150, 103, 239, 1)", "rgba(225, 103, 239, 1)"];
// var colors = ["rgba(239, 103, 103, 0.85)", "rgba(239, 191, 103, 0.85)", "rgba(239, 239, 103, 0.85)", "rgba(170, 239, 103, 0.85)", "rgba(103, 239, 219, 0.85)", "rgba(103, 191, 239, 0.85)", "rgba(103, 116, 239, 0.85)", "rgba(150, 103, 239, 0.85)", "rgba(225, 103, 239, 0.85)"];

var textColors = ["rgba(239, 103, 103, 1)", "rgba(239, 191, 103, 1)", "rgba(152, 232, 150, 1)", "rgba(103, 191, 239, 1)", "rgba(103, 116, 239, 1)", "rgba(150, 103, 239, 1)", "rgba(225, 103, 239, 1)", "rgba(103, 239, 219, 1)", "rgba(239, 239, 103, 1)", "rgba(149, 194, 148, 1)", "rgba(75, 130, 74, 1)"];
var colors = ["rgba(239, 103, 103, 0.85)", "rgba(239, 191, 103, 0.85)", "rgba(152, 232, 150, 0.85)", "rgba(103, 191, 239, 0.85)", "rgba(103, 116, 239, 0.85)", "rgba(150, 103, 239, 0.85)", "rgba(225, 103, 239, 0.85)", "rgba(103, 239, 219, 0.85)", "rgba(239, 239, 103, 0.85)", "rgba(149, 194, 148, 0.85)", "rgba(75, 130, 74, 0.85)"];

var cardColor = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"];
var titles = ["禱告", "父親真理書", "講道書/影像說教（禮拜除外）", "聖經", "學習", "發表", "聽發表", "傳道", "事奉（包括探訪）", "實踐母親的教誨"];
var displayTitles = ["禱告", "父親真理書", "講道書／影像說教（ 禮拜除外 ）", "聖經", "學習", "發表", "聽發表", "傳道", "事奉（ 包括探訪 ）", "實踐母親的教誨"];
var enTitles = ["Prayer", "Father's Truth Books", "Sermon Books/ Video Sermon (exclude worship services)", "Bible", "Study", "Sermon Preaching", "Listening to Sermon Preaching", "Preaching", "Service (include Visit)", "Practice the Teachings of Mother"];
var recordError = ["必須為10的倍數，不能超過1天24小時（1440分鐘）", "Must be a multiple of 10 and cannot exceed 24 hours a day (1440 minutes) "];
var langOpt = 0;
var names = [];
var display_names = [];
var additional = false;
var dataArr = new Array(10);
var completeArr = new Array(10);
var totalArr = new Array(10);
var list = [];
var metaData = [];
var validateArr = new Array(10);
var ftitles = [];
var first = false;
var isActive = true;

var scriptURL = '';
const form = document.forms['submit-to-google-sheet'];


var enGps = ['Young Adult (Female) 4-3', 'Young Adult (Female) 4-4'];
var zhEnGps = ['壯年4組／Male Adult Group 4'];

var translate = [{
  'login':    '登入',
  'logout':   '登出',
  'password': '密碼',
  'add':      '新增', 
  'record':   '新增記錄',
  'confirm':  '確認',
  'end':      '結', 
},{
  'login':    'Login',
  'logout':   'Logout',
  'password': 'Password',
  'add':      'Add', 
  'record':   'Add a New Record',
  'confirm':  'Confirm',
  'end':      'End', 
},{
  'login':    '登入／Login',
  'logout':   '登出／Logout',
  'password': '密碼／Password',
  'add':      '新增／Add', 
  'record':   '新增記錄／Add a New Record',
  'confirm':  '確認／Confirm',
  'end':      '結', 
}];


// 'https://wallpaperaccess.com/full/1157298.png',
var bgimages=[
'https://wallpapercave.com/wp/wp6328875.jpg',
'https://image.freepik.com/free-vector/white-prism-background-design-vector_53876-86339.jpg',
'https://image.freepik.com/free-photo/background_53876-32171.jpg',
'https://image.freepik.com/free-vector/simple-pattern-white-branches-background_53876-60579.jpg',
'https://wallpaperaccess.com/full/1157298.png',
'https://i.pinimg.com/736x/88/4b/ec/884becb4540e2724d01db2b53ccdb71e.jpg'];

// 'https://media1.giphy.com/media/cJl4NoIJOc5nN7r5MA/giphy.gif',
var cardImages=[
'https://media.giphy.com/media/10Ua7rs9fxa8QE/giphy.gif',
'https://media0.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif',
'https://media.giphy.com/media/2seaKlqqoGglLcPH2Q/giphy.gif',
'https://media1.giphy.com/media/ieaUdBJJC19uw/giphy.gif',
'https://media0.giphy.com/media/knBA26sv2ueXK/giphy.gif',
'https://sgwmscog.com/wp-content/uploads/Child-light.gif'];
var completeImages = ['https://media0.giphy.com/media/5zmvqWl2HAPz47oEkG/giphy.gif',
'https://media2.giphy.com/media/SiGjBqizFrcXWk5iBb/giphy.gif',
'https://media0.giphy.com/media/87gEOGe1VT5md30Qgn/giphy.gif',
'https://media1.giphy.com/media/LZ5xZMrO7i4JH3glcj/giphy.gif',
'https://media1.giphy.com/media/pz3ZNXGgvR19V7k8Eb/giphy.gif',
'https://media2.giphy.com/media/1qgdfBl0FRZ4dM7YzU/source.gif',
'https://media3.giphy.com/media/fQMmshQtGmqXxwHoO1/giphy.gif',
'https://media0.giphy.com/media/3gWIjOpHyh066G46he/giphy.gif',
'https://media2.giphy.com/media/SHT2ELb4lvmLU9IcC1/giphy.gif',
'http://cdn.lowgif.com/full/a4e39312923151bd-.gif',];
var randomNumber = Math.floor(Math.random() * 4);
randomNumber = 4;
var applyTextWhite = [4];
var repeatBg = [1, 2, 3, 5];
var rotateCardBg = [1];

var bgImg = 'url(' + bgimages[randomNumber] + ')';
var cardImg = 'url(' + cardImages[randomNumber] + ')';
var card = document.querySelector('#card');

$('body').css({'background':bgImg, 'background-size':'cover'});
if (repeatBg.includes(randomNumber)) {
  $('body').css({'background-size':'100%', 'background-repeat': 'repeat'});
}
card.style.backgroundImage = cardImg;
if (applyTextWhite.includes(randomNumber)) {
  $('body').css({'color': 'white'});
}
// countdown
// Set the date we're counting down to
var countDownDate = new Date("May 18, 2021 23:59:59").getTime();
var countDate = new Date("Feb 7, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var distance2 = now - countDate;

  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));

  document.getElementById("days").innerHTML = days;

  // If the count down is over, do sth
  if (distance < 0) {
    isActive = false;
    enableRecord(false);
    document.getElementById("hr_record").remove();
    days = translate[langOpt].end;
    document.getElementById("days").innerHTML = days;
    clearInterval(x);
  }

}, 1000);

// get day
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var teachingIndex = day % 13;

// card title
var h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('100% Faith'));
h1.id = 'card_h1';

// Teachings of Mother
var p = document.createElement('p');
p.appendChild(document.createTextNode(enTeachings[teachingIndex]));
p.appendChild(document.createElement('br'));
p.appendChild(document.createTextNode(zhTeachings[teachingIndex]));
p.style.fontSize = "1rem";
p.id = "card_p";

var card_container = document.querySelector('#card_container');
if (rotateCardBg.includes(randomNumber)) {
  card.style.transform = 'rotate(180deg)';
  card_container.style.transform = 'rotate(180deg)';
}

card_container.appendChild(h1);
card_container.appendChild(p);

initDataArr();


// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

function initDataArr() {

  names = [];
  display_names = [];
  dataArr = new Array(10);
  completeArr = new Array(10);
  scriptURL = '';
  metaData = [];
  for (var i = 0; i < 10; i++){
    dataArr[i] = [];
    completeArr[i] = 0;
    totalArr[i] = 0;
    validateArr[i] = true;
  }
}

function initContainers() {
  var h = document.querySelector('#nameList');
  h.innerHTML = '';
  var t = document.querySelector('#title');
  t.innerHTML = '';
  for (var i = 0; i < 10; i++) {
    var str1 = '#table';
    var selector = str1.concat(i.toString());
    var column = document.querySelector(selector);

    column.innerHTML = '';
  }
}

function createAllTable() {
  for (var i = 0; i < 10; i++) {
    createTable(i);
  }
}

function createTable(index) {
  rindex = names.length*100 - dataArr[index].length;
  var str1 = '#table';
  var selector = str1.concat(index.toString());
  var column = document.querySelector(selector);
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('class', 'table table-bordered table-sm');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 100; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < names.length; j++) {
      var td = document.createElement('td');
      td.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
      if (rindex <= (i*names.length+j)){
        td.style.backgroundColor = colors[dataArr[index].pop()];
      }
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  column.appendChild(tbl);
  createColumnTitle(column, index);
  createColumnCompleteMarks(column, index);
}

function createColumnCompleteMarks(column, index) {
  var div = document.createElement('div');
  div.style.textAlign = 'center';
  div.style.marginBottom = '3rem';
  for (var i = 0; i < completeArr[index]; i++) {
    var img = document.createElement('img');
    img.src = completeImages[index];
    if (index == 9)
      img.style.width = '2.2rem';
    else
      img.style.width = '1.5rem';
    img.style.height = 'auto';
    img.style.margin = '0.5rem 0 0.5rem 0';
    img.style.maxWidth = '100%';
    div.appendChild(img);
  }
  column.appendChild(div);
}

function createColumnTitle(column, index) {
  var h6_2 = document.createElement('h6');
  var percent = Math.trunc(totalArr[index]/(names.length*100)*100);
  var str = percent + '%';
  h6_2.appendChild(document.createTextNode(str));
  h6_2.style.textAlign = "center";
  column.appendChild(h6_2);

  var h6 = document.createElement('h6');
  if (langOpt == 1) {
    h6.appendChild(document.createTextNode(enTitles[index]));
    column.classList.remove('col-2');
    column.classList.add('col-3');
  }else{
    h6.appendChild(document.createTextNode(displayTitles[index]));
    column.classList.remove('col-3');
    if (names.length < 4) {
      column.classList.add('col-2');
    }else{
      column.classList.remove('col-2');
    }
  }
  h6.style.textAlign = "center";
  column.appendChild(h6);
  if (langOpt == 2) {
    var h6 = document.createElement('h6');
    h6.appendChild(document.createTextNode(enTitles[index]));
    h6.style.textAlign = "center";
    column.appendChild(h6);
    column.classList.remove('col-2');
    column.classList.add('col-3');
  }
}

function updateNameList() {
  var div = document.querySelector('#nameList');
  for (var name in display_names) {
    var h6 = document.createElement('h6');
    h6.appendChild(document.createTextNode(display_names[name]));
    h6.style.color = textColors[name];
    div.appendChild(h6);
  }
  
  if ($('#finame option').length < 1) {
    select = document.getElementById('finame');
    // default
    var opt = document.createElement('option');
    opt.value = '';
    opt.innerHTML = ftitles[ftitles.length-1];
    select.appendChild(opt);

    for (var i = 0; i < display_names.length; i++){
        var opt = document.createElement('option');
        opt.value = display_names[i];
        opt.innerHTML = display_names[i];
        select.appendChild(opt);
    }
  }
}

function createForm(islogged) {
  var form_c = document.querySelector('#form_container');
  var form = document.querySelector('#form');

  if (islogged) {
    if (form_c.classList.contains('col-12')) {
      form_c.classList.remove('col-12');
    }
    if (!form_c.classList.contains('col-sm-2')) {
      form_c.classList.remove('col-sm-2');
      form_c.classList.add('col-sm-1');
    }

    const dd = document.querySelector('#form_logout');
    var logoutbtn = document.createElement('button');
    logoutbtn.classList.add('btn');
    logoutbtn.classList.add('btn-sm');
    logoutbtn.classList.add('btn-danger');
    logoutbtn.id = 'logoutBtn';
    logoutbtn.appendChild(document.createTextNode(translate[langOpt].logout));
    logoutbtn.onclick = function() {logout()};
    dd.appendChild(logoutbtn);

    if (isActive){
      var hr = document.createElement('hr');
      hr.id = 'hr_record';
      form.appendChild(hr);
    }
  }else{
    if (!form_c.classList.contains('col-12')) {
      form_c.classList.add('col-12');
    }
    if (form_c.classList.contains('col-sm-1')) {
      form_c.classList.remove('col-sm-1');
      form_c.classList.add('col-sm-2');
    }

    var div = document.createElement('div');
    div.classList.add('form-group');

    var input = document.createElement('input');
    input.type = 'password';
    input.classList.add('form-control');
    input.id='key';
    input.placeholder = translate[langOpt].password;
    input.style.marginBottom = '0.5rem';
    input.onkeypress = function(event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
       loadData();
     }
   };
   div.appendChild(input);

   var btn = document.createElement('button');
   btn.classList.add('btn');
   btn.classList.add('btn-primary');
   btn.onclick = function() {loadData()};
   btn.appendChild(document.createTextNode(translate[langOpt].login));
   div.appendChild(btn);

   form.appendChild(div);
 }

}

function createMenuItem(menu, item, key) {
  // var menu = document.querySelector('#menu');
  var btn = document.createElement('button');
  btn.classList.add('dropdown-item');
  btn.type = 'button';
  btn.id = key;
  btn.onclick = function() {selectGp(btn)};
  btn.appendChild(document.createTextNode(item));
  menu.appendChild(btn);
}

function createDropDown() {
  const dd = document.querySelector('#dropdown');
  var btn = document.createElement('button');
  btn.classList.add('btn');
  btn.classList.add('btn-info');
  btn.classList.add('dropdown-toggle');
  btn.type = 'button';
  btn.id = 'dropdownMenu';
  btn.setAttribute('data-toggle', 'dropdown');
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');
  btn.appendChild(document.createTextNode('區域'));
  dd.appendChild(btn);

  var div = document.createElement('div');
  div.classList.add('dropdown-menu');
  div.setAttribute('aria-labelledby', 'dropdownMenu');
  div.id = 'menu';
  dd.appendChild(div);

  for (var item in list) {
    var obj = list[item];
    createMenuItem(div, obj.gsx$group.$t, obj.gsx$key.$t);
  }

  var logoutbtn = document.createElement('button');
  logoutbtn.classList.add('btn');
  logoutbtn.classList.add('btn-danger');
  logoutbtn.style.marginLeft = '0.5rem';
  logoutbtn.appendChild(document.createTextNode('登出'));
  logoutbtn.onclick = function() {logout()};
  dd.appendChild(logoutbtn);
}

function selectGp(btn) {
  var menuBtn = document.querySelector('#dropdownMenu');
  menuBtn.innerHTML = btn.innerHTML;
  getMetaData(btn.id);
}

function getMetaData(key) {
  filtered = list.filter(function(el) {
    return el.gsx$key.$t === key;
  });
  metaData = filtered[0];
  parseData(metaData);
}

function enableRecord(enable) {
  var record = document.querySelector('#record');
  var mTitle = document.querySelector('#modalTitle');
  var cBtn = document.querySelector('#confirmBtn');

  record.style.display ='none';

  if (enable && isActive) {
    record.style.display = 'block';
    record.appendChild(document.createTextNode(translate[langOpt].add));
    mTitle.appendChild(document.createTextNode(translate[langOpt].record));
    cBtn.appendChild(document.createTextNode(translate[langOpt].confirm));
  }
}

function updateFormTitles(obj) {
  ftitles.push(obj.gsx$prayer.$t);
  ftitles.push(obj.gsx$truth.$t);
  ftitles.push(obj.gsx$sermon.$t);
  ftitles.push(obj.gsx$bible.$t);
  ftitles.push(obj.gsx$study.$t);
  ftitles.push(obj.gsx$sermonpreach.$t);
  ftitles.push(obj.gsx$listen.$t);
  ftitles.push(obj.gsx$preaching.$t);
  ftitles.push(obj.gsx$service.$t);
  ftitles.push(obj.gsx$mother.$t);
  ftitles.push(obj.gsx$name.$t);
  
  // update record form text
  document.querySelector('#finame').placeholder = ftitles[ftitles.length-1];
  document.querySelector('#liname').appendChild(document.createTextNode(ftitles[ftitles.length-1]));
  var str1 = '#fi';
  var str2 = '#li';
  for (var i = 0; i < 10; i++) {
    var parts = ftitles[i].split('. ');
    var selector = str1.concat(i.toString());
    document.querySelector(selector).placeholder = parts[1];
    if (langOpt < 2) {
      $(selector).attr('data-original-title',recordError[langOpt]);
    }else{
      $(selector).attr('data-original-title',recordError[0]+'\n'+recordError[1]);
    }
    

    selector = str2.concat(i.toString());
    document.querySelector(selector).appendChild(document.createTextNode(ftitles[i]));
  }

}

function loadData() {
  var key = document.getElementById('key').value;
  localStorage.setItem('key', key);
  location.reload();
}

window.onload = function() {

  enableRecord(false);
  first = true;

  const key = '1JdbPseFBz9jUJiSDkg5zUnHe4noeag6HuJHnQoqXYJs/od6';
  const url = 'https://spreadsheets.google.com/feeds/list/'.concat(key).concat('/public/values?alt=json');

  $.getJSON(url, function(data) {

    if (data !== null) {
      for (var key in data.feed.entry) {
        var obj = data.feed.entry[key];
        if (obj.gsx$key.$t) {
          list.push(obj);
        }
      }
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('$k')) {
        localStorage.setItem('key', urlParams.get('$k'));
      }

      var key = localStorage.getItem("key");
      if (key === 'jackshin') {
        createDropDown();
      }else {
        if (key) {
          createForm(true);
          getMetaData(key);
          enableRecord(true);
        }else{
          createForm(false);
        }
      }
    }
  });

}

function translateAll () {
  var l = document.getElementById('logoutBtn').firstChild;
  l.nodeValue = translate[langOpt].logout;

  var r = document.getElementById('record').firstChild;
  if (r.nodeValue) {
    r.nodeValue = translate[langOpt].add;
  }

  var m = document.getElementById('modalTitle').firstChild;
  m.nodeValue = translate[langOpt].record;

  var c = document.getElementById('confirmBtn').firstChild;
  c.nodeValue = translate[langOpt].confirm;
}

function parseData (meta) {
  initDataArr();
  initContainers();
  var url = 'https://spreadsheets.google.com/feeds/list/'.concat(meta.gsx$key.$t).concat('/public/values?alt=json');

  var success = false;
  $.getJSON(url, function(data) {
    success = true;
    if (data !== null) {
      var entry = data.feed.entry;
      var lastUpdateDate;

      var titleDiv = document.querySelector('#title');
      var h3 = document.createElement('h3');

      langOpt = 0;
      if (enGps.includes(meta.gsx$group.$t)) {
        langOpt = 1;
      }
      if (zhEnGps.includes(meta.gsx$group.$t)) {
        langOpt = 2;
      }
      h3.appendChild(document.createTextNode(meta.gsx$group.$t));
      titleDiv.appendChild(h3);

      scriptURL = meta.gsx$api.$t;

      var i = 0;
      var additional = false;
      var here_first = true;
      for (var key in data.feed.entry) {
        var obj = data.feed.entry[key];
        if (first) {
          updateFormTitles(obj);
          first = false;
          here_first = false;
          continue;
        }else if (here_first) {
          here_first = false;
          continue;
        }
        lastUpdateDate = parseDate(obj.gsx$timestamp.$t);
        var name = obj.gsx$name.$t;
          if (name && i<10) {
            if (!names.includes(name)) {
              if (!additional)
                names.push(name);
              display_names.push(name);
            }else{
              additional = true;
            }
            if (i < 10) {
              i++;
            }
          }
          getEntry(obj);
      }
      if (lastUpdateDate) {
        var lastUpdateStr = lastUpdateDate.toLocaleDateString().concat(" ".concat(lastUpdateDate.toLocaleTimeString()));
        updateLastUpdate(lastUpdateStr);
      }
      updateNameList();
      createAllTable();
      translateAll();
    }else{
      logout();
    }

  });
  // handle wrong key
  const timeout = setTimeout(function() {
    if (!success){
            // Handle error accordingly
            alert("密碼錯誤\nWrong Password");
            logout();
          }
        }, 10000);
}

function getEntry (obj) {
  var type;
  var units;
  var name = obj.gsx$name.$t;
  var num = display_names.indexOf(name);
  if (obj.gsx$prayer.$t){
    updateDataArr(0, parseInt(obj.gsx$prayer.$t)/10, num);
  }

  if (obj.gsx$truth.$t){
    updateDataArr(1, parseInt(obj.gsx$truth.$t)/10, num);
  }

  if (obj.gsx$sermon.$t){
    updateDataArr(2, parseInt(obj.gsx$sermon.$t)/10, num);
  }

  if (obj.gsx$bible.$t){
    updateDataArr(3, parseInt(obj.gsx$bible.$t)/10, num);
  }

  if (obj.gsx$study.$t){
    updateDataArr(4, parseInt(obj.gsx$study.$t)/10, num);
  }

  if (obj.gsx$sermonpreach.$t){
    updateDataArr(5, parseInt(obj.gsx$sermonpreach.$t)/10, num);
  }

  if (obj.gsx$listen.$t){
    updateDataArr(6, parseInt(obj.gsx$listen.$t)/10, num);
  }

  if (obj.gsx$preaching.$t){
    updateDataArr(7, parseInt(obj.gsx$preaching.$t)/10, num);
  }

  if (obj.gsx$service.$t){
    updateDataArr(8, parseInt(obj.gsx$service.$t)/10, num);
  }

  if (obj.gsx$mother.$t){
    updateDataArr(9, parseInt(obj.gsx$mother.$t)/10, num);
  }
}

function parseDate(dateString) { 
  var parts = dateString.split(' ');
  var dateParts = parts[0].split('/');
  var timeParts = parts[1].split(':');
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]); 
  return dateObject;

}

function updateLastUpdate (lastUpdateStr) {
  var titleDiv = document.querySelector('#title');
  var p = document.createElement('p');
  p.appendChild(document.createTextNode(lastUpdateStr));
  titleDiv.appendChild(p);


  var hr = document.createElement('hr');
  titleDiv.appendChild(hr);
}

function updateDataArr(type, units, num) {
  for (var i = 0; i < units; i++) {
    dataArr[type].push(num);
    totalArr[type]++;
    if (dataArr[type].length >= names.length*100) {
      dataArr[type] = [];
      completeArr[type]++;
    }
  }
}

function logout () {
  localStorage.clear();
  window.location.assign(window.location.href.split('?')[0]);
}

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}

function checkValidate() {
  for (var i = 0; i < 10; i++) {
    if (!validateArr[i]) {
      return false;
    }
  }
  return true;
}


function validate(index) {
  var selector = '#fi'.concat(index.toString());
  const num = document.querySelector(selector).value;
  if (num%10 != 0 || num < 0 || num > 1440) {
    validateArr[0] = false;
    $(selector).tooltip('show');
  }else{
    $(selector).tooltip('hide');
    validateArr[0] = true;
  }
}

for (let i = 0; i < 10; i++) {
  let selector = '#fi'.concat(i.toString());
  $(selector).tooltip({trigger: 'manual'});
  $(selector).on('change', function() {
    validate(i);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault()
  if (checkValidate() && isActive) {
    on();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // alert('已記錄 Recorded');
      off();
      getMetaData(localStorage.getItem("key"));
    })
    .catch(error => {
      alert('錯誤 Error\n['+ error.message + ']');
      off();
    })
    form.reset();
    $('#myModal').modal('hide');
  }
})

$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});