import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ShowImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/show-images.component-module';
import { FirebaseGetImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-get-images.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ShowImagesComponentModule,
    FirebaseGetImagesServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
