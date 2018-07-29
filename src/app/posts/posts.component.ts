import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
 

 
  constructor(private service: PostService) {
  }

  ngOnInit() {
    // READ
    this.service.getAll()
      // .subscribe(
      //   response => {
      //   this.posts = response.json();
      //   console.log(this.posts);
      // });

      // now the subscribe gives back an array of objects in posts
      .subscribe(posts => {this.posts = posts;});
  }

  // CREATE
  createPosts(input: HTMLInputElement){
    let post = {title: input.value};

    // adding immeditately because of the "Optimistic Update"
    // adding at the beginning of the list, to add the back of the list, use push()
    this.posts.splice(0,0,post);

    // clearing the input after adding
    input.value='';

    this.service.create(post)
      // this will now give back the actual new object after creating the new post: newPost
      .subscribe(
        newPost => {
        post['id'] = newPost.id;

        // adding at the beginning of the list, to add the back of the list, use push()
        // this.posts.splice(0,0,post)
        
        console.log(newPost); 
        
      },
        (error: AppError) => {

          this.posts.splice(0,1); // if the create doesn't work as expected, then delete the FAKE ADDITION from top of the list: ROLL BACK THE CHANGES

          if(error instanceof BadInput){
            // if we have a complex from and we need to show the errors inside the form, we send the error obejct we get form the server which has key-vlaue pairs
            //this.form.setErrors(error.json())
            // this.form.setErrors(error.originalError)

            alert('BAD REQUEST ERROR');
          }else{
            // rethrow the error so that it can bubble up to the Global Error Handler made by us, which further replaces the Angulars in-built error handler ErrorHandler
            throw error;
          }
          
        }
      
    );
  }

  // UPDATE
  updatePost(post){

    // sending only the changes made to the obhect
    this.service.update(post)
    .subscribe(
      updatedPost=>{
      console.log(updatedPost);
    });
    
    // sending the entire object
    // this.http.put(this.url + '/'+ post.id, JSON.stringify(post))
    // .subscribe(response=>{
    //   console.log(response.json());
    // });
  }

  // DELETE
  deletePost(post){

    // deleting the post immediately for OPTIMISTIC UPDATE
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // deleting a particular post from the server and then deleting it in the DOM
    this.service.delete(post.id)
      .subscribe(
        // (): because the delete returns an empty object
        () => {

        // once the response comes, that means it is deleted from the server and now you have to reflect the changes in the DOM.
        // let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);
      },
        (error: AppError) => {

          // roll back changes on error
          this.posts.splice(index, 0, post);
          
          if(error instanceof NotFoundError){
            alert("This post has already been deleted.");
          }else{
            throw error;
          }
        });
  }

}
