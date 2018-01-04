import { FirebaseAuthService } from './../_service/firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[FirebaseAuthService]
})
export class ProfileComponent implements OnInit {
  
  users : any = [];
  signup_flag:any;
  names:any;
  
  constructor(private _firebaseAuthService:FirebaseAuthService) { 
       this.userProfile();
       this.names = "saravan";
   }

  ngOnInit() {
    //this.userProfile();
  }


userProfile(){
  console.log("userProfile called");
  setTimeout(()=>{    
      this.users = JSON.parse(localStorage.getItem("users"));
      console.log(this.users);
      console.log(this.users.name);      
 },1000);

  }


}

