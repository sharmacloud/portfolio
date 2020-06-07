import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkPageRoutingModule } from './work-routing.module';

import { WorkPage } from './work.page';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule,
  ],
  declarations: [WorkPage, ProjectsComponent, ExperienceComponent]
})
export class WorkPageModule {}
