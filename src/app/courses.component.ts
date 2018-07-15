import { CoursesService } from './course/courses.services';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    
    <table>
        <tr>
            <td [attr.colspan]="colSpan">Hello</td>
        </tr>
    </table>

    <button class="btn btn-primay" [class.active]="isActive">Save</button>

    <p [style.color]="isActive? 'blue': 'red'">This is my Name Aditya tyagi</p>

    <div (click)="ondiv2Click()">
    <div (click)="ondiv1Click()">
    <button (click)="onButtonClick($event)">Click Me</button>
    </div>
    </div>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

    <br/>
    {{course.title | uppercase }} <br/>
    {{course.price | currency:'AUD' }} <br/>
    {{course.students | number }} <br/>
    {{course.rating | number:'2.2-2' }} <br/>
    {{course.dateRelease | date:'shortDate' }} <br/>

    {{ text | summary }}
    `
})
export class CoursesComponent{
    title = "List of courses";
    name = "Aditya Tyagi"
   
    colSpan = "2";
    isActive=false;

    onButtonClick($event){
        //$event.stopPropagation();
        console.log("Button was clicked", $event);
        
    }

    ondiv1Click(){
        console.log("div 1");
    }

    ondiv2Click(){
        console.log("div 2");
        
    }

    email = "tyagi.aditya844747@gmail.com";
    onKeyUp(){
        console.log('Value entered: '+this.email);
        
    }

    course = {
        title: "The complete angular course",
        dateRelease: new Date(2018,3,1),
        rating: 4.975,
        students: 30154,
        price: 190.54
    }

    text="this is the best thing that could happen to me in the long run."
}