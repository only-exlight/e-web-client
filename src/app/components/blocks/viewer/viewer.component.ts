import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input() private hiden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
