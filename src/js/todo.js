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