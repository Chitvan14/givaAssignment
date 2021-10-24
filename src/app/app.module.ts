import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'givaProject'),
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
