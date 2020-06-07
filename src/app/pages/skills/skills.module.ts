import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsPageRoutingModule } from './skills-routing.module';

import { SkillsPage } from './skills.page';

import { SkillsComponent} from '../../components/skills/skills.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsPageRoutingModule
  ],
  declarations: [SkillsPage, SkillsComponent]
})
export class SkillsPageModule {}
