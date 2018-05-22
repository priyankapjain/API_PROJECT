import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
  errorMsg: any;
  repos: any;
  fullName: any;
  name: any;
  people: any;
  showDiv: boolean = false;
  @Input() userName: string = '';
  @Input() data: any;

  constructor(private appservice: AppServiceService) { }

  ngOnInit() {
  }
  showDetails(username, type) {
    this.showDiv = !this.showDiv;
    if (type === 'details') {
      this.getUserData(username);
    }
  }
  getUserData(userName?: any) {
    this.appservice.getUserDetail(userName).subscribe(res => {
      this.repos = res;
    },
      error => {
        console.log("in error block");
        this.appservice.errorMsg = JSON.parse(error._body).message;
        setTimeout(()=>{
          this.appservice.errorMsg='';
        },2500);
      },
      () => { }
    );
  }
}
