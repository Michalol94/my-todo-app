import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageDTO } from '../../lib/application/ports/secondary/image.dto';

@Component({
  selector: 'app-show-images-page',
  templateUrl: './show-images.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowImagesPage {
  images$: Observable<ImageDTO[]> = of([id]);
}
