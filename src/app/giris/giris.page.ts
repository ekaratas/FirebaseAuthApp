import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-giris',
  templateUrl: './giris.page.html',
  styleUrls: ['./giris.page.scss'],
})
export class GirisPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  kayit() {
    this.route.navigateByUrl('/signup');
    }

    giris() {
      this.route.navigateByUrl('/login');
    }

}
