// const
const GUARD_QUOTA = 2;
const GUARD_DURATION = 1000 * 60 * 60 * 3;
const form = document.forms['submit-to-google-sheet'];
const app_name = '錫安的星辰';

const alertModal = new bootstrap.Modal(document.getElementById('alertModal'), {backdrop: 'static', keyboard: false});
const inputModal = new bootstrap.Modal(document.getElementById('inputModal'), {backdrop: 'static', keyboard: false});

// views
var header = document.getElementById('container_header');
var content = document.getElementById('container_content');
var footer = document.getElementById('container_footer');

var starNum = 0;
var starName = '';
var starList = {};

var taskForm = {'tid' : ''};