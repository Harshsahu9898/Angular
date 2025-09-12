import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName:string|null = "";
  age:string|null =""; 
  constructor(private router:ActivatedRoute){}
  ngOnInit(){
  //  this.userName = this.router.snapshot.paramMap.get('name');
  //  console.log(this.userName) 
  //  this.age = this.router.snapshot.paramMap.get('age');
  //  console.log(this.age); 

  // this.router.queryParams.subscribe(params=>{
  //   // console.log(params['name'])
  //   this.userName = (params['name'])
  // })
  this.router.data.subscribe(data=>{
    this.userName = data['name']
    this.age = data['age']
  })
  }
}
