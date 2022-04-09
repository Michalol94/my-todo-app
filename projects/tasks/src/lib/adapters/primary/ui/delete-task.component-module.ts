import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTaskComponent } from './delete-task.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DeleteTaskComponent],
  	providers: [],
  	exports: [DeleteTaskComponent] })
export class DeleteTaskComponentModule {
}
