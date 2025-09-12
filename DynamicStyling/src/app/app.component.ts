import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DynamicStyling';
  bgColor="magenta";
  fontSize="30";

  sizeBig = "80px";
  sizeSmall ="20px";

  zoom = false

  updateHeadingSize(){
    this.zoom = ! this.zoom;
  }
  updateMaxSize(){
    
  }
}
