var slide = document.getElementById('slide');
var slide_header_container = document.getElementById('slide_header_container');
var slide_footer_container = document.getElementById('slide_footer_container');

var slides = {
  'po': {

  },
  'mo': {
  	0: {
  	  'title': 'mo 0',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': 'label mo<br>h5',
  	  'p': '',
  	},
  	1: {
  	  'title': 'mo 1',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '一二三四五',
  	  'p': 'p p p p p p p p p p ',
  	},
  	2: {
  	  'title': 'mo 2',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': 'aso iasj jaois iajs ajso iajs oasj aiosj iasj ja a',
  	  'p': '',
  	},
  	3: {
  	  'title': 'mo 3',
  	  'img': 'assets/mo_3.png',
  	  'h5': '一二三四五',
  	  'p': 'p p p p p p p p p p ',
  	},
  	4: {
  	  'title': 'mo 4',
  	  'img': 'assets/mo_4.png',
  	  'h5': '一二三四五',
  	  'p': '',
  	},
  	5: {
  	  'title': 'mo 5',
  	  'img': 'assets/mo_5.png',
  	  'h5': '一二三四五',
  	  'p': '',
  	},
  	6: {
  	  'title': 'mo 6',
  	  'img': 'assets/mo_6.png',
  	  'h5': '一二三四五',
  	  'p': '',
  	},
  	7: {
  	  'title': 'mo 7',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '一二三四五',
  	  'p': '',
  	},
  }
};

var current = {
  'key': 'mo',
  'index': 0,
};

function setCurrentTopic(key) {
  current['key'] = key;
  current['index'] = 0;
}

function setCurrentIndex(index) {
  current['index'] = index;
}

function getCurrentKey() {
  return current['key'];
}

function getCurrentIndex() {
  return current['index'];
}

function getCurrentTopic() {
  return slides[getCurrentKey()];
}

function getCurrentSlide() {
  var i = getCurrentIndex();
  return slides[getCurrentKey()][i];
}

function getSlide(i) {
  return slides[getCurrentKey()][i];
}

function getCurrentNumOfSlide() {
	return Object.keys(getCurrentTopic()).length;
}

function createSlideLi(i) {
  var li = document.createElement('li');

  li.setAttribute('data-target', '#carouselExampleIndicators');
  li.setAttribute('data-slide-to', ''+(i+1));

  if (i == getCurrentIndex()) {
  	li.classList.add('active');
  }

  return li;
}

function createSlideItem(i) {
  var div = document.createElement('div');
  div.classList.add(...['carousel-item', 'slide_item']);

  if (i == getCurrentIndex()) {
  	div.classList.add('active');
  }

  if (getSlide(i)['img']) {
	var img = document.createElement('img');
	img.classList.add(...['d-block', 'w-100']);
	img.src = getSlide(i)['img'];
	div.appendChild(img);
  }

  if (getSlide(i)['h5'] != '' || getSlide(i)['p'] != '' ) {
  	var tmp = document.createElement('div');
    tmp.classList.add(...['carousel-caption']);

    var h5 = document.createElement('h5');
    h5.innerHTML = getSlide(i)['h5'];
    tmp.appendChild(h5);

    var p = document.createElement('p');
    p.innerHTML = getSlide(i)['p'];
    tmp.appendChild(p);

    div.appendChild(tmp);
  }

  return div;
}

function updateHeader() {
  slide_header_container.innerHTML = '';
  var h2 = createCustomElement('h2', 'slide_header');
  slide_header_container.appendChild(h2);

  h2.innerHTML = getCurrentSlide()['title'];
}

function createSlideView(key) {
  const c_ind = document.getElementById('carousel-indicators');
  const c_inn = document.getElementById('carousel-inner');

  setCurrentTopic(key);
  updateHeader();

  c_ind.innerHTML = '';
  c_inn.innerHTML = '';

  if (Object.keys(getCurrentTopic()).length > 0) {
  	for (let i = 0; i < getCurrentNumOfSlide(); i++) {
  	  c_ind.appendChild(createSlideLi(i));
  	  c_inn.appendChild(createSlideItem(i));
  	}
  }
}

function initSlideFrame() {
  slide_header_container.innerHTML = '';
  slide_footer_container.innerHTML = '';

  var header = createCustomElement('h2', 'slide_header');
  var btn = createCustomElement('button', 'btn_default');
  header.innerHTML = getTranslate('mother');
  btn.innerHTML = getTranslate('OK');

  slide_header_container.append(header);
  slide_footer_container.append(btn);
  
  createSlideView(topic);
}


$('#slide').on('slid.bs.carousel', function() {
  currentIndex = $('div.active').index();
  setCurrentIndex(currentIndex);
  updateHeader();
});

//console.log(getCurrentSlide(0));