import { Component } from '@angular/core';


interface addTodoInterface {
  Todoname: string;
  Tododate: string;
  Todocategory: string;
}


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})


  
export class addTodoComponent {
  inputStyle = 'form-control my-2';
  public name = '';
  public date = '';
  public category = '';
  public addtodoArray: addTodoInterface[] = [];

  addtoTodo() {
    console.log(this.name);
    let todoObject: addTodoInterface = {
      Todoname: this.name,
      Tododate: this.date,
      Todocategory: this.category,
    };

    this.addtodoArray.push(todoObject);
    console.log(this.addtodoArray);
    
    this.name = '';
    this.date = '';
    this.category = '';
  }
    deleteTodo(index: number) {
    this.addtodoArray.splice(index, 1);
  }
  
//   isEditing: number | null = null;

// startEditing(index: number) {
//   this.isEditing = index;
// }

// saveEdit(index: number) {
//   this.isEditing = null;
// }
}

