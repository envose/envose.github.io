var slide = document.getElementById('slide');
var slide_header_container = document.getElementById('slide_header_container');
var slide_footer_container = document.getElementById('slide_footer_container');
var okBtn = document.getElementById('slideOKBtn');

var slides = {
  'q1': {
    0: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '聖經裏找不到耶穌誕生的確實日子<br>',
      'p': '',
    },
    1: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼，為甚麼會出現12月25日這個日子？<br>',
      'p': '',
    },
    2: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_03.JPG',
      'h5': '12月25日原是古羅馬的冬至日，是當時羅馬人所崇拜的太陽神的誕生日，與基督毫無關係',
      'p': '',
    },
    3: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_04.JPG',
      'h5': '在公元336年，羅馬教會才開始引入這個異教的風俗，後來演變成為今日耳熟能詳的聖誕節',
      'p': '',
    },
    4: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_05.JPG',
      'h5': '穿紅衣的聖誕老人形象最初被可口可樂公司用作宣傳，後來演變成宣傳商業消費的聖誕節',
      'p': '',
    },
    5: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_06.JPG',
      'h5': '那麼，現在人們在教會裏以耶穌基督的名義，慶祝太陽神生日、盡情消費玩樂的做法，你又怎樣看待呢？',
      'p': '',
    },

  },
  'q2': {
    0: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝賜福給第七日，定為聖日；因為在這日，上帝歇了他一切創造的工，就安息了',
      'p': '創世記 2:3',
    },
    1: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼，第七日安息日是星期幾？',
      'p': '',
    },
    2: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q2_03.JPG',
      'h5': '字典解釋一周的第七日，即周末，是星期六',
      'p': '',
    },
    3: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q2_04.JPG',
      'h5': '月曆同樣顯示第七日安息日，是星期六；聖經也同樣記錄了',
      'p': '',
    },
    4: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼第一日，即星期日禮拜是怎樣來的？',
      'p': '',
    },
    5: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_03.JPG',
      'h5': '星期日，Sunday，其實是太陽神教的聖日，「尊嚴的太陽日」',
      'p': '',
    },
    6: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '在公元321年，羅馬教會在尼西亞會議上廢除安息日，改立星期日禮拜',
      'p': '',
    },
    7: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_incorrect.JPG',
      'h5': '現在人們卻不守上帝的安息日，反而在教會裏守太陽神的聖日，離棄上帝的誡命',
      'p': '',
    },
  },
  'q3': {
    0: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝說：「我們要照著我們的形像、按著我們的樣式造人⋯」',
      'p': '創世記 1:26',
    },
    1: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '上帝創造人時自稱「我們」，表明有多過1位的上帝',
      'p': '',
    },
    2: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝就照著自己的形像造人，乃是照著他的形像造男造女',
      'p': '創世記 1:27',
    },
    3: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_male.JPG',
      'h5': '按上帝的形象造了2種人，即有2位上帝存在',
      'p': '',
    },
    4: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '男人是按男性形象的父親上帝而造的，那麼女人呢？',
      'p': '',
    },
    5: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_male.JPG',
      'h5': '女人是按照女性形象的母親上帝而造的，聖經有記錄天上母親嗎？',
      'p': '',
    },
    6: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '但那在上的耶路撒冷是自主的，她是我們的母',
      'p': '加拉太書 4:26',
    },
    7: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_correct.JPG',
      'h5': '所以，我們要按聖經教導，相信父親和母親上帝，才能得到永生',
      'p': '',
    },
  },
  'mo': {
    0: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    1: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    2: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    3: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    4: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    5: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    6: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
    7: {
      'title': '',
      'img': 'assets/slide_bg.JPG',
      'h5': '',
      'p': '',
    },
  },
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
    h5.style.color = mcqColor;
    tmp.appendChild(h5);

    var p = document.createElement('p');
    p.innerHTML = getSlide(i)['p'];
    p.style.color = mcqColor;
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
