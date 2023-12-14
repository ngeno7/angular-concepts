import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[
    PostService
  ]
})
export class PostsComponent implements OnInit {

  posts: Post[] | undefined;
  total: number = 0;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response.posts
      this.total = response.total;
    });
  }

}
