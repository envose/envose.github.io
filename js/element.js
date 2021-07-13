// Define predefined CSS Class list for elements

var cssClassStr = {
  'btn_login': ['btn', 'btn-primary', 'text-center', 'align-self-center'],
  'btn_lang': ['btn', 'btn-primary', 'col-4', 'col-lg-3', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'title': ['text-center', 'col'],
  'view_content_center': ['d-flex', 'col', 'd-flex', 'flex-column', 'align-intems-center', 'mt-3', 'mb-3'],
  'view_entry': ['row', 'my-2', 'align-self-center'],
};

function getCSSClassStr(key) {
  if (key in cssClassStr) {
    return cssClassStr[key];
  }else{
    return key.split(' ');
  }
}

function createCustomElement(ele, cssClassKey='') {
  var e = document.createElement(ele);
  if (cssClassKey != '') {
    e.classList.add(...getCSSClassStr(cssClassKey));
  }
	
  return e;
}
