import { Observable } from 'rxjs';
import { AlertDTO } from '../../../application/ports/secondary/alert.dto';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ALERT_DTO_STORAGE,
  AlertDtoStoragePort,
} from '../../../application/ports/secondary/alert-dto.storage-port';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  alert$: Observable<AlertDTO> = this._alertDtoStorage.asObservable();

  constructor(
    @Inject(ALERT_DTO_STORAGE) private _alertDtoStorage: AlertDtoStoragePort
  ) {}
}
