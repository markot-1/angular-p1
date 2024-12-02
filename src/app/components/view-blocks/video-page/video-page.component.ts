import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDataService } from '../../../services/video-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-video-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss',
})
export class VideoPageComponent {
  data: any;
  videoId: string | null = null;
  videoData: any;

  constructor(
    private videoDataService: VideoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.videoDataService.getData().subscribe((data) => {
      this.data = data;
      this.initializeWithData(this.data);
    })
  }

  initializeWithData(data: any) {
    this.route.paramMap.subscribe((params) => {
      this.videoId = params.get('id');
    });
    let video = data.items.filter((item: any) => {
      return item.id === this.videoId;
    });
    this.videoData = video[0];
  }
}
