firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("user_div").style.display="block";
      document.getElementById("login_div").style.display="none";

      var user = firebase.auth().currentUser;
      if(user != null){

      }

    } else {
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="block";
    }
  });