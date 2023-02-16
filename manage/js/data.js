var user = '';
var write = '';
var fullMarks = {
  "sp": 0,
  "p": 0,
  "s": 0,
  "t": 0
};

var nameList = [
	{
		'unit': 'YF_1-1',
		'members': ['陳一', '王二', '張三', '李四', '楊五']
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
    'name': '陳一',
    'entry': "2023-2",
    'score_w': 15,
    'score_sp': 5,
    'score_p': 11,
    'score_t': 100,
    'score_s': 6,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Apple2',
    'entry': "2023-2",
    'score_w': 12,
    'score_sp': 0,
    'score_p': 0,
    'score_t': 100,
    'score_s': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '王二',
    'entry': "2023-2",
    'score_w': 1,
    'score_sp': 0,
    'score_p': 0,
    'score_t': 0,
    'score_s': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '張三',
    'entry': "2023-2",
    'score_w': 12,
    'score_sp': 4,
    'score_p': 3,
    'score_t': 50,
    'score_s': 1,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-2",
    'name': 'Cherry2',
    'entry': "2023-2",
    'score_w': 12,
    'score_sp': 0,
    'score_p': 0,
    'score_t': 50,
    'score_s': 0,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四7',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四6',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四5',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四4',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四3',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四2',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
  {
    'timestamp': '2022-12-31',
    'unit': "YF_1-1",
    'name': '李四1',
    'entry': "2023-2",
    'score_w': 16,
    'score_sp': 12,
    'score_p': 37,
    'score_t': 100,
    'score_s': 11,
  },
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