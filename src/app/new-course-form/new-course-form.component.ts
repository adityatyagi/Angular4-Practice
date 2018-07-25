import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{

  
  // FOR FORM ARRAY
  // -------------------------

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){

    // casting as an array using "as Array" so that we can use the .push()
    // topic.value will give the input field value as it is the template variable 
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
  

  /*
  // FOR FORM BUILDER
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  // using angular class to build the form
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
  */


}
