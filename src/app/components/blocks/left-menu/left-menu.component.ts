import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  @Output('resizeEvent') private resizeEvent = new EventEmitter();
  private active: Array<boolean> = [false,false,false,false,false,false,false,false,false];

  constructor() { }

  ngOnInit() {
  }

  private resize(index:number) {
    for (let i = 0; i < this.active.length; i++){
      this.active[i] = false;
    }
    this.active[index] = true;
    this.resizeEvent.emit(index);
  }

}
