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

  public checkpost()
  {
    let movies =['Bajrangi Bhaijan','Tanhaji'];
    let paramsarr1 = new HttpParams();
    paramsarr1 = paramsarr1.append('name', 'Kiran');
    paramsarr1 = paramsarr1.append('movies', movies.join(', '));
    
    return this.http.post('https://reqres.in/api/users',{params:paramsarr1});
  }
}
