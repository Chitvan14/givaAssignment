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
  constructor(private angularfirestore: AngularFirestore) {
    this.users = this.angularfirestore.collection('users').valueChanges({idField : 'id'});
    this.usersCollection = this.angularfirestore.collection<Users>('users');
  }

  getUsers() {
    return this.users;
  }

  updateUser(user : Users){
    this.angularfirestore.doc(`users/${user.id}`).update(user);
  }
}
