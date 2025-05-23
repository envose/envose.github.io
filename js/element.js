// Define predefined CSS Class list for elements

var cssClassStr = {
  'btn_free_primary': ['btn', 'btn-primary', 'text-center', 'align-self-center'],
  'btn_free_info': ['btn', 'btn-info', 'text-center', 'align-self-center'],
  'btn_free_success': ['btn', 'btn-success', 'text-center', 'align-self-center'],
  'btn_free_danger': ['btn', 'btn-danger', 'text-center', 'align-self-center'],
  'btn_free_light': ['btn', 'btn-light', 'text-center', 'align-self-center'],
  'btn_std_primary': ['btn', 'btn-primary', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'btn_std_info': ['btn', 'btn-info', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'btn_std_danger': ['btn', 'btn-danger', 'btn-block', 'text-center', 'align-self-center', 'mt-3', 'mb-3'],
  'title': ['text-center', 'col'],
  'view_content_center': ['d-flex', 'col', 'flex-column', 'align-items-center', 'mt-3', 'mb-3'],
  'view_col5': ['col-5', 'col-lg-3'],
  'view_entry': ['row', 'mx-lg-5', 'my-2', 'align-self-center'],
  'table': ['table', 'table-striped', 'table-light'],
  'col_12': ['col-12'],
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
    let arr = cssClassKey.split(' ');
    for (i=0; i<arr.length; i++) {
      // alert(arr[i]);
      e.classList.add(...getCSSClassStr(arr[i]));
    }
    
  }
	
  return e;
}
