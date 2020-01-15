import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/forum/posts.service'

@Component({
  selector: 'app-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.scss']
})
export class ForumsPageComponent implements OnInit {
  posts = []
  constructor(private _post_svc: PostsService) { }

  ngOnInit() {
    this.posts = this._post_svc.getposts()
  }

  public createPost(PostTitle:String) {

  }

}
