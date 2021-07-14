var strings = [{
  'login': 'Login',
  'password': 'Password',
  'submit': 'Submit',
  'form_team': 'Form a Team',
  'add': 'Add',
  'confirm': 'Confirm',
  'name': 'Name',
  'warning': 'Warning: ',
  'alert_noMembers': 'Require at least 1 person',
  'member': 'Member',
  'greeting': 'Hello! ',
  ',': ', ',
  'and': 'and',
},{
  'login': '登入',
  'password': '密碼',
  'submit': '提交',
  'form_team': '組成隊伍',
  'add': '新增',
  'confirm': '確認',
  'name': '姓名',
  'warning': '注意：',
  'alert_noMembers': '至少需要一人',
  'member': '成員',
  'greeting': '你好！',
  ',': '，',
  'and': '和',
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