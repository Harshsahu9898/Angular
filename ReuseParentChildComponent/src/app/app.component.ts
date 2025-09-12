import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // h='kya leke aaya bande kya leke jaayga do din ki zindagi hai do din ka mela'
  // ha='bada hua to kya hua jaise ped khajoor pankti to chaaya nahi fal laage atidur'
  users =['harsh','kabir','sujal','sameer','bikram']
}
