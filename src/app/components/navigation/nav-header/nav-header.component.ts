import { Component, OnInit } from '@angular/core';
import { NavLinksService } from '../services/nav-links.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  public links = []
  constructor(private _navlink_svc: NavLinksService) { }

  ngOnInit() {
    this.links = this._navlink_svc.getlinks()
  }

}
