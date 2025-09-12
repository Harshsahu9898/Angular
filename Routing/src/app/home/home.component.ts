import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // constructor(private router:Router){
  // }
  // goToProfile(name:string){
  //    this.router.navigate(['profile'],{queryParams:{name}})
  // }
  users = [
    {
      id: '1',
      name: 'harsh',
      age: '21',
      email: 'harsh@test.com',
    },
    {
      id: '2',
      name: 'kabir',
      age: '20',
      email: 'kabir@test.com',
    },
    {
      id: '3',
      name: 'sujal',
      age: '11',
      email: 'sujal@test.com',
    },
    {
      id: '4',
      name: 'girish',
      age: '12',
      email: 'girish@test.com',
    },
    {
      id: '5',
      name: 'neilesh',
      age: '22',
      email: 'neilesh@test.com',
    },
  ];
}
