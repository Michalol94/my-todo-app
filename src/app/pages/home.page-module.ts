import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DataPickerComponentModule } from '@data-picker';

@NgModule({
  imports: [CommonModule, DataPickerComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ])],
  declarations: [HomePage],
  providers: [],
  exports: []
})
export class HomePageModule {
}
