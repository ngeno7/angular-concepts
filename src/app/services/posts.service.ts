import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostResponse } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl : string = `https://dummyjson.com/posts`;

  constructor(private http: HttpClient) { }

  getPosts() {

    return this.http.get<PostResponse>(this.baseUrl);
  }

  getPost(id: string) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

}
