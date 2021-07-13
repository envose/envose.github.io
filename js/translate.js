var strings = [{
  'login': 'Login',
  'password': 'Password',
  'submit': 'Submit',
  'form_team': 'Form a Team',
  'add': 'Add',
  'confirm': 'Confirm',
  'name': 'Name',
  'alert_exceed_mem': 'No more than 3 members in a team.',
},{
  'login': '登入',
  'password': '密碼',
  'submit': '提交',
  'form_team': '組成隊伍',
  'add': '新增',
  'confirm': '確認',
  'name': '姓名',
  'alert_exceed_mem': '不可多於3人一組。',
}];

var sysLangOpt = 0;
var quizLangOpt = 0;

function getSysTranslate(key) {
  if (key in strings[sysLangOpt]) {
    return strings[sysLangOpt][key];
  }else{
    return key;
  }
}

function getQuizTranslate(key) {
  if (key in strings[quizLangOpt]) {
    return strings[quizLangOpt][key];
  }else{
    return key;
  }
}

function setSysLangOpt(opt) {
  switch (opt){
  	case 'en':
  	  sysLangOpt = 0;
  	  break;
  	case 'zh':
  	  sysLangOpt = 1;
  	  break;
    default:
      // code block
  }
}

function setQuizLangOpt(opt) {
  switch (opt){
    case 'en':
      quizLangOpt = 0;
      break;
    case 'zh':
      quizLangOpt = 1;
      break;
    default:
      // code block
  }
}