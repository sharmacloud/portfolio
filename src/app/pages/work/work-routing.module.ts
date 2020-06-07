import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkPage } from './work.page';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: WorkPage,
    // children: [
    //   {
    //     path: 'skills',
    //     component: SkillsComponent
    //   },
    //   {
    //     path: 'work',
    //     component: ProjectsComponent
    //   },

    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkPageRoutingModule {}
