import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChangeBgColorPipe } from '../../../pipes/change-bg-color.pipe';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [NgIf, NgFor, ChangeBgColorPipe],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() videoData: any;
}
