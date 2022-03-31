import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarDTO } from '../../../application/ports/secondary/navbar.dto';

@Component({ selector: 'lib-navbar', templateUrl: './navbar.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavbarComponent {
    navbarItems$: Observable<NavbarDTO[]> = of([
        {
            text: "MICHAL'S TODO APP"
        },
    ])
}
