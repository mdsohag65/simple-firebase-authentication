/**
 * steps to use firebase
 * 1. create a project on console.firebase.google.com
 * 2. npm install firebase
 * 3. Register Web app in firebase
 * 4. copy firebase init with config firebase project
 * 5. export deafult app from firebase.init.js
 * 6. import getAuth from firebase/auth and create const auth = getAuth(app) in App.js
 * 7. import app firebase inti.js into your app.js
 * 8. turn on authentication (firebase >authenticationc> enablel googel sign in)
 * 9. create google provider
 * 10. use singInWithPopup and pass auth and provider
 * 11. handle .then(result=>{console.log(result.user);}) and .catch(error=>{console.log(error);})
 * **/