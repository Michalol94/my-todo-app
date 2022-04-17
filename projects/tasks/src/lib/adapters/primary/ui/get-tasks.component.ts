import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../../../application/ports/secondary/sets-task.dto-port';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-get-tasks',
  templateUrl: './get-tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetTasksComponent {
  modalRef?: BsModalRef;
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll().pipe(
    map((taskList: TaskDTO[]) => taskList.sort((a, b) => a.date - b.date)),
    tap((taskList: TaskDTO[]) => this.goHome(taskList))
  );

  // (tap(console.log));

  constructor(
    private modalService: BsModalService,
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    private router: Router
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // routerLink() {
  //   this.router.navigate(['/']);
  // }

  decline(): void {
    this.modalRef?.hide();
  }

  onItemClicked(id: string): void {
    this._removesTaskDto.remove(id);
    this.modalRef?.hide();
    // if (this.tasks$ === null) {
    //   this.router.navigate(['/']);
    // }
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
  alerts: any[] = [
    {
      type: 'success',
      msg: `Task deleted!`,
      timeout: 1,
    },
  ];

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `Task deleted!`,
      timeout: 2000,
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }

  goHome(taskList: TaskDTO[]): void {
    if (taskList.length < 1) {
      this.router.navigate(['/']);
    }
  }
}
