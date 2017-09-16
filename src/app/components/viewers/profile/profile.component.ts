import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile = new Profile();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/main',{outlets:{viewer:['profile',{outlets:{profile_outlet:['edit-general']}}]}}]);
  }

}
