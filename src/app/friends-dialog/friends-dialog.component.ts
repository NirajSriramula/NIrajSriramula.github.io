import { Component } from '@angular/core';
@Component({
  selector: 'app-friends-dialog',
  templateUrl: './friends-dialog.component.html',
  styleUrls: ['./friends-dialog.component.css']
})
export class FriendsDialogComponent {
  friends = FRIENDS;
  constraints = constraint;
  call(){
    console.log("Calling ");
    //Calling API.
    
  }
}
class Friend{
  id:number;
  name:string;
    constructor(id:number, name:string){
      this.id = id;
      this.name = name;
    }
  } 
  const constraint: MediaStreamConstraints = {
    'video': true,
    'audio': true
  }
  export const FRIENDS: Friend[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];