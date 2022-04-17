import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  task$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  // .pipe(tap((taskList: TaskDTO[]) => this.goHome(taskList)));

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    private router: Router
  ) {}

  goHome(taskList: TaskDTO[]): void {
    if (taskList.length < 1) {
      this.router.navigate(['/firstTask']);
    } else {
      this.router.navigate(['/addTask']);
    }
  }
}
