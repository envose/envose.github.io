// Define predefined CSS Class list for elements

var cssClassStr = {
  'btn_default': ['btn', 'btn-info', 'btn-lg', 'align-self-center', 'w-50', 'fadein_1s'],
  'slide_header': ['text-center'],
  'text': ['align-self-center', 'paragraph'],
  'title': ['align-self-center'],
  'view_center_middle': ['vh-100', 'd-flex', 'flex-column', 'justify-content-between'],
  'view_content': ['d-flex', 'w-100', 'd-flex', 'flex-column'],
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
