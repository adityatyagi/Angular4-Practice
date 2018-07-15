import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aditya app';
  imageUrl="https://cdn-images-1.medium.com/max/2000/1*onOz3XTSnXa6Jueo4k0InQ.jpeg";

  //getting the object from the server
  post= {
  title: "Title",
  isFavorite: true
  };

  //event handler for the custom event raised by the click, we are now passing data while raising the event
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log('Favorite changed: '+eventArgs);
  }
}
