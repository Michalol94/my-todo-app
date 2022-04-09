import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({ selector: 'lib-get-tasks', templateUrl: './get-tasks.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class GetTasksComponent {



  modalRef?: BsModalRef;
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll().pipe(tap(console.log));

  constructor(private modalService: BsModalService, @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort, @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort, @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onItemClicked(id: string): void {
    this._removesTaskDto.remove(id);
    this.modalRef?.hide()
  }

  onCheckedBox(task: any): void {
    if (task.isChecked === false) {
      this._setsTaskDto.set({
        id: task.id,
        isChecked: true,
      });
    } else {
      this._setsTaskDto.set({
        id: task.id,
        isChecked: false,
      });
    }
  }
}
