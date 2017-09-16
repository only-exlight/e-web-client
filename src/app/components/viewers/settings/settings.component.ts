import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    this.router.navigate(['/main',{outlets:{viewer:['settings',{outlets:{settings_outlet:['general']}}]}}]);
  }
  
}
