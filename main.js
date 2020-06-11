 // Your web app's Firebase configuration
  //paste your sdk code here
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function google_btn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  function login_btn() {
    // body...
     // body...
  var email = $("#email").val();
  var password = $("#pwd").val();
  
    const login = firebase.auth().signInWithEmailAndPassword(email,password);
    login.catch(error => alert(error.message));
    alert("login done");
  }
  function signup_btn() {
    // body...
  var email = $("#email").val();
  var password = $("#pwd").val();

    const signup = firebase.auth().createUserWithEmailAndPassword(email,password);
    signup.catch(error => alert(error.message));
    alert("sign up done");
  }
  function logout_btn() {
    // body...
    const logout = auth.signOut();
    alert("logout done");

  }
  
  auth.onAuthStateChanged(function(user){
    if(user){
      alert("active user");
    }
    else{
      alert("no user active");

    }
  });