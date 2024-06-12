import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  name = 'angelo'

  constructor() { }

  handleClickButton(event: any) {
    const name = event.currentTarget.name
    if (name === 'btn1') {
      console.log('btn1 clicado')
    }
  }
}
