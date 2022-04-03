import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	declarations: [CreateTaskComponent],
	providers: [],
	exports: [CreateTaskComponent]
})
export class CreateTaskComponentModule {
}
