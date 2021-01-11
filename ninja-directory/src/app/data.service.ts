import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpdata: HttpClient) { }

  fetchData(){
    return this.httpdata.get('/ninjas.json').subscribe(

      
      (data)=> console.log(data)
    );
  }


}
