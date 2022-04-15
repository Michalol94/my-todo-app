import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseGetImagesService } from './firebase-get-images.service';
import { GETS_ALL_IMAGE_DTO } from '../../../application/ports/secondary/gets-all-image.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseGetImagesService,
    { provide: GETS_ALL_IMAGE_DTO, useExisting: FirebaseGetImagesService },
  ],
  exports: [],
})
export class FirebaseGetImagesServiceModule {}
