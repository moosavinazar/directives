import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCorrect: boolean = true;

  users: string[] = ['hasan', 'asiye', 'mohamad', 'ali', 'foad'];

  usersObj: any = [
    {
      id: 1,
      name: 'hasan'
    },
    {
      id: 2,
      name: 'asiye'
    },
    {
      id: 3,
      name: 'mohamad'
    },
    {
      id: 4,
      name: 'ali'
    },
    {
      id: 5,
      name: 'foad'
    }
  ];

  public addNewUser() {
    this.usersObj = [
      {
        id: 1,
        name: 'hasan'
      },
      {
        id: 2,
        name: 'asiye'
      },
      {
        id: 3,
        name: 'mohamad'
      },
      {
        id: 4,
        name: 'ali'
      },
      {
        id: 5,
        name: 'foad'
      },
      {
        id: 6,
        name: 'javad'
      },
    ];
  }
}
