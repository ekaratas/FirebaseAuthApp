import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  public user: firebase.User;
  public isLogged: any = false;

  constructor(private firestore: AngularFirestore, public firebaseAuth: AngularFireAuth) {
    firebaseAuth.authState.subscribe(kullanici => {this.user = kullanici; this.isLogged = kullanici; });
      }

      async EpostaParolaGirisYap(user: User) {
        try {
          return await this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        } catch (error) {
          console.log('Kullanıcı Giriş Hatası : ', error);
        }
      }

      async EpostaParolaKayitOl(user: User) {
      try {
        return await this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      } catch (error) {
        console.log('Kullanıcı Kayıt Hatası : ', error);
      }
      }

      async sifreSifirla(eposta) {
      try {
        return await this.firebaseAuth.auth.sendPasswordResetEmail(eposta);
     }  catch (error) {
      console.log('Şifre Sıfırlama Hatası : ', error);
    }
    }
}
