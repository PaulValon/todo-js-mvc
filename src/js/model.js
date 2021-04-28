import { Todo } from "./todo";


export class Model {
  constructor() {
    this.list = [];
  }

  addTodo(nouveauTodo) {
    if (nouveauTodo instanceof Todo) {
      this.list.push(nouveauTodo);
    }
  }


  removeTodo(rmTodo) {

    for (let index = 0; index < this.list.length; index++) {
      const item = this.list[index];
      if (rmTodo.label === item.label) {
        this.list.splice(index, 1);
      }

    }

// this.list = this.list.filter(item => item.label !== reTodo.label)



    // for (i = this.list.length - 1; i >= 0; i--) {
    //   if (todo.label === this.list[i].label) {
    //     this.label.splice(i, 1);
    //   }
    // }
  }
}

