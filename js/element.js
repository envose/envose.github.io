// Define predefined CSS Class list for elements

var cssClassStr = {
  'btn_free_primary': ['btn', 'btn-primary', 'text-center', 'align-self-center'],
  'btn_free_info': ['btn', 'btn-info', 'text-center', 'align-self-center'],
  'btn_free_danger': ['btn', 'btn-danger', 'text-center', 'align-self-center'],
  'btn_free_light': ['btn', 'btn-light', 'text-center', 'align-self-center'],
  'btn_std_primary': ['btn', 'btn-primary', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'btn_std_info': ['btn', 'btn-info', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'btn_std_danger': ['btn', 'btn-danger', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'title': ['text-center', 'col'],
  'view_content_center': ['d-flex', 'col', 'd-flex', 'flex-column', 'align-items-center', 'mt-3', 'mb-3'],
  'view_col5': ['col-5', 'col-lg-3'],
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
