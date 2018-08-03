import { toDo } from './../../services/toDo.service';
import { Component } from '@angular/core';

/**
 * Generated class for the DoingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {

  progressItems=[];

  constructor(private todo:toDo ) {
    this.progressItems=this.todo.getAllProgressItems();
    console.log(this.progressItems)
  }

  addToCompletedItems(index:number){
    this.todo.addToCompleted(index);
  }

}


