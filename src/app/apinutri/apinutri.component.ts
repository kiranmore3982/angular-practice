import { Component, OnInit } from '@angular/core';
import {ApitestService} from '../apitest.service';

@Component({
  selector: 'app-apinutri',
  templateUrl: './apinutri.component.html',
  styleUrls: ['./apinutri.component.css']
})
export class ApinutriComponent implements OnInit {

  apidata;

  constructor(public apitest:ApitestService) { 
    this.fetchFoodNew();
  }

  ngOnInit() {
  }

  fetchFoodNew()
  {
    this.apitest.getFoodListNew().subscribe(
      resNew=>{
        console.log(resNew);
        this.apidata = resNew;
      }

    );
  }
}
