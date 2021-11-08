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
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },
    1: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼，為甚麼會出現12月25日這個日子？<br>',
      'p': '',
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },
    2: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_03.JPG',
      'h5': '12月25日原是古羅馬的冬至日，是當時羅馬人所崇拜的太陽神的誕生日，與基督毫無關係',
      'p': '',
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },
    3: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_04.JPG',
      'h5': '在公元336年，羅馬教會才開始引入這個異教的風俗，後來演變成為今日耳熟能詳的聖誕節',
      'p': '',
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },
    4: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_05.JPG',
      'h5': '穿紅衣的聖誕老人形象最初被可口可樂公司用作宣傳，後來演變成宣傳商業消費的聖誕節',
      'p': '',
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },
    5: {
      'title': '正確答案：太陽神',
      'img': 'assets/slide_q1_06.JPG',
      'h5': '那麼，現在人們在教會裏以耶穌基督的名義，慶祝太陽神生日、盡情消費玩樂的做法，你又怎樣看待呢？',
      'p': '',
      'title_en': '',
      'h5_en': '',
      'p_en': '',
    },

  },
  'q2': {
    0: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝賜福給第七日，定為聖日；因為在這日，上帝歇了他一切創造的工，就安息了',
      'p': '創世記 2:3',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'Then God blessed the 7th day and made it holy',
      'p_en': 'Genesis 2:3',
    },
    1: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼，第七日安息日是星期幾？',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'What day is the 7th day?',
      'p_en': '',
    },
    2: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q2_03.JPG',
      'h5': '字典解釋一周的第七日，即周末，是星期六',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': '7th day is Saturday, according to dictionary',
      'p_en': '',
    },
    3: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q2_04.JPG',
      'h5': '月曆同樣顯示第七日安息日，是星期六；聖經也同樣記錄了',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'Calendar and the Bible state the same',
      'p_en': '',
    },
    4: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '那麼第一日，即星期日禮拜是怎樣來的？',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'Why people worship God on Sunday?',
      'p_en': '',
    },
    5: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_03.JPG',
      'h5': '星期日，Sunday，其實是太陽神教的聖日，「尊嚴的太陽日」',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'Sunday is the sacred day of Mithraism (sungod)',
      'p_en': '',
    },
    6: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '在公元321年，羅馬皇帝君士坦丁頒布「星期日休業令」，從此確立星期日禮拜',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'The Sunday Law est. by Roman Emperor Contantine in AD321 exerted greatest influence',
      'p_en': '',
    },
    7: {
      'title': '正確答案：星期六',
      'img': 'assets/slide_incorrect.JPG',
      'h5': '現在人們卻不守上帝的安息日，反而在教會裏守太陽神的聖日，離棄上帝的誡命',
      'p': '',
      'title_en': 'Correct Answer: Saturday',
      'h5_en': 'Ironically, present Christians observe sacred day of sungod in churches',
      'p_en': '',
    },
  },
  'q3': {
    0: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝說：「我們要照著我們的形像、按著我們的樣式造人⋯」',
      'p': '創世記 1:26',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'Then God said, "Let us make man in our image, in our likeness..."',
      'p_en': 'Genesis 1:26',
    },
    1: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '上帝創造人時自稱「我們」，表明有多過1位的上帝',
      'p': '',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'God refers to himself as "us", implies > 1',
      'p_en': '',
    },
    2: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '上帝就照著自己的形像造人，乃是照著他的形像造男造女',
      'p': '創世記 1:27',
      'title_en': 'Correct Answer: 2',
      'h5_en': '"So God created man in his own image...male and felmale"',
      'p_en': 'Genesis 1:27',
    },
    3: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_male.JPG',
      'h5': '按上帝的形象造了2種人，即有2位上帝存在',
      'p': '',
      'title_en': 'Correct Answer: 2',
      'h5_en': '2 types of man created means there are 2 Gods',
      'p_en': '',
    },
    4: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '男人是按男性形象的父親上帝而造的，那麼女人呢？',
      'p': '',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'Man is created from male image of God, God the Father. How abt woman?',
      'p_en': '',
    },
    5: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_male.JPG',
      'h5': '女人是按照女性形象的母親上帝而造的，聖經有記錄天上母親嗎？',
      'p': '',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'Woman is created from female image of God, God the Mother. Is it?',
      'p_en': '',
    },
    6: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '但那在上的耶路撒冷是自主的，她是我們的母',
      'p': '加拉太書 4:26',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'But the Jerusalem that is above is free, and she is our mother',
      'p_en': 'Galatians 4:26',
    },
    7: {
      'title': '正確答案：2位上帝',
      'img': 'assets/slide_correct.JPG',
      'h5': '所以，我們要按聖經教導，相信父親和母親上帝，才能得到永生',
      'p': '',
      'title_en': 'Correct Answer: 2',
      'h5_en': 'Therefore, we have not only God the Father but also God the Mother in heaven',
      'p_en': '',
    },
  },
  'q4': {
    0: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '聖經是怎樣記錄這個場面呢？',
      'p': '',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'What does the Bible say about this scene?',
      'p_en': '',
    },
    1: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '除酵節的第一天⋯門徒遵著耶穌所吩咐的就去預備了逾越節的筵席',
      'p': '馬太福音 26:17-19',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': '...celebrate the Passover...as Jesus had dircted them and prepared the Passover',
      'p_en': 'Matthew 26:17-19',
    },
    2: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '聖經記錄是耶穌和門徒遵守逾越節的場面，他們為甚麼遵守？',
      'p': '',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'Bible clearly recorded it "the Passover". Why they celebrate it?',
      'p_en': '',
    },
    3: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '耶穌說：「⋯吃我肉、喝我血的人就有永生，在末日我要叫他復活。⋯」',
      'p': '約翰福音 6:53-54',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'Jesus said...Whoever eats my flesh and drinks my blood has eternal life',
      'p_en': 'John 6:53-54',
    },
    4: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_q1_02.JPG',
      'h5': '怎樣才能吃喝耶穌的肉和血，得到永生？',
      'p': '',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'What is the way to eat Jesus’s flesh and drink His blood?',
      'p_en': '',
    },
    5: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '⋯耶穌拿起餅來⋯說：「⋯這是我的身體」；又拿起杯來⋯說：「⋯這是我立約的血⋯」',
      'p': '馬太福音 26:26-28',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': '...Jesus took bread...this is my body... he took the cup[wine]...This is my blood',
      'p_en': 'Matthew 26:26-28',
    },
    6: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_bread.JPG',
      'h5': '耶穌約定逾越節的餅和酒是他的肉和血，所以路加福音記錄逾越節的葡萄酒為新約',
      'p': '',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'Jesus made the New Covenant that Passover bread and wine are His flesh and blood',
      'p_en': '',
    },
    7: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '飯後也照樣拿起杯來，說：「這杯是用我血所立的新約⋯」',
      'p': '路加福音 22:20',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': '...This cup is the new covenant in my blood...',
      'p_en': 'Luke 22:20',
    },
    8: {
      'title': '正確答案：耶穌立新約的逾越節',
      'img': 'assets/slide_correct.JPG',
      'h5': '按耶穌的約定，我們遵守新約的逾越節，就得到永生，回去天國',
      'p': '',
      'title_en': 'Correct Answer:<br>Jesus Est. New Covenant Passover',
      'h5_en': 'Let us celebrate the New Covenant Passover as Bible teaches and have eternal life',
      'p_en': '',
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
  'q5': {
    0: {
      'title': '正確答案：逾越節',
      'img': 'assets/slide_q1_01.JPG',
      'h5': '聖經有明確記錄逾越節的日子',
      'p': '',
    },
    1: {
      'title': '正確答案：逾越節',
      'img': 'assets/slide_bible_bg.JPG',
      'h5': '耶和華對摩西說⋯正月十四日，黃昏的時候，是耶和華的逾越節',
      'p': '利未記 23:1,5',
    },
    2: {
      'title': '正確答案：逾越節',
      'img': 'assets/slide_incorrect.JPG',
      'h5': '但現在人們在任意的日子吃喝的餅和酒，是無法成為耶穌的肉和血',
      'p': '',
    },
    3: {
      'title': '正確答案：逾越節',
      'img': 'assets/slide_correct.JPG',
      'h5': '所以我們要按耶穌的約定，遵守聖曆1月14日的新約逾越節，得到應許的永生',
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
    h5.innerHTML = (quizLangOpt==0 ? getSlide(i)['h5_en'] : getSlide(i)['h5']);
    h5.style.color = mcqColor;
    tmp.appendChild(h5);

    var p = document.createElement('p');
    p.innerHTML = (quizLangOpt==0 ? getSlide(i)['p_en'] : getSlide(i)['p']);
    p.style.color = mcqColor;
    tmp.appendChild(p);

    div.appendChild(tmp);
  }

  return div;
}

function updateSlideHeader() {
  var header = document.getElementById('slideModalTitle');
  // header.innerHTML = '';
  header.innerHTML = (quizLangOpt==0 ? getCurrentSlide()['title_en'] : getCurrentSlide()['title']);
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

  // if (currentQ < numOfQ) {
  //   $('#mc_carousel').carousel(currentQ);
  //   currentQ++;
  //   setHeaderTitle('h2', getQuizTranslate('question ')+currentQ);

  //   var seq = ['1', '2', '3', '4'];
  //   shuffle(seq);

  //   // update btns
  //     for (let i = 1; i <= 4; i++) {
  //       var bid = 'btn_' + i;
  //       var cid = 'q' + currentQ + 'c' + seq[(i-1)];
  //       var c = getQuizContent(cid);
  //       var btn = document.getElementById(bid);
  //       btn.value = c;
  //       btn.innerHTML = c;
  //     }
  // }else{
    // all questions answered!
    checkAnswer();
    createSurveyView();
  // }
}

// $('#slide').on('slid.bs.carousel', function() {
//   currentIndex = $('div.active').index();
//   setCurrentIndex(currentIndex);
//   updateSlideHeader();
// });

//console.log(getCurrentSlide(0));
