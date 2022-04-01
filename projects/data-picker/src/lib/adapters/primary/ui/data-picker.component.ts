import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DisplayDateDTO } from '../../../application/ports/secondary/display-date.dto';


@Component({ selector: 'lib-data-picker', templateUrl: './data-picker.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class DataPickerComponent {

    displayData$: Observable<DisplayDateDTO[]> = of([
        {
            text: 'TODAY',
            date: Date.now()
        }
    ])
}
        // today: number = Date.now();