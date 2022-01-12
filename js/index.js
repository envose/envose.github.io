var key = '1_ax66dVkfSnPpcBW-5onFH7QRE4B5O0l5saNwI5gSSc';
var tab_name = 'Sheet1';
var akey = 'AIzaSyC6wCx5KDOBFwi9NL99dbC4GfTkXPpsXiQ';
//var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+worksheet_id+'/values/'+tab_name+'?alt=json&key='+key-value;
var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+key+'/values/'+tab_name+'?alt=json&key='+akey;
var scriptURL = 'https://script.google.com/macros/s/AKfycbzG0SggX1mdjEyahyseArxRwGGFEWxXa-ujCnjN9Q1eUdCkA1jXtETfXxsk68lsCPUL/exec';
const form = document.forms['submit-to-google-sheet'];

var cardImg = 'url(https://media.giphy.com/media/10Ua7rs9fxa8QE/giphy.gif)';
var card = document.querySelector('#datepicker-header');


var name_list = ['Envose', 'Yumi', 'Cindy'];
var today_signIn = [{
  'Envose': null,
  'Yumi': null,
  'Cindy': null
}];
var user = null;
var signInBtn = null;
var list = [];

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}

function f(v){
  return !!v;
}

function updateCard() {
  if (Object.values(today_signIn).map(f).every(f)) {
    card.style.backgroundImage = cardImg;
  }
}

function isToday(dateStr) {
  // Create date from input value
  var inputDate = dateStr.split(' ')[0];
  var d = parseInt(inputDate.split('/')[0]);
  var m = parseInt(inputDate.split('/')[1]);
  var y = parseInt(inputDate.split('/')[2]);

  // Get today's date
  var todaysDate = new Date();

  // call setHours to take the time out of the comparison
  if ((d == todaysDate.getDate()) && (m == todaysDate.getMonth()+1) && (y == todaysDate.getFullYear())) {
    // Date equals today's date
    return true;
  }else{
    return false;
  }
}

function getSignInTime(dateStr) {
  var inputTime = dateStr.split(' ')[1];
  return inputTime;
}

function signIn() {
  console.log('signin');
  // form.submit();
  document.getElementById('confirmBtn').click();
}

function createNameBtns(enable) {
  var gp = document.querySelector('#name_btn_gp');
  for (var name in name_list) {
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('mx-1');
    btn.classList.add('mx-md-2');
    btn.classList.add('my-md-5');
    btn.classList.add('btn_sign_in');
    if (user == name_list[name] && !today_signIn[user]) {
      btn.classList.add('btn-primary');
      btn.id = 'btn-confirm';
      btn.appendChild(document.createTextNode(name_list[name]));
      btn.onclick = function () {$("#mi-modal").modal('show');};
      signInBtn = btn;

      document.getElementById('myModalLabel').innerHTML = user;
      document.getElementById('fi0').setAttribute('value',user);
    }else{
      btn.disabled = true;
      btn.classList.add(user == name_list[name]?'btn-secondary':'btn-light');
      btn.appendChild(document.createTextNode(today_signIn[name_list[name]]?today_signIn[name_list[name]]:name_list[name]));
    }
    gp.appendChild(btn);
  }
}

    $("#modal-btn-si").on("click", function(){
      $("#mi-modal").modal('hide');
      signIn();
    });

$(document).ready(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });

  var currentDate = $(".datepicker").datepicker( "getDate" );
  console.log(currentDate);

  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('$k')) {
    var u = window.atob(urlParams.get('$k'));
    console.log(window.btoa('Yumi'));
    console.log(u);
    if (name_list.includes(u)) {
      user = u;
      document.getElementById('myModalLabel').innerHTML = user;
      localStorage.setItem('key', user);
    }
  }else{
    if (localStorage.getItem("key")) {
      user = localStorage.getItem("key");
    }
  }

  $.getJSON(url, function(data) {

    if (data !== null) {
      var entry = data.values.slice(1, data.values.length);
      console.log(entry);
      for (var key in entry) {
        var obj = entry[key];
        var d = obj[0];
        var u = obj[1];
        if (isToday(d)) {
          today_signIn[u] = getSignInTime(d);
        }
      }
      createNameBtns();
      updateCard();
    }
  });

});
  form.addEventListener('submit', e => {
    e.preventDefault()
      on();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
    console.log('e');
        // alert('已記錄 Recorded');
        off();
        location.reload();
        // selectStar('Envose');
        // name = document.getElementById("finame").value;
      })
      .catch(error => {
        alert('錯誤 Error\n['+ error.message + ']');
        off();
      })
      // form.reset();
      // location.reload();
  });
