import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../scss/style.scss'
import { Todo } from './todo.js';
import { Model } from './model.js'
import { View } from './view';

let todoInstance = new Todo('do stuff', 3);

console.log(todoInstance);


let modelInstance = new Model();

modelInstance.addTodo(todoInstance);
modelInstance.addTodo(new Todo ('do other things', 1));
modelInstance.addTodo(new Todo ('do bloup', 1));



modelInstance.removeTodo(todoInstance);
console.log(modelInstance);


let viewInstance = new View(modelInstance);
console.log(viewInstance);





// viewInstance.display();



viewInstance.initialization();
