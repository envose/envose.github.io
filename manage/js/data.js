var user = 'envose';
var write = '';
var nameList = [
	{
		'unit': 'YF_1-1',
		'members': ['Apple', 'Banana', 'Cherry', 'Durian', 'Eggplant']
	},
  {
    'unit': 'YF_1-2',
    'members': ['Apple2', 'Banana2', 'Cherry2', 'Durian2', 'Eggplant2']
  }
];
var records = [
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': 'Apple',
    'entry': "2023-2",
    'score_w': 10,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Apple2',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Banana2',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Cherry2',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch7erry27',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch6erry26',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch5erry25',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch4erry24',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch3erry23',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch2erry22',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Ch1erry21',
    'entry': "2023-2",
    'score_w': 12,
    'score_p': 0,
    'score_s': 1,
    'score_e': 0,
  }
];
var ageList = [];
var unitList = [];
var rptSelector = {
  age: '',
  unit: '',
  year: '',
  month: '',
};

var monthLabel = {
  1: '一月',
  2: '二月',
  3: '三月',
  4: '四月',
  5: '五月',
  6: '六月',
  7: '七月',
  8: '八月',
  9: '九月',
  10: '十月',
  11: '十一月',
  12: '十二月',
};

var rptMissingList = [];