import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowImagesPage } from './show-images.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ShowImagesPage,
        }
      ])],
  	declarations: [ShowImagesPage],
  	providers: [],
  	exports: [] })
export class ShowImagesPageModule {
}
