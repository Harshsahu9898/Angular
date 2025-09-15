import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NgIf, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
@ViewChild('user') UserComponent:any

  counter = 0;

  constructor(){
    afterRender(()=>{
      console.log("afterRender",this.UserComponent.counter);
      
    })
    afterNextRender(()=>{
      console.log("afterNextRender",this.UserComponent.counter);
    })
  }
  updateCounter(){
    this.counter++;
  }
}
