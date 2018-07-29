import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


// https://www.learnrxjs.io/operators/error_handling/catch.html

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http ) { }

    // with "map" operator, we can transfor the items into obeservables
    getAll(){
      // returning the obeservable from the HTTP obejct
      return this.http.get(this.url).pipe(
          map(response => response.json()),
          catchError(this.handleError)
      );
    }

    create(resource){

        // temporary throw an error
        //return throwError(new AppError);


      // returning the obeservable from the HTTP obejct
        return this.http.post(this.url,JSON.stringify(resource)).pipe(
          map(response => response.json()), 
         catchError(this.handleError)
        )
    }

    update(resource){
      // returning the obeservable from the HTTP obejct
      return this.http.patch(this.url + '/'+ resource.id, JSON.stringify({isRed: true})).pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
    }

    delete(id){

        // temp return error
        //return throwError(new AppError);
        
      // returning the obeservable from the HTTP obejct
      return this.http.delete(this.url+'/'+id).pipe(

        // https://www.learnrxjs.io/operators/error_handling/catch.html
        //catchError(val => of(`I caught: ${val} )`))

        map(response => response.json()),
        // error is the error thrown by server
        catchError(this.handleError)
      );
    }
  
    // for ERROR 404
    private handleError(error: Response){

      // ERROR - 404
      if(error.status === 404){
        // throws an observable that has an error and the type of error is specific to application which is a NOT FOUND ERROR and that is a Application Error
        return throwError(new NotFoundError());
      }

      // ERROR - 400
      else if(error.status === 400){
        // pass application specific error object
        // we include the "error" object in BadInput(error) because it contains the data about the invalid fields. thowError() is a factory operator
        throwError(new BadInput(error.json()));
      }
      
      // ERROR - GENERAL
      else{
        // throws an observable that has an error and the type of error is specific to application
        return throwError(new AppError(error.json()));
      }
    }


}
