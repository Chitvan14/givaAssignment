import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Users } from '../model/User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersCollection!: AngularFirestoreCollection<Users>;
  users: Observable<any[]>;
  userDoc!: AngularFirestoreDocument<Users>;
  constructor(angularfirestore: AngularFirestore) {
    this.users = angularfirestore.collection('users').valueChanges();
  }

  getUsers() {
    return this.users;
  }
}
