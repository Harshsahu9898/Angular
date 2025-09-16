import { Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './Service/users.service';
import { User } from './Interface/User';
import {FormsModule} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users:User[]=[];
  selectedUser:User|undefined;
  constructor(private userService:UsersService){

  }
  ngOnInit(){
    this.getUser()
  }
  getUser(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users=data;
      console.log(this.users);
    })
  }
  addUser(user:User){
    if(!this.selectedUser){
       this.userService.saveUsers(user).subscribe((data:User)=>{
      console.log(data);
    if(data){
      this.getUser()
    }
    })
    }else{
      const userData={...user,id:this.selectedUser.id}
      this.userService.updateUser(userData).subscribe((data)=>{
        if(data){
          this.getUser()
        }
      })
      console.log(" Updated User Here !!",user); 
    }
    
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data:User)=>{
      console.log(data); 
    if(data){
      this.getUser()
    }
    })
  }
  selectUser(id:string){
    this.userService.getSelectedUser(id).subscribe((data:User)=>{
      console.log(data);
      this.selectedUser=data;
    })
  }
}
