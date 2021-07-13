var container = document.getElementById('container_view');
var slide = document.getElementById('slide');
var slide_header_container = document.getElementById('slide_header_container');

function initContainer () {
  container.innerHTML = "";
}

function createSelectLangView() {
  const view = 'lang_view';

  initContainer();
  var content_view = createCustomElement('div', 'view_content');
  var div = createCustomElement('div', 'view_center_middle');
  var btn_en = createCustomElement('button', 'btn_default');
  var btn_zh = createCustomElement('button', 'btn_default');

  content_view.id = view;
  btn_en.innerHTML = 'English';
  btn_zh.innerHTML = '中文';
  btn_en.onclick = function() {selectedLang(0)};
  btn_zh.onclick = function() {selectedLang(1)};

  div.appendChild(btn_en);
  div.appendChild(btn_zh);
  content_view.appendChild(div);
  container.appendChild(content_view);
}

function createStartPage() {
  const view = 'start_view';

  initContainer();
  var content_view = createCustomElement('div', 'view_content');
  var div = createCustomElement('div', 'view_center_middle');
  var title = createCustomElement('h2', 'title');
  var text = createCustomElement('p', 'text');
  var btn_start = createCustomElement('btn', 'btn_default');

  content_view.id = view;
  title.innerHTML = getTranslate('preface');
  text.innerHTML = getTranslate('start_text');
  btn_start.innerHTML = getTranslate('start');
  btn_start.onclick = function() {start();};

  div.appendChild(title);
  div.appendChild(text);
  div.appendChild(btn_start);
  content_view.appendChild(div);
  container.appendChild(content_view);
}

function createTopicPage() {
  const view = 'topic_view';

  initContainer();
  var content_view = createCustomElement('div', 'view_content');
  var div = createCustomElement('div', 'view_center_middle');
  var title = createCustomElement('h2', 'title');
  var btn_po = createCustomElement('btn', 'btn_default');
  var btn_mo = createCustomElement('btn', 'btn_default');

  content_view.id = view;
  title.innerHTML = getTranslate('select_topic');
  btn_po.innerHTML = getTranslate('passover');
  btn_mo.innerHTML = getTranslate('mother');
  btn_po.onclick = function() {selectedTopic();};
  btn_mo.onclick = function() {selectedTopic();};

  div.appendChild(title);
  div.appendChild(btn_po);
  div.appendChild(btn_mo);
  content_view.appendChild(div);
  container.appendChild(content_view);
}

function createContextPage() {
  const view = 'context_view';

  initContainer();
  hideEle(container);

  showEle(slide);
  initSlideFrame();

}

function initSlideFrame() {
  slide_header_container.innerHTML = '';
  var header = createCustomElement('h2', 'slide_header');
  slide_header_container.append(header);
  
}

function createSlideView() {
  var slide = createCustomElement('div', 'slide_view');
  return slide;
}





