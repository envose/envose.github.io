window.onload = function() {

  document.getElementById('topbar').style.visibility = 'hidden';
  document.getElementById('mcq_view').style.display = 'none';

  // check if guard exists
  var localGuard = localStorage.getItem('guard');
  var localQuizLang = localStorage.getItem('lang_quiz');
  if (localGuard && !localQuizLang) {
    guardAttempt = parseInt(localGuard);
    popupGuard();
    $('#alertModal').modal({backdrop: 'static', keyboard: false});
  }else{
    document.getElementById('topbar').style.visibility = 'visible';

    // check if key exists
    var localKey = localStorage.getItem('key');
    if (localKey) {
      console.log(localStorage);

      // check if sys lang opt stored
      var localSysLang = localStorage.getItem('lang_sys');
      if (localSysLang) {
        setSysLangOpt(localSysLang);
      }


        // for 3 hrs
        setTimeout(function(){
          popupGuard();
          $('#alertModal').modal({backdrop: 'static', keyboard: false});
        }, GUARD_DURATION);

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

        // check if quiz lang opt stored, means entered quiz view
        var localQuizLang = localStorage.getItem('lang_quiz');
        if (localQuizLang) {
          setQuizLangOpt(localQuizLang);
          entryView();
        }else{
          dashboard();
        }
      }else{
        createTeamView();
      }
    }else{
      createLoginView();
    }
  }

}