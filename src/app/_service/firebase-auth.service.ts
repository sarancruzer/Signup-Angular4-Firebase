import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseAuthService {

  authState: any = null;

  constructor(private angularAuth: AngularFireAuth) { }


  firebaseAuth(provider){
    return this.angularAuth.auth.signInWithPopup(provider)
    .then((credential) => credential)
    .catch(error => {
      return error;
    });
  }
  

  firebaseWithGoogleAuth(){
    return this.angularAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((credential) =>  {
        return credential;
    })
    .catch(error => console.log(error));
  }
    
  firebaseWithTwitterAuth(){
    return this.angularAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then((credential) =>  {
        return credential;
    })
    .catch(error => console.log(error));
  }

  firebaseWithFacebookAuth(){
    return this.angularAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((credential) =>  {
        return credential;
    })
    .catch(error => console.log(error));
  }

  firebaseWithGithubAuth(){
    return this.angularAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then((credential) =>  {
        return credential;
    })
    .catch(error => console.log(error));
  }      
  
  
  
}
