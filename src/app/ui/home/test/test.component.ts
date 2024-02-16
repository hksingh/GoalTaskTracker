import { Component, OnInit, inject } from '@angular/core';
import { TestService } from '../../shared/service/test.service';
import { Observable, map, tap } from 'rxjs';
import { TaskTypeModel } from '../../shared/model/tasktype';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-test',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  testService = inject(TestService);
  public tasktypeList$: Observable<TaskTypeModel[]> | undefined;

  ngOnInit(): void {
    console.log('In init');
    this.tasktypeList$ = this.testService.getAll().valueChanges();

  }

  // createTaskType(){
  //   var tasktypeList: TaskTypeModel[] = [
     
  //     {
  //       id: 2, tasktypename: 'Interview'
  //     },
  //     {
  //       id: 3, tasktypename: 'Work'
  //     },  {
  //       id: 4, tasktypename: 'Job Search'
  //     },
  //     {
  //       id: 5, tasktypename: 'Lose 20 lbs'
  //     },
  //     {
  //       id: 6, tasktypename: 'Family'
  //     },
  //     {
  //       id: 7, tasktypename: 'Miscellaneous'
  //     }
  //   ];
    
  //   tasktypeList.forEach(x => {
  //     this.testService.create(x);
  //   })
  // }
}
