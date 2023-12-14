import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  post: Post | undefined;
  urlP: any;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.urlP = this.route.snapshot.paramMap.get('id');
    this.getPost();
  }

  getPost() {
    this.postService.getPost(this.urlP).subscribe(response => {
      this.post = response
    });
  }

}
