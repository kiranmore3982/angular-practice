import { Component, OnInit } from '@angular/core';
import {ApitestService} from '../apitest.service';

@Component({
  selector: 'app-apipost',
  templateUrl: './apipost.component.html',
  styleUrls: ['./apipost.component.css']
})
export class ApipostComponent implements OnInit {

  constructor(public apitest:ApitestService) { 
    this.checkPostApi();
  }

  ngOnInit() {
  }

  checkPostApi()
  {
      this.apitest.checkpost().subscribe(
        resPost=>{
          console.log(resPost);
        }

      );
  }

}