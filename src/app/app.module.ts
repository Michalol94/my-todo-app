import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { NavbarComponentModule } from '@navbar';
import { DataPickerComponentModule } from '@data-picker';
import { AngularFireModule } from '@angular/fire/compat';
import { AlertComponentModule } from 'projects/tasks/src/lib/adapters/primary/ui/alert.component-module';
import { InMemoryAlertStorageModule } from 'projects/tasks/src/lib/adapters/secondary/infrastructure/in-memory-alert.storage-module';
import { InMemoryTasksStorageModule } from '@tasks';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NavbarComponentModule,
    AlertComponentModule,
    DataPickerComponentModule,
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryTasksStorageModule,
    InMemoryAlertStorageModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
