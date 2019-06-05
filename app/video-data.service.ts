import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from './app-types';

const apiUrl = 'https://api.angularbootcamp.com';

export interface VideoOptions {
  videoId: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(apiUrl + '/videos').pipe(
        map(videos => [
          ...videos,
          {
            title: 'Added From Map!',
            author: 'map',
            id: 'aa',
            viewDetails: []
          }
        ]),
        map(videos => videos.map(
          video => {
            return{ ...video, title: video.title.toUpperCase() };
          }
        ))
      );
  }

  loadSingleVideo(id: string): Observable<Video> {
    return this.http.get<Video>(apiUrl + '/videos/' + id);
  }

}
