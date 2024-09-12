import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent implements OnInit {
  @Input() videoData: any;

  ngOnInit(): void {
    console.log(this.videoData);
  }
}
