var mcq = [{
  'q1': 'Whose birthday is Dec 25, X\'mas?',
  'q2': 'What day of the week should we worship God?',
  'q3': 'How many Gods are testified by the Bible?',
  'q4': 'When should we have the Holy Supper?',
  'q5': 'What is the true meaning of the Passover?',
  'q1c1': 'Sun God',
  'q1c2': 'Jesus',
  'q1c3': 'Santa Claus',
  'q1c4': 'Buddha',
},{
  'q1': '12月25日聖誕節是誰的生日？',
  'q2': '應該在星期幾去教會做禮拜？',
  'q3': '聖經見證的上帝有幾多位？',
  'q4': '應該在甚麼時候舉行聖餐？',
  'q5': '逾越節真正的意義是甚麼？',
  'q1c1': '太陽神',
  'q1c2': '耶穌',
  'q1c3': '聖誕老人',
  'q1c4': '佛陀',
}];

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
  'alert_login': 'Incorrect Password!',
  'copy': 'Copy',
  'success_copy': 'Copied',
  'quiz_title': 'How well you know<br>about the Bible',
  'quiz_desc': 'Here are 5 MC questions.<br><br>1. ' + mcq[0].q1 + '<br>2. ' + mcq[0].q2 + '<br>3. ' + mcq[0].q3 + '<br>4. ' + mcq[0].q4 + '<br>5. ' + mcq[0].q5,
  // 'quiz_desc': 'Here are 5 MC questions.<br><br>1. Whose birthday is Dec 25, X\'mas?<br>2. What day of the week should we worship God?<br>3. How many Gods are testified by the Bible?<br>4. When should we have the Holy Supper?<br>5. What is the true meaning of the Passover?',
  'guard': 'Security Code',
  'question ': 'Question ',
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
  'alert_login': '密碼錯誤！',
  'copy': '複製',
  'success_copy': '已複製',
  'quiz_title': '聖經知多少',
  'quiz_desc': '這裏有5條MC題。<br><br>1. ' + mcq[1].q1 + '<br>2. ' + mcq[1].q2 + '<br>3. ' + mcq[1].q3 + '<br>4. ' + mcq[1].q4 + '<br>5. ' + mcq[1].q5,
  'start': '開始',
  'guard': '安全密碼',
  'question ': '問題 ',
}];

var sysLangOpt = 1;
var quizLangOpt = 1;

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

function getQuizContent(key) {
  if (key in mcq[quizLangOpt]) {
    return mcq[quizLangOpt][key];
  }else{
    return key;
  }
}

function setSysLangOpt(opt) {
  switch (opt) {
    case 0:
      sysLangOpt = 0;
      break;
    case 1:
      sysLangOpt = 1;
      break;
    case 'en':
      sysLangOpt = 0;
      break;
    case 'zh':
      sysLangOpt = 1;
      break;
    case '0':
      sysLangOpt = 0;
      break;
    case '1':
      sysLangOpt = 1;
      break;
    default:
      // code block
  }
  storeSysLangOpt();
}

function setQuizLangOpt(opt) {
  switch (opt) {
    case 0:
      quizLangOpt = 0;
      break;
    case 1:
      quizLangOpt = 1;
      break;
    case 'en':
      quizLangOpt = 0;
      break;
    case 'zh':
      quizLangOpt = 1;
      break;
    case '0':
      quizLangOpt = 0;
      break;
    case '1':
      quizLangOpt = 1;
      break;
    default:
      // code block
  }
  storeQuizLangOpt();
}

function switchSysLang() {
  switch (sysLangOpt) {
    case 0:
      setSysLangOpt(1);
      break;
    case 1:
      setSysLangOpt(0);
      break;
    default:
  }
  // check if key exists
  if (localStorage.getItem('key')) {
    location.reload();
  }else{
    createLoginView();
  }
}

function switchQuizLang() {
  switch (quizLangOpt) {
    case 0:
      setQuizLangOpt(1);
      break;
    case 1:
      setQuizLangOpt(0);
      break;
    default:
  }
  //check if key exists
  if (localStorage.getItem('key')) {
    location.reload();
  }else{
    alert('error: 22331');
    logout();
  }
}