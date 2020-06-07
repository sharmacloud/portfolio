import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  repoData: any;

  constructor(
    private repos: RepoService
  ) { }

  ngOnInit() {


    this.repos.getRepos().subscribe((data) => {
      this.repoData = data['data']['data'];
      console.log(this.repoData)
    });

  }



}
