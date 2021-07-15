window.onload = function() {

  // check if key exists
  var localKey = localStorage.getItem('key');
  if (localKey) {
    console.log(localStorage);

    // check if lang opt stored
    var localLang = localStorage.getItem('lang_sys');
    if (localLang) {
      setSysLangOpt(localLang);
    }

    // check if team formed
    var localTeam = localStorage.getItem('team');
    if (localTeam) {
      team = localTeam.split(',');

      var localStartDate = localStorage.getItem('startDate');
      if (localStartDate) {
        startDate = localStartDate;
      }else{
        getStartDate;
      }
      dashboard();
    }else{
      createTeamView();
    }
  }else{
    createLoginView();
  }

  
}