import { ErrorHandler } from "@angular/core";

// handling all the unexpected exceptions and errors
// https://angular.io/api/core/ErrorHandler
  
// creating GLOBAL ERROR HANDLER
export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        // instead of alert, we can have the toast notification
        alert('An unexpected error has occured.');
        console.log(error); // logging to the logs for later reviewing
    }
}