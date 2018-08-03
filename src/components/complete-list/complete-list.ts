import { toDo } from './../../services/toDo.service';
import { Component } from '@angular/core';

/**
 * Generated class for the CompleteListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'complete-list',
  templateUrl: 'complete-list.html'
})
export class CompleteListComponent {

  completedItem=[];

  constructor(private todo:toDo) {
    this.completedItem=this.todo.getAllCompletedItems();
  }

}
