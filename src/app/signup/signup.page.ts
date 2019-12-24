import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { FirebaseauthService } from '../firebaseauth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userData: User = new User();
  hataMesaj;

  constructor(private authservis: FirebaseauthService, private route: Router) { }

  ngOnInit() {

  }

  async kayit() {

      const kullanici = await this.authservis.EpostaParolaKayitOl(this.userData);
      if (kullanici) {
        console.log('Kullanıcı oluşturuldu !');
        this.route.navigateByUrl('/home');
      }
    }



  }
