import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home-heroe',
  templateUrl: './home-heroe.component.html',
  styles: [`
    .container{
      padding:25px;
    }
`]
})
export class HomeHeroeComponent implements OnInit {


  get auth(){
    return this.authService.Auth;
  }
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth'])
  }

}
