import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name= "";
  changeName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val;
  }
  title:"angular" | undefined;
}
