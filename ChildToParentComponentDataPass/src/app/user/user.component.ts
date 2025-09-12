import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() getUsers = new EventEmitter();
  users = ['Harsh', 'Kabir', 'Sujal', 'Ameer', 'Sameer'];

  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }
  loadData(){
    this.getUsers.emit(this.users);
  }
}
