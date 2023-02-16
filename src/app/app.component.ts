import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RunwayNews';
  constructor(private auth : Auth, private authService: AuthService, private router : Router){}

  ngOnInit(){
    onAuthStateChanged(this.auth, (user) =>{
      if(user){
        console.log(user);
        this.authService.currentUser = user;
        this.router.navigate(['home']);
      }
      else{
        console.log('No user');
        this.authService.currentUser = null;
        this.router.navigate(['login']);
      }
    })
  }
}
