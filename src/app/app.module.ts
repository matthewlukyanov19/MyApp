import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: 
  [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       provideFirebaseApp(() => initializeApp({"projectId":"chat-app-2f891","appId":"1:6297141842:web:c04fa72b0fd5182905558b","storageBucket":"chat-app-2f891.appspot.com","apiKey":"AIzaSyCE-Tnt4Si085uG8TvknVa-jjdb2ZkbJU8","authDomain":"chat-app-2f891.firebaseapp.com","messagingSenderId":"6297141842","measurementId":"G-Q13FECH0P6"})),
        provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
