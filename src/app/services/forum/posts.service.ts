import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  public getposts() {
    return [
      {
        title: 'Looking for Roomates!',
        username: 'SunBear782',
        location: '415 Moonlight Lane, Redsburg, ND',
        date: 'January 1, 2020',
        comments: [],
      },
      {
        title: 'Available Subletting',
        username: 'fish27',
        location: '27 River Road, Maine City, ME',
        date: 'January 1, 2020',
        comments: [],
      }
    ];
  }
}
