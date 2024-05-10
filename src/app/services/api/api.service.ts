import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDoc, query, setDoc, where} from '@angular/fire/firestore';
import { QueryFieldFilterConstraint} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }
  
  docRef(path: string) {
    return doc(this.firestore, path);
  }

  collectionRef(path) {
    return collection(this.firestore, path);
	}
   
  setDocument(path, data) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef,data); // Remove the <any> type argument here
  }
  
  addDocument(path, data) {
    const dataRef = this.collectionRef(path);
    return addDoc<any,any>(dataRef, data);
   }
   
  getDocById(path) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
   }
   
   getDocs(path, queryFn?) {
    let dataRef: any = this.collectionRef(path);
    if(queryFn) {
     const q = query(dataRef, queryFn);
     dataRef = q;
    }
   // return getDocs<DocumentData, any>(dataRef);
   return getDoc(dataRef);
     }
     
   collectionDataQuery(path, queryFn?) {
    let dataRef: any = this.collectionRef(path);
    if(queryFn) {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }
    return collectionData<any>(dataRef); // Return the Observable directly
  }
  

    whereQuery(fieldPath, condition, value) {
      return where(fieldPath, condition, value);
      }
   
}


