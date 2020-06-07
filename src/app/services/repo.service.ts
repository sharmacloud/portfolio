import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getreposurl, postcontacturl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getRepos(){

    return this.httpClient.get(getreposurl);
  }

  postContact(contactData){
      const body = contactData;
      return this.httpClient.post(postcontacturl,
        body
        );
  }

}
