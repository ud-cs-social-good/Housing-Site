import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {
  private user_links = [
    {name: 'Forum', route: 'forum'}
  ]
  private admin_links = [
    {name: 'Forum', route: 'forum'}
  ]
  private nonuser_links = [
    {name: 'Forum', route: 'forum'}
  ]

  constructor() {
  }

  public getlinks() {
    return this.user_links
  }
}
