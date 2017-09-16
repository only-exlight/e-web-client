import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  private hiden: boolean = true;
  private index: number;
  constructor() { }

  ngOnInit() {
  }

  private proverka(event) {
    if (event == this.index){
      this.hiden = !this.hiden;
    } else {
      this.hiden = false;
    }
    this.index = event;
  }

}
