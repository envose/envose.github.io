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
  'team': 'Team: ',
  'entry': 'Entry',
  'record': 'Record',
  'complete': 'Complete', 
  'back': 'Back',
  'exit': 'Exit',
  'continue': 'Continue',
  'dismiss': 'Dismiss',
  'alert_dismiss': 'Make sure you have saved all records',
  'alert_exit': 'Are you sure you want to exit?',
  'number': 'Number',
  'note': 'Note',
  'download': 'Download',
},{
  'login': '登入',
  'password': '密碼',
  'submit': '提交',
  'form_team': '分組',
  'add': '新增',
  'confirm': '確認',
  'name': '姓名',
  'warning': '注意：',
  'alert_noMembers': '至少需要一人',
  'member': '成員',
  'team': '小組：',
  'entry': '輸入',
  'record': '記錄',
  'complete': '完成',
  'back': '返回',
  'exit': '退出',
  'continue': '繼續',
  'dismiss': '解散',
  'alert_dismiss': '請確保已儲存所有資料',
  'alert_exit': '是否確定退出？',
  'number': '號碼',
  'note': '筆記',
  'download': '下載',
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