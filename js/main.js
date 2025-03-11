var key = '';
var tab_name = 'Form responses 1';
var akey = '';
var usr = '';
var gid = '';

var dates;
var names;
var phones;

var act_key='';
var act_act='';
var act_con='';

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

  gid = localStorage.getItem('gid');

  // if (gid !== null) {
  //   alert(gid);
  // }

  if (akey === null || key === null) {
    // login
    var access_token = '';
      // Parse query string to see if page request is coming from OAuth 2.0 server.
    var fragmentString = location.hash.substring(1);
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(fragmentString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0 && params['state'] && params['access_token']) {
      access_token = params['access_token'];
    }else{
      access_token = localStorage.getItem('access_token');
    }
    if (access_token !== null) {

      // if (params['state'] == localStorage.getItem('state')) {
      //   localStorage.setItem('oauth2-test-params', JSON.stringify(params) );

      //   trySampleRequest();
      // } else {
      //   console.log('State mismatch. Possible CSRF attack');
      // }
      on();
      
      var url = GAS_URL+'?action=login&token='+access_token;
      $.getJSON(url, function(data) {

        if (data !== null) {
          if (data.status=='0') {
            window.history.pushState({}, document.title, "?");
            // localStorage.setItem('gid', data.res.id);
            // localStorage.setItem('usr', data.res.name);
            localStorage.setItem('userinfo', JSON.stringify(data.res));
            localStorage.setItem('access_token', access_token);
            createRecordView(data);
            off();
            msgToast('Envose', '08:00', '請多多得福，印花功能已開啟');
          }else{
            alert('已過期，請重新登入');
            logout();
          }
        }
      });
    }else{
      off();
      createGLoginView();
    }

    // if (urlParams.has('access_token')) {
    //   alert(urlParams.get('access_token'));
    // } else {
    //   createGLoginView();
    // }

  } else {
    // original

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
            names.push("<b>"+obj[7]+"</b><br>"+obj[10]+"<br>"+obj[9]);
            phones.push(obj.length>=9?obj[8]:'');
          }
        }
        off();
        createTableView();
      }
    });
  }





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
