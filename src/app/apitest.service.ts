import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(public http:HttpClient) { }

  public getFoodListNew()
  {

    let paramsarr = new HttpParams().set('ingr','apple');

    let headers = new HttpHeaders({
      'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'x-rapidapi-key': 'cdfb812bbbmsh8bbebdb596bcff3p17897bjsn4df7e9066241'
    });

    return this.http.get('https://edamam-food-and-grocery-database.p.rapidapi.com/parser',{headers:headers,params:paramsarr});
  }
}
