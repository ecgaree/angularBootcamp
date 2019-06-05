import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

import { VideoDataService } from '../../video-data.service';
import { Video } from '../../app-types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  video: Observable<Video>;
  constructor(route: ActivatedRoute, videoSvc: VideoDataService) {
    this.video = route.queryParams.pipe(
      // tslint:disable-next-line:no-string-literal
      map(params => params['videoId']),
      filter(id => !!id),
      switchMap(id => videoSvc.loadSingleVideo(id))
    );
  }

  ngOnInit() {
  }

}
