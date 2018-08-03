import { Injectable } from "@angular/core";

@Injectable()
export class toDo {

    toDoItems=[];
    progressItems=[];
    completedItems=[];

    addNewToDo(newItem:string){
        this.toDoItems.push(newItem);

    }
 getAllToDoItems():any{

    return this.toDoItems;
 }
  addToProgress(index:number){
     this.progressItems.push(this.toDoItems[index])
     this.removeTaskToDo(index);
     console.log(this.progressItems);
  }

  removeTaskToDo(index:number){
      this.toDoItems.splice(index,1);

  }
  removeProgressTask(index:number){
    this.progressItems.splice(index,1);

}
  getAllProgressItems()
{
    return this.progressItems;
}
   addToCompleted(index:number){
       this.completedItems.push(this.progressItems[index])
       this.removeProgressTask(index);
   }
  getAllCompletedItems(){

    return this.completedItems;
  }
}