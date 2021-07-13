var strings = [{
  'mother':           'God the Mother',
  'passover':         'Passover',
  'preface':          'Preface',
  'start':            'Start',
  'start_text':       'Thank you for...',
  'select_topic':     'Select a topic',
},{
  'mother':           '母親上帝',
  'passover':         '逾越節',
  'preface':          '前言',
  'start':            '開始',
  'start_text':       '感謝你幫助...',
  'select_topic':     '選擇一個主題',
}];

var langOpt = 0;

function getTranslate(key) {
  if (key in strings[langOpt]) {
    return strings[langOpt][key];
  }else{
    alert('error: no tranlate for ' + key);
    return '';
  }
}

function setLangOpt(opt) {
  switch (opt){
  	case 0:
  	  langOpt = 0;
  	  break;
  	case 1:
  	  langOpt = 1;
  	  break;
    default:
      // code block
  }
}