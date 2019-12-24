import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private afauth: AngularFireAuth, private route: Router) { }

  cikisYap() {
    this.afauth.auth.signOut();
    this.route.navigateByUrl('/');
  }

}
