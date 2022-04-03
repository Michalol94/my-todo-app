import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTasksComponent } from './get-tasks.component';

@NgModule({ imports: [CommonModule],
  	declarations: [GetTasksComponent],
  	providers: [],
  	exports: [GetTasksComponent] })
export class GetTasksComponentModule {
}
