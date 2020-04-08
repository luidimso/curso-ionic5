import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitPageRoutingModule } from './init-routing.module';

import { InitPage } from './init.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InitPage]
})
export class InitPageModule {}
