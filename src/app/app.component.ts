import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  selectOption: any=null;
  userNameValue: any;
  showDiv: boolean=false;
  people:any;
  peopleItem:any=[];
  result:number=0;
  Options:any=[];
  p: number = 1;

  
  ngOnInit(): void {
  //this.getUserData();
  }
  constructor(private appservice :AppServiceService) {
    this.Options=[ "Name(A-Z)" , "Name(Z-A)" ,"Rank ↑", "Rank ↓"]
   }
  onKey(e){
    this.getUserData();
  }
 
  getUserData(){
    this.appservice.getUser().subscribe(people =>{
       this.people = people;
        this.result=this.people['total_count'];
        this.sortFunctionByUser(people.items);
    },
    error =>{
      console.log("in error block");
    },
    ()=>{}
  );
  }
  showDetails(user){
    this.showDiv = !this.showDiv;
    this.userNameValue = user;
  }

  onSelectionChange(selectedItem:any){
     console.log('***',selectedItem);
     if(this.peopleItem.length>0)
     this.sortFunctionByUser(this.peopleItem);
  }

  sortFunctionByUser(data){
    if(this.selectOption === 'Name(A-Z)'){
      this.peopleItem = this.sortByUsername(data);
    } else if(this.selectOption === 'Name(Z-A)'){
      let items_sort=  this.sortByUsername(data);
      this.peopleItem = items_sort.reverse();
    } else if(this.selectOption === 'Rank ↑'){
      this.peopleItem=  this.sortByRank(data);
    } else if(this.selectOption === 'Rank ↓'){
      let items_sort=  this.sortByRank(data);
      this.peopleItem = items_sort.reverse();
    }else{
      this.peopleItem=data;
    }
  }

  sortByUsername(arrayN:any){
    return arrayN.sort(function(a, b){
      return a.login.toLocaleLowerCase() == b.login.toLocaleLowerCase() ? 0 : +(a.login.toLocaleLowerCase() > b.login.toLocaleLowerCase()) || -1;
    });
  }
  sortByRank(arrayN:any){
    return arrayN.sort(function(a, b){
      return a.score == b.score ? 0 : +(a.score > b.score) || -1;
    });
  }
 
 
}
