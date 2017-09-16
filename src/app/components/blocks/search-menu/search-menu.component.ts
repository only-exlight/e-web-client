import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  @Input() private hiden: boolean;

  private pioples: boolean = false;
  private events: boolean = false;
  private groups: boolean = false;
  private projects: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  private search() {

  }

  private piopleSwicher() {
    this.pioples = !this.pioples;
  }

  private eventsSwicher() {
    this.events = !this.events;
  }

  private groupsSwicher() {
    this.groups = !this.groups;
  }
  
  private projectsSwicher() {
    this.projects = ! this.projects;
  } 
}
