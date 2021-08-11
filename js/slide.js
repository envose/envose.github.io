var slide = document.getElementById('slide');
var slide_header_container = document.getElementById('slide_header_container');
var slide_footer_container = document.getElementById('slide_footer_container');
var okBtn = document.getElementById('slideOKBtn');

var slides = {
  'po': {
    0: {
      'title': '00000000',
      'img': 'assets/slide_bg.jpg',
      'h5': 'Hello world<br>',
      'p': '',
    },
    1: {
      'title': '111111',
      'img': 'assets/slide_bg.jpg',
      'h5': 'nice to meet you<br>',
      'p': '',
    },

  },
  'mo': {
  	0: {
  	  'title': '「只有一位父親上帝」',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '若按這想法，聖經應該常以單數來表現上帝。<br><br>但是聖經卻以複數—「我們」，來表現了上帝。<br>',
  	  'p': '',
  	},
  	1: {
  	  'title': '只有一位上帝？',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '上帝說：「我們要照著我們的形像、按著我們的樣式造人⋯⋯」',
  	  'p': '創世記 1:26<br>',
  	},
  	2: {
  	  'title': '上帝卻說了「我們」',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '要是創造人類的創造主，只有父親上帝一位，那麼上帝應該說「我」；<br><br>但分明說了「我們」，證明不是只有父親上帝。<br>',
  	  'p': '',
  	},
  	3: {
  	  'title': '為甚麼說「我們」？',
  	  'img': 'assets/mo_3.png',
  	  'h5': '上帝就照著自己的形像造人，乃是照著他的形像造男造女。',
  	  'p': '創世記 1:27',
  	},
  	4: {
  	  'title': '為甚麼說「我們」？',
  	  'img': 'assets/mo_4.png',
  	  'h5': '',
  	  'p': '就像打印一樣，從複本可知原件的形象',
  	},
  	5: {
  	  'title': '為甚麼說「我們」？',
  	  'img': 'assets/mo_5.png',
  	  'h5': '',
  	  'p': '複本有2個形像，告知我們原件有2個形像',
  	},
  	6: {
  	  'title': '為甚麼說「我們」？',
  	  'img': 'assets/mo_6.png',
  	  'h5': '因為有2位上帝，所以上帝才說「我們」',
  	  'p': '',
  	},
  	7: {
  	  'title': '結論',
  	  'img': 'assets/slide_bg.jpg',
  	  'h5': '按照聖經的教導，不僅要相信父親上帝，也要相信母親上帝。<br><br>',
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

  li.setAttribute('data-target', '#slide_carousel');
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

function updateSlideHeader() {
  var header = document.getElementById('slideModalTitle');
  // header.innerHTML = '';
  header.innerHTML = getCurrentSlide()['title'];
}

function createSlideView(key) {
  const c_ind = document.getElementById('carousel-indicators');
  const c_inn = document.getElementById('carousel-inner');

  setCurrentTopic(key);
  updateSlideHeader();

  c_ind.innerHTML = '';
  c_inn.innerHTML = '';

  if (Object.keys(getCurrentTopic()).length > 0) {
  	for (let i = 0; i < getCurrentNumOfSlide(); i++) {
  	  c_ind.appendChild(createSlideLi(i));
  	  c_inn.appendChild(createSlideItem(i));
  	}
  }
  checkitem();
}

function initSlideFrame(topic) {
  slide_header_container.innerHTML = '';
  slide_footer_container.innerHTML = '';
  $('#slideModal').modal({backdrop: 'static', keyboard: false});

  okBtn.innerHTML = 'OK';
  // hideEle(okBtn);
  // okBtn.classList.add('disabled');
  // hideEle(getElementById('slide_modal_footer'));
  $('#slide_modal_footer').hide();
  
  createSlideView(topic);
}

function slideNext() {
  // currentIndex = $('div.active').index();
  // setCurrentIndex(currentIndex);
  // $('#slide_carousel').carousel(currentIndex);
  // updateSlideHeader();
  if ($('div.active').index() >= getCurrentNumOfSlide()-2) {
    // showEle(okBtn);
    // okBtn.style.visibility = 'visible';
    $('#slide_modal_footer').show();
  }
  // console.log(tmpSlide);
}

$('#slide_carousel').on('slid.bs.carousel', checkitem);

function checkitem()                        // check function
{
  currentIndex = $('div.active').index();
  setCurrentIndex(currentIndex);
  updateSlideHeader();
  // $('#slide_carousel').carousel(currentIndex);
    // var $this = $('#slide_carousel');
    // if ($('.carousel-inner .item:first').hasClass('active')) {
    //     // Hide left arrow
    //     $this.children('.left.carousel-control').hide();
    //     // But show right arrow
    //     $this.children('.right.carousel-control').show();
    // } else if ($('.carousel-inner .item:last').hasClass('active')) {
    //     // Hide right arrow
    //     $this.children('.right.carousel-control').hide();
    //     // But show left arrow
    //     $this.children('.left.carousel-control').show();
    // } else {
    //     $this.children('.carousel-control').show();
    // }

  if (currentIndex == 0) {
    $('.carousel-control-prev').hide();
    $('.carousel-control-next').show();
  } else if (currentIndex == getCurrentNumOfSlide()-1){
    $('.carousel-control-next').hide();
    $('.carousel-control-prev').show();
  }else{
    $('.carousel-control-prev').show();
    $('.carousel-control-next').show();
  }
}

function slideOK() {
  $('#slideModal').modal('hide');

  if (currentQ < numOfQ) {
    $('#mc_carousel').carousel(currentQ);
    currentQ++;
    setHeaderTitle('h2', getQuizTranslate('question ')+currentQ);

    var seq = ['1', '2', '3', '4'];
    shuffle(seq);

    // update btns
      for (let i = 1; i <= 4; i++) {
        var bid = 'btn_' + i;
        var cid = 'q' + currentQ + 'c' + seq[(i-1)];
        var c = getQuizContent(cid);
        var btn = document.getElementById(bid);
        btn.value = c;
        btn.innerHTML = c;
      }
  }else{
    // all questions answered!
    checkAnswer();
    createSurveyView();
  }
}

// $('#slide').on('slid.bs.carousel', function() {
//   currentIndex = $('div.active').index();
//   setCurrentIndex(currentIndex);
//   updateSlideHeader();
// });

//console.log(getCurrentSlide(0));
