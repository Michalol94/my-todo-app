import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { GetTasksComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/get-tasks.component-module';
import { ShowImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/show-images.component-module';
import { FirebaseGetImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-get-images.service-module';
import { HomeComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/home.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeComponentModule,
    FirebaseTasksServiceModule,
    GetTasksComponentModule,
    ShowImagesComponentModule,
    FirebaseGetImagesServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
