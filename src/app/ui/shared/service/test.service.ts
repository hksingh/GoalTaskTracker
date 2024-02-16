import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TaskTypeModel } from '../model/tasktype';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    private dbPath = '/tasktype';

    taskTypeRef: AngularFirestoreCollection<TaskTypeModel>;
    
    constructor(private db: AngularFirestore) {
      this.taskTypeRef = db.collection(this.dbPath);
    }
  
    getAll(): AngularFirestoreCollection<any> {
      return this.taskTypeRef;
    }
  
    create(tutorial: TaskTypeModel): any {
      return this.taskTypeRef.add({ ...tutorial });
    }
  
    // update(id: string, data: any): Promise<void> {
    //   return this.tutorialsRef.doc(id).update(data);
    // }
  
    // delete(id: string): Promise<void> {
    //   return this.tutorialsRef.doc(id).delete();
    // }
}