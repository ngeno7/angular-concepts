import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'post-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  post: Post | undefined;

  constructor() { }

  ngOnInit() {
  }

}
