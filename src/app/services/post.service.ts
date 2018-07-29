import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// https://www.learnrxjs.io/operators/error_handling/catch.html

@Injectable({
  providedIn: 'root'
})

// to make an object of the derived class (PostService), we need to make an instance of Base Class (DataService) first: basics of inheritance, and thus we access the constructor of the base class using super()
export class PostService extends DataService {
  constructor(http: Http ) {
    super('https://jsonplaceholder.typicode.com/posts',http);
   }
}
