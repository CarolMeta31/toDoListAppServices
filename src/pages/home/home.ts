import { toDo } from './../../services/toDo.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  newItem:string;
  toDoItems=[];
   progressItems=[];

 //inject service in constructor
  constructor(public navCtrl: NavController,private ToDo:toDo) {

  }
 
 

  addNewToDo(){
   if(this.newItem !==''){
    //  this.toDoItems.push(this.newItem);
      this.ToDo.addNewToDo(this.newItem);//uses the service

     this.newItem='';
     this.getAllToDoItems()
   }
   
}

      getAllToDoItems(){
           this.toDoItems=this.ToDo.getAllToDoItems();

    
             }

  addToProgress(index:number){
    this.ToDo.addToProgress(index);//calls the method from the services

    
  }

}