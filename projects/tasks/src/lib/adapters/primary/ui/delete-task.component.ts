import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  TASK_DTO_STORAGE,
  TaskDtoStoragePort,
} from '../../../application/ports/secondary/task-dto.storage-port';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';
import {
  AlertDtoStoragePort,
  ALERT_DTO_STORAGE,
} from '../../../application/ports/secondary/alert-dto.storage-port';

@Component({
  selector: 'lib-delete-task',
  templateUrl: './delete-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTaskComponent {
  constructor(
    @Inject(TASK_DTO_STORAGE)
    private _getTaskFromMemoryStorage: TaskDtoStoragePort,
    @Inject(REMOVES_TASK_DTO)
    private _removesTaskDto: RemovesTaskDtoPort,
    public modalRef: BsModalRef,
    @Inject(ALERT_DTO_STORAGE) private _alertDtoStorage: AlertDtoStoragePort
  ) {}

  task$: Observable<TaskDTO> = this._getTaskFromMemoryStorage.asObservable();

  async confirm(id: string): Promise<void> {
    this._removesTaskDto.remove(id);
    this._alertDtoStorage.next({ alertId: id });
    this.modalRef?.hide();
    await delay(4000);
    this._alertDtoStorage.next(undefined);
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
