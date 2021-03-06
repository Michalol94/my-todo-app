import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTasksComponent } from './get-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule,
  ],
  declarations: [GetTasksComponent],
  providers: [],
  exports: [GetTasksComponent],
})
export class GetTasksComponentModule {}
