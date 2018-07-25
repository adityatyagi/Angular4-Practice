import { AbstractControl, ValidationErrors} from '@angular/forms'
import { resolve } from 'url';

// implementing custom validators functions for better control over the validation
export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            // name of validation error: cannotContainSpace
            // can be required () as value
            return { cannotContainSpace: true};
        }
        return null;
    }

    // fir checking if the username is unique or not - async functions
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
           // resolve: return value to the consumer
           // reject: return the error message 

            // simulating a server with a delay of 2s
            setTimeout(() => {
                if(control.value === 'mosh')
                    resolve({shouldBeUnique: true});
                else
                    resolve(null);
            },2000);
            });
    }
}