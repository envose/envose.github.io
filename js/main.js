var key = '';
var tab_name = 'Form responses 1';
var akey = '';
var usr = '';

var dates;
var names;
var phones;


$(document).ready(function() {

  dates = [];
  names = [];
  phones = [];

  var login = false;

  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('$k')) {
    localStorage.setItem('$k', urlParams.get('$k'));
  }
  if (urlParams.has('$a')) {
    localStorage.setItem('$a', urlParams.get('$a'));
  }
  if (urlParams.has('$u')) {
    localStorage.setItem('$u', urlParams.get('$u'));
  }

  akey = localStorage.getItem('$a');
  key = localStorage.getItem('$k');
  //var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+worksheet_id+'/values/'+tab_name+'?alt=json&key='+key-value;
  var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+key+'/values/'+tab_name+'?alt=json&key='+akey;

  $.ajaxSetup({
    "error":function() { msgAlert('alert_login');  }
  });

  $.getJSON(url, function(data) {

    if (data !== null) {
      login = true;
      var entry = data.values.slice(1, data.values.length);
      // console.log(entry);
      var k = atob(localStorage.getItem('$u'));
      usr = k.split('. ')[1];
      // console.log(usr);
      for (key in entry) {
        var obj = entry[key];
        if (k == obj[1]) {
          dates.push(obj[0]);
          names.push(obj[4]);
          phones.push(obj.length>=6?obj[5]:'');
        }
      }
      off();
      createTableView();
    }
  });



});
/*
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
*/
