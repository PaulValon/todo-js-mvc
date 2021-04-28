1er étape

consigne :
1- Créer un fichier todo.js
2- Dans ce fichier, créer une classe Todo et en faire un export (js modulaire toussa), elle aura comme propriété : label en string, checked en boolean (false par défaut) et priority en number(modifié)
3- Ajouter une méthode check qui fera passer la propriété checked de true à false ou de false à true

-----------------------------------------------------

export class Todo {
  constructor(label, priority, checked = false) {
    this.label = label;
    this.priority = priority;
    this.checked = checked;
  }
  check() {
    this.checked = !this.checked;

    // identique à ça

    //     if(this.checked) {
    //       this.checked = false;
    //     }
    //     else {
    //       this.checked = true;
    //     }
    //   }

  }
}


---------------------------------------------------

2eme étape
importer le ficher dans index.js

import {Todo} from './todo.js';

---------------------------------------------------

3eme étape 
création d'un nouvel objet pour tester

let instanceTodo = new Todo('do stuff', 3);

console.log(instanceTodo);


----------------------------------------------------

4eme etape

4. Créer un fichier model.js(modifié)
5. Dans ce fichier, créer et exporter une classe Model qui aura en propriété une liste vide (pas d'argument dans le constructeur)

----------------------------------------------------
export class Model {
  constructor() {
    this.list = [];
  }
----------------------------------------------------



6. Ajouter à cette classe une méthode addTodo qui attendra en paramètre un todo et ajoutera celui ci à la propriété list de la classe

----------------------------------------------------


 addTodo(nouveauTodo) {
    if (nouveauTodo instanceof Todo) {
      this.list.push(nouveauTodo);
    }
  }


----------------------------------------------------




7. Ajouter ensuite une méthode removeTodo qui attendra également un todo en paramètre et fera en sorte de retirer le todo en question de la propriété list de la classe
👍🏽1
Plusieurs manières pour ce point : 
a) avec une boucle for classique, dont on se sert pour parcourir les valeurs actuelles de la list et lorsqu'on tombe sur un todo dont le label correspond à celui de l'argument, on utilise un splice() pour supprimer cet élément
b) en utilisant un indexOf sur la list en lui donnant comme argument le paramètre todo, et en faisant un splice avec ce que nous aura donné cette méthode
c) (un poil plus compliquée à saisir) avec la méthode filter sur la list 


  removeTodo(rmTodo) {

    for (let index = 0; index < this.list.length; index++) {
      const item = this.list[index];
      if (rmTodo.label === item.label) {
        this.list.splice(index, 1);
      }

    }


    -------------------------------------------------------

    III. La Vue
1. Créer un fichier view.js et dans ce fichier, faire et exporter une class View
👌5
2. La classe view aura une propriété model qui contiendra une instance de la class Model (faire l'instance en paramètre par défaut du constructeur)(modifié)
👌5

import { Model } from "./model";

export class View {
  constructor(model = new Model()){
  this.model=model;
  }

  ---------------------------------------------------------


3. La classe View aura également une méthode display() dont le rôle sera de généré le HTML à partir des données du Modèle (this.model.list)
👌4
a) Rajouter dans le index.html une balise html qui sera le receptacle de notre vue
👌4

<div id="receptacle"></div>


-----------------------------------------------------------

Jean Simplon - Aujourd'hui à 10:00
b) Dans la méthode, faire une querySelector de cette balise puis remettre son contenu à zéro
👌3

display(){
    let div = document.querySelector('#receptacle');
    div.innerHTML='';
}

----------------------------------------------------------


c) Ensuite, faire une boucle for...of sur la list de Todo contenue dans le Model
👌4
d) Dans cette boucle, commencer par juste créer un élément HTML et lui mettre en textContent la valeur du label du Todo actuel
👌2


for (let list of this.model.list) {
      console.log(list)
      
      let p = document.createElement('p');
      div.appendChild(p);
      p.textContent=list.label;
      
    }

-------------------------------------------------------

4. Pour tester tout ça, on va dans notre index.js, on fait un import de la classe View puis on en fait une instance et on lui donne comme Model l'instance qu'on avait fait avec nos tests d'hier puis on déclenche la méthode display() de l'instance view(modifié)


let viewInstance = new View(modelInstance);
console.log(viewInstance);

viewInstance.display();

---------------------------------------------------------



