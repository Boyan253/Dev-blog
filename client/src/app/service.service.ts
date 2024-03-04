import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/postInterface';
// let HTTP_URL = `http://localhost:3000`
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private HTTP_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  deletePost(postId: any):Observable<any> {
    console.log(postId);
   return this.httpClient.delete(`${this.HTTP_URL}/delete/${postId}`)
    

  }

  createPost(data: Post) {
    // console.log(this.httpClient.post(`${this.HTTP_URL}/create`, { data }));

    return this.httpClient.post(`${this.HTTP_URL}/create`, { data })

  }
  updatePost(id: any, data: Post) {
    console.log(this.httpClient.post(`${this.HTTP_URL}/create`, { data }));

    return this.httpClient.put(`${this.HTTP_URL}/edit/${id}`, { data })

  }
  editPost(data: Post) {
    return this.httpClient.post(`${this.HTTP_URL}/edit`, { data })


  }

  loadProfilePosts(userId: any) {
    return this.httpClient.get(`${this.HTTP_URL}/profile/${userId}`)
  }
  loadProfile(userId: any) {
    return this.httpClient.get(`${this.HTTP_URL}/users/${userId}`)
  }
  loadPosts() {
    return this.httpClient.get(`${this.HTTP_URL}/`)
  }

  getPostDetails(postId: number): Observable<any> {
    console.log(postId);

    // Replace with your API endpoint for retrieving post details

    return this.httpClient.get(`${this.HTTP_URL}/details/${postId}`);
  }

  getPostThumbnail(postId: number): Observable<any> {
    console.log(postId);

    const url = `https://app.contentful.com/spaces/d2r7x1sflies/entries/asset:${postId}?previousEntries=1LFKjgz9t950nQcka2rnSD`; // Replace with your API endpoint for retrieving post details

    return this.httpClient.get(url);
  }
}
