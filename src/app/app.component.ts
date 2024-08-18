import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar,HeaderComponent,FormsModule,NgIf,NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//  title:string ='this loaded dynamically';
//  imgUrl:string='https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-303.png?sfvrsn=d8bbe35c_3';
//  isDisabled:boolean=true;
//  isActive:boolean=true;
//  fruitName:string='Apple';

//  userName:string='John Doe';

//  buttonClick(){
//   console.log('Button Clicked')
//  }

//  keyEnter(event:any){
//   //console.log(event.keyCode);
//   if(event.keyCode==13){
//     console.log('Enter key pressed')
//   }
//  }

//  keyupFiltering(user:HTMLInputElement){
//   console.log(user.value)
//  }

//  updateUserName(username:HTMLInputElement){
//   this.userName=username.value;
//   console.log(this.userName);
//  }

isLoggedIn:boolean=false;
userName:string='John Doe';

isAdmin:boolean=false;
isMember:boolean=false;
isGuest:boolean=true;

userRole:string='Admin';



loginCount:number=0;
countLoginAttempts(){
  this.loginCount++;
  console.log(this.loginCount)
}

}
