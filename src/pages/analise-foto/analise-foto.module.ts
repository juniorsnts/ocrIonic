import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnaliseFotoPage } from './analise-foto';

@NgModule({
  declarations: [
    AnaliseFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(AnaliseFotoPage),
  ],
})
export class AnaliseFotoPageModule {}
