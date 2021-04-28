import { Model } from "./model";
import { Todo } from "./todo";

export class View {
  constructor(model = new Model()) {
    this.model = model;
  }

  initialization() {
    this.display();



    let form = document.querySelector('#formTodo');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // récupérer les valeurs des inputs du form avec des querySelector
      let inputLabel = document.querySelector('#label').value;
      let inputPriority = document.querySelector('#priority').value;

      // créer une instance Todo avec les valeur du formulaire

      let nouveauTodo = new Todo(inputLabel, inputPriority);
      console.log(nouveauTodo);
      // cette instance on va la donner au addTodo de la propriété model

      this.model.addTodo(nouveauTodo)
      console.log(this.model);
      // relancer la méthode display
      
      this.display();

    });
  }



  display() {
    let div = document.querySelector('#receptacle');
    div.innerHTML = '';

    for (let list of this.model.list) {
      console.log(list)

      let p = this.todoHTML(list);
      div.appendChild(p);

    }
  }


  todoHTML(list) {
    let p = document.createElement('p');
    p.textContent = list.label;
    return p;
  }
}