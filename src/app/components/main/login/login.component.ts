import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private swicher: boolean = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    setInterval(()=>{

    },2000);
  }

  private swichMod(param:boolean) {
    this.swicher = param;
  }

  private login() {
    this.authService.sendLoginInfo();
  }

  private registration() {
    this.authService.sendRegistrationInfo();
  }

}
