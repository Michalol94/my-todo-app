import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTasksComponent } from './get-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, BsDropdownModule.forRoot(), ModalModule.forRoot()],
	declarations: [GetTasksComponent],
	providers: [],
	exports: [GetTasksComponent]
})
export class GetTasksComponentModule {
}
