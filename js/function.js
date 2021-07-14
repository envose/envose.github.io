function selectedLang(langOpt) {
  setLangOpt(langOpt);
  createStartPage();
}

// to-do
function login() {
  createTeamView();
}

function msgAlert(msg) {
  alert(getSysTranslate('warning') + getSysTranslate(msg));
}

function submitTeam() {
  team = [];
  for (let i = 0; i < numOfMemEntry; i++) {
    var mem = document.getElementById('member_'+i);
    if (mem.value.length > 0) {
      team.push(mem.value);
    }
  }
  if (team.length > 0) {
    dashboard();
  }else{
    msgAlert('alert_noMembers');
  }
}











