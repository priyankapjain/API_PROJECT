import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {
  searchString:any="";
  username:string="";
  errorMsg:string='';
url ="https://api.github.com/search/users?q=";
url1 ="https://api.github.com/users/";
// "https://api.github.com/users/varun/repos";
  constructor(private http :Http) { }
  getUser():Observable<any>{
    return this.http.get(this.url+this.searchString).map(res => res.json());
    
  }
  getUserDetail(username?:any):Observable<any>{
    return this.http.get(this.url1+username+'/repos').map(res => res.json());
    
  }

  }

  

