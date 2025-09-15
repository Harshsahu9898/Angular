import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() counter=0 
  name="Harsh";
  constructor(){
    console.log("User Component Constructor is called");
    this.name="Sahu";
  }
  ngOnInit(){
    console.log("User Component ngOnInit is called");
    this.name="Sujal";
  }  
  ngOnDestroy(){
    console.log("User Component ngOnDestroy is called");
  }
  ngOnChanges(){//everytime the value changes it will run
    console.log("ngOnChanges");
  }
}
