import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { CreateTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/create-task.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { GetTasksComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/get-tasks.component-module';
import { ShowImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/show-images.component-module';
import { FirebaseGetImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-get-images.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  CreateTaskComponentModule,
  FirebaseTasksServiceModule,
  GetTasksComponentModule,
  ShowImagesComponentModule,
  FirebaseGetImagesServiceModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
