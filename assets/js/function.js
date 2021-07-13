function selectedLang(langOpt) {
  setLangOpt(langOpt);
  createStartPage();
}

function selectedTopic(topic) {
  createContextPage(topic);
}

function start() {
  createTopicPage();
}

function hideEle(ele) {
  ele.style.display = 'none';
}

function showEle(ele) {
  ele.style.display = 'block';
}












