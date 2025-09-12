import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = new FormControl('harsh');
  password = new FormControl('0143');
  displayValue(){
    console.log(this.name.value,this.password.value)
  }
  setValues(){
    this.name.setValue('harsh');
    this.password.setValue('321');
  }
}
