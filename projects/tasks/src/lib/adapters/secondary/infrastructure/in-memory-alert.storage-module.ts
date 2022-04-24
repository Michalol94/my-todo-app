import { NgModule } from '@angular/core';
import { InMemoryAlertStorage } from './in-memory-alert.storage';
import { ALERT_DTO_STORAGE } from '../../../application/ports/secondary/alert-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryAlertStorage, { provide: ALERT_DTO_STORAGE, useExisting: InMemoryAlertStorage }],
  	exports: [] })
export class InMemoryAlertStorageModule {
}
