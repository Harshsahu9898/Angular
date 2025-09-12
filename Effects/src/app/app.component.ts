import { Component,effect,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = signal<string>("harsh");
  count = signal(0);
  displayHeading = false;
  // constructor(){
    // effect(()=>{
      // console.log(this.userName());
//    })
  // }
  toggleValue(){
    // this.displayHeading = !this.displayHeading;
    this.count.set(this.count()+1)
  }
  // if i want to modify by my own term then i will do something like,
    constructor(){
    effect(()=>{
      if(this.count()==2){
        this.displayHeading=true;
        setTimeout(() => {
          this.displayHeading=false;
        }, 2000);
      }
      else{
        this.displayHeading=false;
      }
    })
  }

  // constructor(){
  //   effect(()=>{
  //     console.log(this.userName());
  //   })
  // }
}
