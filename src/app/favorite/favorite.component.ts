import { EmailService } from './../email.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
 @Input('isFavorite') isSelected: boolean;
 @Output('change') clickFav = new EventEmitter();

 text = "hello";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
  //toggle
  console.log("In FavoriteComponent");
  this.isSelected=!this.isSelected;

  // raising an event, publishing an event
  // then the function onFavoriteChange() is called.
  // passing isSelected - new state of the icon
  this.clickFav.emit({newValue: this.isSelected});

  }

}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}
