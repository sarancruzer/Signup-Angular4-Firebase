import { FirebaseAuthService } from './../_service/firebase-auth.service';
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  providers:[FirebaseAuthService] 
})
export class LoginComponent implements OnInit {

  users : any = [];
  authState: any = [];
  errMsg:any;
  showLogin:boolean = false;

  constructor(private angularAuth: AngularFireAuth,private _router:Router,private _firebaseAuthService:FirebaseAuthService) {
    
    this.angularAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.users = [];
      console.log(this.authState);
    });
    
    this.errMsg = "";
   }


  ngOnInit() {
   
  }
  
  signupWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    this._firebaseAuthService.firebaseAuth(provider)
      .then((credential) =>  {
          this.users = credential.additionalUserInfo.profile;
          console.log("this.users");
          console.log(this.users);
          localStorage.setItem("users",JSON.stringify(this.users));
          //this._router.navigate(['/profile']);
      })
      .catch(error => console.log(error));
  }

  signupWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider()
    this._firebaseAuthService.firebaseAuth(provider)
      .then((credential) =>  {
          this.authState = credential.additionalUserInfo.profile;
          console.log("this.authState");
          console.log(this.authState);
          localStorage.setItem("users",JSON.stringify(this.authState));
          localStorage.setItem("signup_flag","twitter");
      })
      .catch(error => console.log(error));
  }

  signupWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    this._firebaseAuthService.firebaseAuth(provider)
      .then((credential) =>  {
        this.authState = credential;
        if(this.authState.hasOwnProperty('additionalUserInfo')){
          this.authState = credential;
          console.log("this.authState");
          console.log(this.authState);
          localStorage.setItem("users",JSON.stringify(this.authState));
        }else{
          console.log("this.authState error");
          this.errMsg = this.authState.message;
          console.log(this.authState.message);
          console.log(this.errMsg);
          localStorage.setItem("errMsg",this.authState.message);
          localStorage.setItem("signup_flag","facebook");
          this.check();
        }         
        
      })
      .catch(error => console.log(error));
  }

  check(){
    console.log("check called");
    this.errMsg = localStorage.getItem("errMsg");
  }

  signupWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider()
    this._firebaseAuthService.firebaseAuth(provider)
      .then((credential) =>  {
          this.authState = credential;
          console.log("this.authState");
          console.log(this.authState);
          localStorage.setItem("users",JSON.stringify(this.authState));
          localStorage.setItem("signup_flag","github");
      })
      .catch(error => console.log(error));
  }

  
  logout() {
    this.angularAuth.auth.signOut();
  }

}
