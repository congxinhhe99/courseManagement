import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css'],
})
export class InforComponent implements OnInit {
  public datauser: any = [
    {
      name: 'John Doe',
      email: 'conganhiikk9@gmail.com',
      phone: '0372867008',
    },
  ];
  public isboolean = true;
  isDisplay() {
    this.isboolean = !this.isboolean;
  }

  constructor( private router: Router,
    private authenticationService: AuthenticationService) {}

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
