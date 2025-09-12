import { Component, signal,computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  x = signal(12);
  y = signal(20);
  z= computed(()=>this.x()+this.y())
  showValue(){
    console.log(this.z());
    this.x.set(100);
    // console.log(this.z());
    // this.x() = 100;
    // this.z() = this.x()+ this.y();
    console.log(this.z());
  }
  updateX(){
    this.x.set(200);
  }
}
