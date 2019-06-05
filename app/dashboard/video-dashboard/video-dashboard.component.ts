import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideoId: Observable<string>;
  videoList: Observable<Video[]>;

  constructor(videoSvc: VideoDataService, route: ActivatedRoute) {
    this.videoList = videoSvc.loadVideos();

    this.selectedVideoId = route.queryParams.pipe(
      // tslint:disable-next-line:no-string-literal
      map(params => params['videoId'])
    );
  }

  ngOnInit() {
  }

}
