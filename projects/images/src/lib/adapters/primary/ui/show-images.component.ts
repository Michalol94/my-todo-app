import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDTO } from '../../../application/ports/secondary/image.dto';
import {
  GETS_ALL_IMAGE_DTO,
  GetsAllImageDtoPort,
} from '../../../application/ports/secondary/gets-all-image.dto-port';

@Component({
  selector: 'lib-show-images',
  templateUrl: './show-images.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowImagesComponent {
  image$: Observable<ImageDTO[]> = this._getsAllImageDto.getAll();

  constructor(
    @Inject(GETS_ALL_IMAGE_DTO) private _getsAllImageDto: GetsAllImageDtoPort
  ) {}
}
