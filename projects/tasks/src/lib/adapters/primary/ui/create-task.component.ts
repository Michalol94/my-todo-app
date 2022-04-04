import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({ selector: 'lib-create-task', templateUrl: './create-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CreateTaskComponent {
  taskMessage = '';
  readonly createTask: FormGroup = new FormGroup({
    text: new FormControl()
  });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }

  onCreateTaskSubmited(createTask: FormGroup): void {
    this._addsTaskDto.add({
      text: createTask.get('text')?.value
    });

    this.createTask.reset();
  }
}
