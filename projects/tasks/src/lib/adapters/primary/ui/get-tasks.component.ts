import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({ selector: 'lib-get-tasks', templateUrl: './get-tasks.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class GetTasksComponent {



  modalRef?: BsModalRef;
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(private modalService: BsModalService, @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort, @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onItemClicked(id: string): void {
    this._removesTaskDto.remove(id);
    this.modalRef?.hide()
  }


}
