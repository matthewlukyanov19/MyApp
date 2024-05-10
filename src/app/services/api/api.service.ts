import { Injectable } from '@angular/core';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }
  
  docRef(path: string) {
    return doc(this.firestore, path);
  }
   
  setDocument<T>(path: string, data: T) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef, data); // Remove the <any> type argument here
  }

  getDocById(path) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
   }
   
}


