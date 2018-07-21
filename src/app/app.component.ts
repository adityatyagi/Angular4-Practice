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

  courses = [1];

  // define a field to keep track of currently selected tab
  viewMode = 'map';

  players = [
    {id: 1, name: 'Aditya'},
    {id: 2, name: 'Aishwarya'},
    {id: 3, name: 'Priyanka'},
    {id: 4, name: 'Ayush'},
  ]

  onAdd(){
    this.players.push({id:5,'name': 'Anant'});
  }
  onRemove(player){
    let index = this.players.indexOf(player);
    this.players.splice(index,1);
  }
  onChange(player){
    player.name="Update Name";
  }

  candies;
  loadCandies(){
    this.candies = [
      {id: 1, name:'KitKat'},
      {id: 2, name:'Brownie'},
      {id: 3, name:'Perk'},
      {id: 4, name:'Eclairs'},
    ]
  }

  trackCandies(index, candies){
    return candies ? candies.id : undefined
  }

  // for ngStyle
  canSave = false;

  //safe traversal operator
  task = {
    title:'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }

  
}
