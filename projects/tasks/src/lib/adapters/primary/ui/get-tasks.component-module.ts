import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTasksComponent } from './get-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, BsDropdownModule.forRoot()],
	declarations: [GetTasksComponent],
	providers: [],
	exports: [GetTasksComponent]
})
export class GetTasksComponentModule {
}
