import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ //@component is a component  directive
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // show = true 
//   students = ['harsh','kabir','sujal','soni','deepak'];
  
//   studentsData= [
//     {
//       name:'harsh',
//       age:21,
//       email:'harsh@2004'
//     },
//     {
//       name:'kabir',
//       age:20,
//       email:'kabir@2005'
//     },{
//       name:'sujal',
//       age:22,
//       email:'sujal@2003'
//     },{
//       name:'soni',
//       age:25,
//       email:'soni@2000'
//     },{
//       name:'deepak',
//       age:27,
//       email:'deepak@1998'
//     },
//   ]
  // login = true;
  // block=0
  // updateBlock(){
  //   this.block++; //increment also is acceptable
    // (this.block)=!this.block;
  // }
  
  // switch case
  color="no";
  changeColor(color:string){
    this.color = color;
  }
}
