import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }


  loadPosts() {
    return this.httpClient.get(`https://cdn.contentful.com/spaces/d2r7x1sflies/environments/master/entries?access_token=arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw`)
  }

  getPostDetails(postId: number): Observable<any> {
    console.log(postId);

    const url = `https://cdn.contentful.com/spaces/d2r7x1sflies/environments/master/entries/${postId}?access_token=arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw`; // Replace with your API endpoint for retrieving post details

    return this.httpClient.get(url);
  }

  getPostThumbnail(postId: number): Observable<any> {
    console.log(postId);

    const url = `https://app.contentful.com/spaces/d2r7x1sflies/entries/asset:${postId}?previousEntries=1LFKjgz9t950nQcka2rnSD`; // Replace with your API endpoint for retrieving post details

    return this.httpClient.get(url);
  }
}
